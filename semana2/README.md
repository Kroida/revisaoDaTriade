# Resumo de HTML – Estrutura, Tags, Semântica e Boas Práticas
## Estrutura Básica do HTML
Todo documento HTML inicia com a declaração `<!DOCTYPE html>`, seguida pela tag `<html>`, que delimita o início e o fim do documento. Dentro dela, o conteúdo é dividido em duas partes principais:
- `<head>`: Contém metadados, título da página (`<title>`) e links para recursos externos.
- `<body>`: Abriga todo o conteúdo visível da página, como textos, imagens, formulários e elementos interativos.
## Principais Tags e Organização do Conteúdo
- **Títulos e Parágrafos**: Utiliza-se `<h1>` a `<h6>` para títulos de diferentes níveis e `<p>` para parágrafos.
- **Imagens**: A tag `<img>` insere imagens, sendo obrigatório o uso do atributo `alt` para acessibilidade.
- **Listas**: `<ul>` (lista não ordenada), `<ol>` (lista ordenada) e `<li>` (item de lista) organizam informações em tópicos.
- **Links**: `<a>` cria hiperlinks para navegação entre páginas ou recursos externos.
- **Formulários**: A tag `<form>` agrupa campos de entrada, como `<input>`, `<textarea>`, `<select>`, `<button>`, permitindo a coleta de dados do usuário.
## Semântica e Tags Semânticas
O HTML5 introduziu tags semânticas que atribuem significado ao conteúdo, facilitando a compreensão por navegadores e tecnologias assistivas:
- `<header>`: Cabeçalho da página ou seção.
- `<nav>`: Agrupa links de navegação.
- `<main>`: Destaca o conteúdo principal.
- `<article>`: Representa um conteúdo independente, como um post ou notícia.
- `<section>`: Agrupa conteúdos relacionados dentro de uma página ou artigo.
- `<footer>`: Rodapé com informações de contato ou direitos autorais.
- `<address>`: Informações de contato.
## Elementos Genéricos: `<div>` e `<span>`
Quando não há uma tag semântica mais apropriada, utilizam-se os elementos genéricos:
- `<div>`: Elemento de bloco (block-level), usado para agrupar conteúdos maiores e estruturar o layout da página (ex.: contêineres, seções genéricas).
- `<span>`: Elemento em linha (inline), usado para aplicar estilizações ou manipulações pontuais em partes específicas de texto sem alterar o fluxo do conteúdo.
## Acessibilidade
- **Rótulos**: O uso de `<label>` associado a campos de formulário melhora a navegação por leitores de tela.
- **Atributos ARIA**: Atributos como `aria-label` e `aria-describedby` fornecem informações adicionais para tecnologias assistivas, tornando a página mais acessível.
- **Atributo `alt` em imagens**: Descreve o conteúdo da imagem para usuários que não podem visualizá-la.
## Atributos Globais
Atributos como `id`, `class`, `style`, `title` e `alt` podem ser aplicados à maioria das tags para identificação, estilização e acessibilidade.
## Boas Práticas
- Utilizar tags semânticas para estruturar o conteúdo de forma lógica e significativa.
- Garantir acessibilidade com rótulos, descrições e atributos apropriados.
- Manter o código organizado, indentado e comentado quando necessário.
- Utilizar atributos globais para facilitar a estilização e manipulação via CSS e JavaScript.
- Evitar o uso excessivo de elementos genéricos como `<div>` e `<span>` quando existirem alternativas semânticas mais adequadas.
---
Este resumo cobre os principais conceitos de estrutura, organização, semântica e boas práticas em HTML, promovendo a criação de páginas web acessíveis, bem estruturadas e de fácil manutenção.
