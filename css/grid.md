# Grid

- Outra maneira de movimentar elementos dentro de uma página.
- Demonstra os elementos em um formato de grid.
- row-gap e column-gap: Espaço entre os itens da grid.
- grid-template-column: Configura como a grid é construída, pode ser feita usando pixels, porcentagens ou frações - que são o padrão.
- grid-area: Nome associado a sessão de um elemento do grid.
- grid-template-areas: Maneira de criar um mapa para o navegador montar o site.

```css
.grid {
  /* Configura o display como grid  */
  display: grid;
  /* Duas colunas - duas frações - cada uma com 50% */
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
}
```
