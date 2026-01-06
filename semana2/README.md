# Resumo de HTML – Estrutura, Tags, Semântica e Boas Práticas

## Estrutura Básica do HTML

Todo documento HTML inicia com a declaração `<!DOCTYPE html>`, seguida pela tag `<html>`, que delimita o início e o fim do documento. Dentro dela, o conteúdo é dividido em duas partes principais:

- `<head>`: Contém metadados, título da página (`<title>`) e links para recursos externos.
- `<body>`: Abriga todo o conteúdo visível da página, como textos, imagens, formulários e elementos interativos.

---

## Principais Tags e Organização do Conteúdo

- **Títulos e Parágrafos**: Utiliza-se `<h1>` a `<h6>` para títulos de diferentes níveis e `<p>` para parágrafos.
- **Imagens**: A tag `<img>` insere imagens, sendo obrigatório o uso do atributo `alt` para acessibilidade.
- **Listas**: `<ul>` (lista não ordenada), `<ol>` (lista ordenada) e `<li>` (item de lista) organizam informações em tópicos.
- **Links**: `<a>` cria hiperlinks para navegação entre páginas ou recursos externos.
- **Formulários**: A tag `<form>` agrupa campos de entrada, como `<input>`, `<textarea>`, `<select>`, `<button>`, permitindo a coleta de dados do usuário.

---

## Semântica e Tags Semânticas

O HTML5 introduziu tags semânticas que atribuem significado ao conteúdo, facilitando a compreensão por navegadores e tecnologias assistivas:

- `<header>`: Cabeçalho da página ou seção.
- `<nav>`: Agrupa links de navegação.
- `<main>`: Destaca o conteúdo principal.
- `<article>`: Representa um conteúdo independente, como um post ou notícia.
- `<section>`: Agrupa conteúdos relacionados dentro de uma página ou artigo.
- `<footer>`: Rodapé com informações de contato ou direitos autorais.
- `<address>`: Informações de contato.

---

## Elementos Genéricos: `<div>` e `<span>`

### Para que serve a `<div>`?

A tag `<div>` é um **elemento genérico de bloco**, utilizada para **agrupar outros elementos** quando **não existe uma tag semântica adequada** para representar aquele conteúdo.

Ela **não possui significado semântico**, servindo exclusivamente para **organização estrutural, estilização com CSS e manipulação via JavaScript**.

📌 Usos comuns da `<div>`:
- Criar **containers** para layout (colunas, grids, cards)
- Agrupar elementos para aplicação de **CSS**
- Servir como ponto de referência para **scripts em JavaScript**

### Exemplo prático

```html
<div class="card">
  <h2>Título do Card</h2>
  <p>Descrição do conteúdo.</p>
  <button>Saiba mais</button>
</div>
