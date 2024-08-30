# Como iniciar o projeto

1 - Primeiro clone o repositório e acesse a pasta "task-1" pelo terminal, efetue o **npm install** e aguarde a instalação

2 - Rode o comando **npx live-server**, o programa deve abrir uma aba em seu navegador com a lista de pastas disponíveis

3 - Acesse a public, o componente será renderizado

# Componente de Carrossel

Este documento explica como utilizar o componente `initCarousel` de maneira simples em sua aplicação. O componente cria um carrossel de itens a partir de um seletor CSS, uma lista de itens e algumas opções personalizáveis.

## Como Usar o Componente

### Importação do Componente

Primeiro, certifique-se de que o componente `initCarousel` está importado corretamente no arquivo JavaScript onde você deseja utilizá-lo:

```javascript
import { initCarousel } from './path/to/carousel-component';
```

### Estrutura HTML

Antes de inicializar o carrossel, você precisará de um contêiner HTML onde o carrossel será inserido. Por exemplo:

```html
<div id="myCarouselContainer"></div>
```

### Dados de Entrada

O componente `initCarousel` necessita de uma lista de itens para exibir no carrossel. Cada item deve ser um objeto contendo as seguintes propriedades:

- `identifier`: Um identificador único para o item, usado para criar a URL de detalhes.
- `src`: O caminho para a imagem do item.
- `alt`: (Opcional) O texto alternativo da imagem.
- `title`: O título do item.
- `description`: A descrição do item.

Exemplo de um array de itens:

```javascript
const items = [
    {
        identifier: 'item1',
        src: 'path/to/image1.jpg',
        alt: 'Imagem 1',
        title: 'Título 1',
        description: 'Descrição do item 1'
    },
    {
        identifier: 'item2',
        src: 'path/to/image2.jpg',
        alt: 'Imagem 2',
        title: 'Título 2',
        description: 'Descrição do item 2'
    }
];
```

### Inicialização do Carrossel

Agora, você pode inicializar o carrossel chamando a função `initCarousel` com os parâmetros necessários:

```javascript
const selector = '#myCarouselContainer'; // Seletor CSS do contêiner onde o carrossel será inserido
const infoPath = '/item-info'; // Caminho base para a URL de detalhes dos itens

initCarousel(selector, infoPath, items);
```

### Personalização com Opções (Opcional)

O quarto parâmetro `options` permite personalizações adicionais do carrossel, embora não tenha sido utilizado na função fornecida. Você pode adaptar a função `initCarousel` para suportar mais configurações através deste parâmetro.

### Exemplo Completo

Aqui está um exemplo completo de como integrar o componente em uma página:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Carrossel</title>
    <link rel="stylesheet" href="path/to/bootstrap.css">
</head>
<body>

<div id="myCarouselContainer"></div>

<script src="path/to/jquery.js"></script>
<script src="path/to/bootstrap.bundle.js"></script>
<script type="module">
    import { initCarousel } from './path/to/carousel-component';

    const items = [
        {
            identifier: 'item1',
            src: 'path/to/image1.jpg',
            alt: 'Imagem 1',
            title: 'Título 1',
            description: 'Descrição do item 1'
        },
        {
            identifier: 'item2',
            src: 'path/to/image2.jpg',
            alt: 'Imagem 2',
            title: 'Título 2',
            description: 'Descrição do item 2'
        }
    ];

    const selector = '#myCarouselContainer';
    const infoPath = '/item-info';

    initCarousel(selector, infoPath, items);
</script>

</body>
</html>
```

### Considerações Finais

Este exemplo utiliza jQuery e Bootstrap. Certifique-se de que essas dependências estejam corretamente incluídas no seu projeto. Se necessário, ajuste o código para seu ambiente e necessidades específicas.

A função `initCarousel` permite criar carrosséis dinâmicos e reutilizáveis em diferentes partes da sua aplicação, proporcionando uma forma eficiente de apresentar múltiplos itens em um espaço compacto.

