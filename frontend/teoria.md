# Programação Frontend

- Utilizar JS para interagir com o site.
- Fluxo de um projeto:
  1. Escreve-se código em um editor de texto.
  2. Aloca o projeto em um servidor.
  3. Alguém visita o site.
     - Navegador realiza uma requisição HTTP para receber o index.html
     - Server manda uma cópia.
     - Navegador lê o HTML, e vê que se tem um script JS.
     - Navegador faz mais uma requisição ao Server para buscar o script.
     - Server manda o script para o cliente.
     - Navegador executa o código JS.
     - Mesmo processo acontece também com o CSS.
