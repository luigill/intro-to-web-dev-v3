# HTML

- HTML é uma linguagem de marcação de hipertexto.
- Pode ser visto como o conteúdo de uma página web e como esse conteúdo é estruturado.

## Tags

- As tags podem ser consideradas como os blocos de construção de uma página web.
- Elementos são pedaços de conteúdo com uma tag de abertura e fechamento.
- Existem tags que não possuem fechamento, somente abertura.
  - Exemplo: img
- Pode-se também aninhar tags uma dentro da outra, criando-se então uma relação entre elas.

```html
<h1>Título</h1>
```

- As tags podem conter atributos associados a elas.
- As tags podem possuir também classes e IDs, que são muito utilizados para estilização.

  - classes podem estar associadas a várias tags.
  - id's só pode estar associado a uma tag.

- Principais tags:
  - h1 até h6: Títulos que podem ser utilizados na página.
  - p: Parágrafo de texto.
  - a: Links para alguma outra localidade.
    - href: Referência para onde a âncora irá apontar.
  - div: Contâiner genérico para agrupamento de elementos.
  - span: Contâiner pequeno de texto.
  - ol: Lista ordenada.
  - ul: Lista desordenada.
  - li: Elementos de uma lista.
  - button: Um botão.
  - img: Uma imagem.
    - src: Local onde está armazenada a imagem.
    - alt: Texto alternativo sobre a imagem.
  - input: Forma de recever entradas do usuário.
    - type: Define o tipo de entrada que será inserido.
      - color, file, number, datetime-local, radio, checkbox, placeholder.
  - textarea: Locais de edição de texto maiores.
  - select: Método em que o usuário escolhe tendo em vista entradas pré-definidas.
  - option: Opções para o usuário.
    - value: Valor que cada opção irá representar.
  - form: Grupo de entradas de usuários.
  - table: Dados em formato tabular.
