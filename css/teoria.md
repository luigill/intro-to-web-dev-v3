# CSS

- Cascading Style Sheets é uma linguagem de estilização.
- Utilizada para se aplicar estilos na página web.
- - Pode ser visto como um série de regras em que: Caso um elemento atenda um seletor, certo estilo é usado.
- Precisa do HTML para funcionar.
- Quando duas regras conflitam, o efeito cascata age.
  - Vence o último estilo definido.
  - É feito propriedade a propriedade, então pode-se misturar propriedades de diferentes regras, porém, quando conflitam a última ganha.
  - A maior especificidade ganha a corrida também.
  - PONTUAÇÃO
    - Seletores de Tipo | Valor: 1 | Exemplo: img
    - Seletores de Classe | Valor: 10 | Exemplo: .btn
    - Seletores de ID | Valor: 100 | Exemplo: #container
    - Seletores Inline | Valor: 1000 | Exemplo: Estilizar tags diretamente no HTML.
    - !important | Valor: 10000 | Exemplo: Digitar !important no estilo.
- O efeito cascata gera herança de tags pai para tags filhas.
- O ideal é sempre estilizar classes.
- IDs são mais utilizados para manipulações usando JavaScript.
  - Utiliza .nome-da-classe
  - Para id, utiliza-se #nome-do-id
- ID é um dos mais forte dos seletores.
- Seletores que compartilham regras podem ser agrupados:
  ```css
  .read,
  .unread {
    color: white;
    background-color: black;
  }
  ```
- Não utilizar uma regra muito específica, com muitas classes e um seletor gigante.
- De qualquer maneira, pode-se tornar a regra mais específica utilizando mais de uma classe no elemento.
  ```css
  .recipe-card.feature {
    border: 2px solid darkred;
  }
  ```
- Para acessar tags filhas, utiliza-se:
  ```css
  .recipe-card h2 {
    border: 2px solid darkred;
  }
  ```
- Dessa forma, acessa-se somente os h2 que estão dentro dos elementos que tem a classe recipe-card.
- Pseudo-classe: Aplica o estilo somente se a condição for verdadeira.
  - Exemplo: button:hover, em que hover é a pseudo-classe.
- Pseudo-elementos: Elementos que antecedem ou sucedem a a tag e que podem ser estilizados.
  ## Box Model
- Tudo em uma página web é uma caixa.
- Essas caixas podem ter caixas dentro delas.
  - É possível observar isso utilizando o estilo: "outline: 1px dottet red;"
- As skills mais importantes dentro do CSS são posicionamento de elementos e layout.
- O conteúdo de uma tag (definido por height e width, por exemplo) é contido por padding, border e margin.
- Margins colapsam entre si quando se encontram em dois elementos.

  ## Flexbox

- Maneira de organizar os elementos dentro de uma página web.
- Principais propriedades do flex:
  - flex-direction:
  - justify-content:
  - align-items:

## Importar CSS:

```html
<link rel="stylesheet" href="style.css" />
```

## Prioridade CSS

1. !important
2. in-line
3. ID
4. Class

## Seletores CSS

- \*: Seletor universal. Seleciona todos os elementos.
- Tipos: Seleciona tags HTML de determinado tipo.
- Classe: Seleciona as tags HTML que contém a classe determinada.
- ID: Seleciona a tag HTML única que contém determinado ID.

## Propriedades CSS:

- padding: Aumenta o espaço entre a borda e o conteúdo de uma caixa (dentro da caixa).
- margin: Aumenta o espaço entre a borda de uma caixa com a borda de caixas adjascentes (fora da caixa).
  - margins negativos puxam elementos para perto da caixa.
- border: Adiciona espaço entre a margin e o padding.
- box-sizing: Configura como a altura e largura total de um elemento é calculada.
  - content-box: Comportamento padrão do CSS, soma-se o h e w definidos com o margin e border.
  - border-box: Margin e border contam no tamanho, dessa maneira diminui-se o h e w definidos.
    - Utilizado no seletor universal para se evitar matemática do tamanho do elemento.
- line-height: Altura da linha. Ajusta o espaçamento das linhas.
- font-family: Modifica a fonte utilizada.
- font-size: Tamanho da fonte.
- font-weight: Modifica o peso da fonte. Pode-se transformar o texto em negrito.
- height: Altura do componente. Para não se perder proporção, deixa-se em auto e modifica-se o width.
- width: Largura do componente.
- list-style: Estilização de listas.
- color: Cor do texto do elemento.
- background-color: Cor de fundo do elemento.
- text-align: Alinhamento do texto.
- text-decoration: Modifica opções de estilo do texto.
- boarder: Funciona como uma borda de uma pintura. Realiza uma marcação por toda a volta do elemento.
- display: Como o elemento se mostra na tela.
  - block: Um elemento em cima do outro. Comportamento padrão da maioria dos elementos.
  - inline: Elementos em linha com os outros elementos que foram postos em linha.
  - inline-block: Comportamento de inline, com padding e margin de block. Alternativa menos usada que o flexbox.
  - flex: Flexbox.
  <!-- Flex -->
- flex-direction: Direção que os elementos serão organizados.
- justify-content: De que maneira os elementos serão espaçados entre si (justificados).
- align-items: De que maneira os itens são alinhados verticalmente.
  <!-- Genéricos -->
- div: Elemento que normalmente contém outros elementos. Auxilia em divider a página em diferentes blocos para diferentes estilizações.
  - Comportamento Padrão: block
- span: Agrupar conteúdo de texto e elementos inline.
  - Comportamento Padrão: inline
- float: Retira-se o elemento de seu fluxo natural e o coloca em uma posição específica - direita ou esquerda - de seu contâiner.
