# PowerShell profile for VS Code stability and performance
# Place this file at: $PROFILE (usually Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1)

# Check if running in VS Code
if ($env:TERM_PROGRAM -eq "vscode") {
    # VS Code specific optimizations
    $PSDefaultParameterValues['Out-Default:OutVariable'] = '__'
    
    # Disable progress bars for better performance
    $ProgressPreference = 'SilentlyContinue'
    
    # Set console encoding
    $OutputEncoding = [System.Text.Encoding]::UTF8
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    
    # Optimize prompt for VS Code
    function Prompt {
        $location = (Get-Location).Path.Replace($env:USERPROFILE, "~")
        if ($location.Length -gt 50) {
            $location = "..." + $location.Substring($location.Length - 47)
        }
        "PS $location> "
    }
    
    # Auto-restart function for crashed sessions
    function Restart-PowerShellSession {
        if (Get-Process -Name "Code" -ErrorAction SilentlyContinue) {
            Write-Host "Restarting PowerShell session..." -ForegroundColor Yellow
            exit
        }
    }
    
    # Monitor for VS Code process
    Register-EngineEvent -SourceIdentifier PowerShell.Exiting -Action {
        Write-Host "PowerShell session ending gracefully" -ForegroundColor Green
    }
}

# General performance improvements
$MaximumHistoryCount = 1000
Set-StrictMode -Version Latest

# Function to check extension health
function Test-VSCodePowerShellExtension {
    $processes = Get-Process -Name "Code" -ErrorAction SilentlyContinue
    if ($processes) {
        Write-Host "VS Code is running with PIDs: $($processes.Id -join ', ')" -ForegroundColor Green
        
        # Check PowerShell extension process
        $psProcesses = Get-Process -Name "pwsh","powershell" -ErrorAction SilentlyContinue | 
                      Where-Object { $_.Parent.ProcessName -eq "Code" }
        
        if ($psProcesses) {
            Write-Host "PowerShell extension processes: $($psProcesses.Id -join ', ')" -ForegroundColor Green
        } else {
            Write-Host "No PowerShell extension processes found" -ForegroundColor Yellow
        }
    } else {
        Write-Host "VS Code is not running" -ForegroundColor Red
    }
} 