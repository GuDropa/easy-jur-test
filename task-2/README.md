# Como iniciar o projeto

1 - Primeiro clone o repositório e acesse a pasta "task-2" pelo terminal, efetue o **npm install** e aguarde a instalação

2 - Rode o comando **npx live-server**, o programa deve abrir uma aba em seu navegador com a lista de pastas disponíveis

3 - Acesse a public, o componente será renderizado

# HighlightedQuotePlugin para CKEditor5

## Introdução

O `HighlightedQuotePlugin` é um plugin personalizado para o CKEditor5 que permite aos usuários inserir citações destacadas no conteúdo do editor. Este guia fornece instruções sobre como integrar o plugin ao CKEditor5.

## Requisitos

- CKEditor5 configurado em seu projeto.
- Conhecimento básico de JavaScript e CKEditor5.

## Instalação

1. **Adicionar o Plugin ao Projeto**

   Copie o código do `HighlightedQuotePlugin` para um arquivo JavaScript no seu projeto, por exemplo, `highlightedquote.js`.

2. **Importar o Plugin no CKEditor5**

   No arquivo onde você configura o CKEditor5, importe o plugin:

   ```javascript
   import HighlightedQuotePlugin from './highlightedquote';
   ```

## Configuração

1. **Adicionar o Plugin à Instância do Editor**

   Na configuração do CKEditor5, adicione o `HighlightedQuotePlugin` à lista de plugins:

   ```javascript
   ClassicEditor
       .create(document.querySelector('#editor'), {
           plugins: [
               // Outros plugins
               HighlightedQuotePlugin
           ],
           toolbar: [
               // Outras opções de toolbar
               'highlightedQuote'
           ]
       })
       .then(editor => {
           console.log('Editor was initialized successfully', editor);
       })
       .catch(error => {
           console.error('There was a problem initializing the editor', error);
       });
   ```

   - Certifique-se de adicionar `'highlightedQuote'` à toolbar para que o botão do plugin apareça na interface do editor.

2. **Personalizar Estilos CSS**

   O plugin aplica a classe `highlighted-quote` ao elemento `blockquote` gerado. Para garantir que o estilo da citação destacada esteja de acordo com o design do seu projeto, adicione os estilos necessários ao seu arquivo CSS:

   ```css
   .highlighted-quote {
       background-color: #f0f0f0;
       padding: 10px;
       border-left: 5px solid #ccc;
       margin: 10px 0;
   }

   .highlighted-quote strong {
       font-weight: bold;
   }
   ```

## Uso

1. **Inserindo uma Citação Destacada**

   - Selecione o texto que deseja destacar no editor.
   - Clique no botão `Insert Highlighted Quote` na toolbar.
   - O texto selecionado será envolvido em um bloco `<blockquote>` estilizado com a classe `highlighted-quote`.

## Desenvolvimento Avançado

- **Modificação do Plugin**

  Se você deseja personalizar ainda mais o plugin, como alterar a estrutura HTML gerada ou adicionar novas funcionalidades, você pode editar a classe `HighlightedQuotePlugin` diretamente.