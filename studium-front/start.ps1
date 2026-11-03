$ErrorActionPreference = 'Stop'

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'

if ($nodeCommand) {
    $nodeExecutable = $nodeCommand.Source
} elseif (Test-Path -LiteralPath $bundledNode) {
    $nodeExecutable = $bundledNode
} else {
    throw 'Instale o Node.js com npm e abra um novo terminal para iniciar o front-end.'
}

$viteEntry = Join-Path $PSScriptRoot 'node_modules\vite\bin\vite.js'
if (!(Test-Path -LiteralPath $viteEntry)) {
    throw 'Dependências ausentes. Execute npm install na pasta studium-front usando uma instalação do Node.js com npm.'
}

Push-Location $PSScriptRoot
try {
    & $nodeExecutable $viteEntry --host 127.0.0.1 @args
    $viteExitCode = $LASTEXITCODE
} finally {
    Pop-Location
}
exit $viteExitCode
