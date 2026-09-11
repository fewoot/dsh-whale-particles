param(
    [string]$ProfileName = "desktop"
)
$ErrorActionPreference = "Stop"

$homeDir = Join-Path $env:USERPROFILE ".dsh"
$prof    = Join-Path $homeDir ("profiles\" + $ProfileName)
$pj      = Join-Path $prof "package.json"
$dst     = Join-Path $prof "node_modules\dsh-whale-particles"

if (-not (Test-Path -LiteralPath $pj)) { Write-Host "未找到 profile 配置: $pj"; exit 1 }

# 1) 从 bundles 移除
try {
    $json = Get-Content -LiteralPath $pj -Raw | ConvertFrom-Json
    if ($json.dsh.profile.bundles) {
        $json.dsh.profile.bundles = @($json.dsh.profile.bundles | Where-Object { $_ -ne "dsh-whale-particles" })
    }
    [System.IO.File]::WriteAllText($pj, ($json | ConvertTo-Json -Depth 20))
} catch { Write-Host "修改 package.json 失败(可能已手动改过): $_" }

# 2) 删除插件文件夹
if (Test-Path -LiteralPath $dst) { Remove-Item -LiteralPath $dst -Recurse -Force }

Write-Host "✅ 已卸载。请重启 DSH Desktop 生效。"
Write-Host "(你的用户设置如已保存参数会保留在浏览器 localStorage 中;如需彻底清除可在 DevTools 删除 dsh-whale:cfg / dsh-whale:photo)"
