# Run All VS Code Diagnostics, AI, Predictive, Security, Dashboard, and Auto-Healing
# Usage: Right-click and 'Run with PowerShell' or run in an interactive PowerShell session

# Load modules
. "$HOME\OneDrive\Documents\GitHub\summerlinwestrealestate\summerlinwestrealestate\vscode-diagnostics.ps1"
. "$HOME\OneDrive\Documents\GitHub\summerlinwestrealestate\summerlinwestrealestate\vscode-diagnostics-ultimate.ps1"

# Run diagnostics
$health = Test-VSCodeHealth -Detailed
$ai = Get-AIAnalysis -HealthData $health
$pred = Get-PredictiveInsights -HealthData $health -PredictionHours 48
$sec = Get-SecurityAnalysis
$dashboard = New-InteractiveDashboard -HealthReport $health -OutputPath "$HOME\OneDrive\Documents\GitHub\summerlinwestrealestate\summerlinwestrealestate"

# Auto-healing if issues found
if ($ai.Issues.Count -gt 0) {
    $autoheal = Invoke-AutoHealing -Issue $ai.Issues[0] -HealthData $health
} else {
    $autoheal = 'No issues to auto-heal'
}

# Save results
$result = [PSCustomObject]@{
    Health = $health
    AI = $ai
    Predictive = $pred
    Security = $sec
    Dashboard = $dashboard
    AutoHeal = $autoheal
}
$result | ConvertTo-Json -Depth 10 | Out-File "$HOME\OneDrive\Documents\GitHub\summerlinwestrealestate\summerlinwestrealestate\diagnostics-full-report.json" -Encoding UTF8

Write-Host "Diagnostics complete. Results saved to diagnostics-full-report.json." -ForegroundColor Green 