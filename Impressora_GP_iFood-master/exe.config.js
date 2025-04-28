const { build } = require('@angablue/exe');

build({
  entry: './main.js', // Arquivo de entrada agora é o main.js
  out: './dist',      // Pasta onde o executável vai ser gerado
  target: 'windows-x64-10.0.19042', // Target de Windows
  version: '1.0.0',
  icon: './static/media/icons/win/AppIcon.ico', // Usa o ícone que já existe no projeto
  properties: {
    FileDescription: 'Gerenciador de Impressão de Pedidos do iFood',
    ProductName: 'Impressora GP iFood',
    CompanyName: 'iFood',
    LegalCopyright: 'iFood',
    OriginalFilename: 'ImpressoraGPiFood.exe',
    InternalName: 'ImpressoraGPiFood'
  }
});
