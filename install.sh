#!/bin/bash

# Aborta o script se qualquer comando falhar
set -e

echo "📦 Instalando dependências do projeto test-front..."
npm install

echo ""
echo "🔍 Verificando se o submódulo test-back está presente..."

# Inicializa e atualiza submódulos, se necessário
git submodule update --init --recursive

echo ""
echo "📁 Entrando na pasta do test-back..."
cd Luizalabs-test-back

echo ""
echo "🐳 Executando o script docker-install..."
bash ./docker-install

cd ..
npm run dev
echo ""
echo "✅ Tudo pronto! test-front e test-back estão com as dependências instaladas."
