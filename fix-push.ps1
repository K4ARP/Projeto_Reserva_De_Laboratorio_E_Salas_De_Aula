# Script para remover node_modules do histórico do Git
# Copie e cole isso no PowerShell na pasta do projeto

Write-Host "=== Removendo node_modules do histórico ===" -ForegroundColor Green

# 1. Garantir que está na branch certa
Write-Host "`n1. Verificando branch..." -ForegroundColor Yellow
git branch

# 2. Remover node_modules do filesystem (se existir)
Write-Host "`n2. Removendo pasta node_modules local..." -ForegroundColor Yellow
if (Test-Path "frontend\node_modules") {
    Remove-Item -Recurse -Force "frontend\node_modules"
    Write-Host "Pasta removida!" -ForegroundColor Green
} else {
    Write-Host "Pasta não encontrada (ok)" -ForegroundColor Gray
}

# 3. Remover do índice do Git
Write-Host "`n3. Removendo do índice do Git..." -ForegroundColor Yellow
git rm -r --cached frontend/node_modules 2>$null
git add .gitignore
git commit -m "Remove node_modules from tracking"

# 4. Instalar git-filter-repo (se necessário)
Write-Host "`n4. Verificando git-filter-repo..." -ForegroundColor Yellow
try {
    python -m git_filter_repo --version 2>$null
    Write-Host "git-filter-repo já instalado!" -ForegroundColor Green
} catch {
    Write-Host "Instalando git-filter-repo..." -ForegroundColor Yellow
    pip install git-filter-repo
}

# 5. Remover do histórico
Write-Host "`n5. Removendo do histórico (pode demorar)..." -ForegroundColor Yellow
python -m git_filter_repo --path frontend/node_modules --invert-paths --force

# 6. Limpar cache
Write-Host "`n6. Limpando cache do Git..." -ForegroundColor Yellow
git reflog expire --expire=now --all
git gc --prune=now

# 7. Push forçado
Write-Host "`n7. Fazendo push forçado..." -ForegroundColor Yellow
git push --force origin frontend-dev

Write-Host "`n=== Concluído! ===" -ForegroundColor Green
