# dev-power-settings.ps1
# Run this script as Administrator to optimize your Windows system for development sessions.

Write-Host "Checking current power settings..."
powercfg /query

Write-Host "Preventing system sleep when plugged in..."
powercfg /change standby-timeout-ac 0

Write-Host "Preventing monitor sleep when plugged in..."
powercfg /change monitor-timeout-ac 0

Write-Host "Disabling USB selective suspend..."
powercfg /change usb-selective-suspend-setting 0

Write-Host "Checking available sleep states..."
powercfg /availablesleepstates

Write-Host "Creating a high performance power plan (optional)..."
powercfg /duplicatescheme 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c MyHighPerformance

# Optional: Set VS Code process priority to High (run VS Code first, then uncomment below)
# Write-Host "Setting VS Code process priority to High..."
# Get-Process "Code" | ForEach-Object { $_.PriorityClass = "High" }

Write-Host "Checking PowerShell execution policy..."
Get-ExecutionPolicy -List

# Optional: Set execution policy if needed (uncomment to enable)
# Write-Host "Setting PowerShell execution policy to RemoteSigned for CurrentUser..."
# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

Write-Host "All power and dev environment settings applied!" 