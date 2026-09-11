param(
    [string]$ProfileName = "desktop"
)
$ErrorActionPreference = "Stop"

$homeDir = Join-Path $env:USERPROFILE ".dsh"
$prof    = Join-Path $homeDir ("profiles\" + $ProfileName)
$plugin  = Join-Path $PSScriptRoot "dsh-whale-particles"

if (-not (Test-Path -LiteralPath $prof)) {
    Write-Host "找不到 DSH profile: $prof"
    Write-Host "如果你的 profile 不叫 desktop,请加参数运行: install-whale.bat <profile名>"
    exit 1
}
if (-not (Test-Path -LiteralPath (Join-Path $plugin "package.json"))) {
    Write-Host "缺少插件文件夹: 本脚本旁应有 dsh-whale-particles\ 目录"
    exit 1
}

# 1) 把插件代码放进该 profile 的 node_modules
$dst = Join-Path $prof "node_modules\dsh-whale-particles"
if (Test-Path -LiteralPath $dst) { Remove-Item -LiteralPath $dst -Recurse -Force }
Copy-Item -LiteralPath $plugin -Destination $dst -Recurse -Force
Write-Host "1/3 插件代码已复制到 $dst"

# 2) 备份 package.json
$pj = Join-Path $prof "package.json"
if (-not (Test-Path -LiteralPath "$pj.bak")) { Copy-Item -LiteralPath $pj -Destination "$pj.bak" -Force }
Write-Host "2/3 已备份原 package.json -> package.json.bak"

# 3) 把 dsh-whale-particles 注册进 bundles
$json = Get-Content -LiteralPath $pj -Raw | ConvertFrom-Json
if (-not ($json.dsh.profile.bundles -contains "dsh-whale-particles")) {
    $json.dsh.profile.bundles = @($json.dsh.profile.bundles) + "dsh-whale-particles"
}
[System.IO.File]::WriteAllText($pj, ($json | ConvertTo-Json -Depth 20))
Write-Host "3/3 已注册 bundle"

Write-Host ""
Write-Host "✅ 安装完成。请重启 DSH Desktop 生效。"
Write-Host "卸载: 打开 设置 -> 插件 停用/删除; 或运行 uninstall-whale.bat"
