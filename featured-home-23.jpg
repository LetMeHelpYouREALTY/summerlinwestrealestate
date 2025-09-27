#Requires -Version 5.1
<#
.SYNOPSIS
    Advanced VS Code PowerShell Extension Health Monitoring & Diagnostics System

.DESCRIPTION
    A comprehensive diagnostic and monitoring system for VS Code and PowerShell extension.
    Features automated health checks, performance monitoring, self-healing capabilities,
    and detailed reporting with cross-platform support.

.NOTES
    Version: 2.0.0
    Author: Advanced PowerShell Diagnostics
    Compatible: Windows PowerShell 5.1+, PowerShell 7+
    Requires: Administrator privileges for some functions
    
.EXAMPLE
    Test-VSCodeHealth -Detailed
    Get-VSCodePerformanceReport -Hours 24 -ExportPath "C:\Reports"
    Start-VSCodeMonitor -AutoHeal -LogPath "C:\Logs"
#>

[CmdletBinding()]
param()

# Module-level variables
$script:VSCodeDiagnostics = @{
    Version = "2.0.0"
    StartTime = Get-Date
    LogPath = "$env:TEMP\VSCode-Diagnostics"
    ConfigPath = "$env:USERPROFILE\.vscode-diagnostics"
    MaxLogSize = 10MB
    IsElevated = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

# Ensure log directory exists
if (-not (Test-Path $script:VSCodeDiagnostics.LogPath)) {
    New-Item -Path $script:VSCodeDiagnostics.LogPath -ItemType Directory -Force | Out-Null
}

#region Helper Functions

function Write-DiagnosticLog {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Message,
        
        [ValidateSet('Info', 'Warning', 'Error', 'Success', 'Debug')]
        [string]$Level = 'Info',
        
        [switch]$NoConsole
    )
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss.fff"
    $logEntry = "[$timestamp] [$Level] $Message"
    
    # Console output with colors
    if (-not $NoConsole) {
        $color = switch ($Level) {
            'Info' { 'White' }
            'Warning' { 'Yellow' }
            'Error' { 'Red' }
            'Success' { 'Green' }
            'Debug' { 'Gray' }
        }
        Write-Host $logEntry -ForegroundColor $color
    }
    
    # File logging
    $logFile = Join-Path $script:VSCodeDiagnostics.LogPath "vscode-diagnostics.log"
    Add-Content -Path $logFile -Value $logEntry -Encoding UTF8
    
    # Rotate log if too large
    if ((Get-Item $logFile -ErrorAction SilentlyContinue).Length -gt $script:VSCodeDiagnostics.MaxLogSize) {
        $archiveFile = Join-Path $script:VSCodeDiagnostics.LogPath "vscode-diagnostics-$(Get-Date -Format 'yyyyMMdd-HHmmss').log"
        Move-Item $logFile $archiveFile
    }
}

function Get-ProcessAdvanced {
    [CmdletBinding()]
    param(
        [string[]]$Name,
        [switch]$IncludeChildren
    )
    
    try {
        $processes = Get-Process -Name $Name -ErrorAction SilentlyContinue
        
        if ($IncludeChildren -and $processes) {
            $allProcesses = $processes
            foreach ($process in $processes) {
                $children = Get-CimInstance -ClassName Win32_Process | 
                           Where-Object { $_.ParentProcessId -eq $process.Id }
                if ($children) {
                    $childProcesses = $children | ForEach-Object { Get-Process -Id $_.ProcessId -ErrorAction SilentlyContinue }
                    $allProcesses += $childProcesses
                }
            }
            return $allProcesses | Sort-Object Id -Unique
        }
        
        return $processes
    }
    catch {
        Write-DiagnosticLog "Error getting processes: $($_.Exception.Message)" -Level Error
        return $null
    }
}

function Test-ProcessHealth {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [System.Diagnostics.Process]$Process
    )
    
    try {
        # Basic responsiveness test
        $responsive = $Process.Responding
        
        # Memory usage check (warn if > 1GB)
        $memoryMB = [math]::Round($Process.WorkingSet64 / 1MB, 2)
        $highMemory = $memoryMB -gt 1024
        
        # CPU usage check (requires performance counter)
        $cpuPercent = try {
            $processName = $Process.ProcessName
            $cpuCounter = Get-Counter "\Process($processName)\% Processor Time" -ErrorAction SilentlyContinue
            if ($cpuCounter) {
                [math]::Round($cpuCounter.CounterSamples[0].CookedValue, 2)
            } else { 0 }
        } catch { 0 }
        
        # Handle count check (warn if > 10000)
        $handleCount = $Process.HandleCount
        $highHandles = $handleCount -gt 10000
        
        return [PSCustomObject]@{
            ProcessId = $Process.Id
            ProcessName = $Process.ProcessName
            Responsive = $responsive
            MemoryMB = $memoryMB
            HighMemory = $highMemory
            CPUPercent = $cpuPercent
            HandleCount = $handleCount
            HighHandles = $highHandles
            StartTime = $Process.StartTime
            RunTime = (Get-Date) - $Process.StartTime
            Status = if ($responsive -and -not $highMemory -and -not $highHandles) { "Healthy" } 
                    elseif ($responsive) { "Warning" } 
                    else { "Critical" }
        }
    }
    catch {
        Write-DiagnosticLog "Error testing process health for PID $($Process.Id): $($_.Exception.Message)" -Level Error
        return $null
    }
}

#endregion

# ... (rest of the script as provided, including all core, reporting, and monitoring functions) ... 