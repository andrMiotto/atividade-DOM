# Atividade DOM

Projeto de exercícios práticos sobre o DOM (Document Object Model). Este repositório contém exemplos e atividades para manipular a árvore DOM usando JavaScript puro, com foco em seleção de elementos, criação e remoção de nós, manipulação de eventos e atualização dinâmica de conteúdo.

## Conteúdo / Objetivos
- Praticar seleção de elementos do DOM (querySelector, getElementById, etc.)
- Adicionar, remover e modificar elementos dinamicamente
- Tratar eventos de usuário (click, input, submit, etc.)
- Exercitar boas práticas de organização de scripts e separação de responsabilidades

## Tecnologias
- HTML5
- CSS3 (opcional)
- JavaScript (ES6+)

## Como executar (local)
Este repositório provavelmente é um conjunto de arquivos estáticos. Há algumas formas simples de executar localmente:

1. Abrir o arquivo diretamente
   - Abra `index.html` no seu navegador (se existir no diretório raiz).

2. Servir por um servidor local simples (recomendado para evitar problemas com requisições fetch/ES modules)
   - Com Python 3:
     - Na pasta do projeto rode: `python3 -m http.server 8000`
     - Acesse: `http://localhost:8000`
   - Com Node.js (se preferir):
     - Instale http-server: `npm install -g http-server`
     - Rode: `http-server -c-1`
     - Acesse a URL informada pelo comando.

3. Usando extensões do editor
   - Visual Studio Code: usar a extensão "Live Server" e clicar em "Go Live".

Ajuste conforme scripts/estrutura do repositório caso existam arquivos package.json, Makefile ou outros.

## Estrutura sugerida do repositório
- index.html — página principal com exemplos/atividades
- /css — estilos (opcional)
- /js — scripts JavaScript (ex.: `main.js`, `exercicio1.js`)
- /assets — imagens, ícones e outros recursos
- README.md — este arquivo

Adapte se a sua estrutura for diferente.

## Exemplos rápidos
- Selecionar um elemento:
  const el = document.querySelector('#meuElemento');

- Criar e inserir um elemento:
  const li = document.createElement('li');
  li.textContent = 'Novo item';
  document.querySelector('#lista').appendChild(li);

- Adicionar listener:
  btn.addEventListener('click', () => { /* ... */ });

## Boas práticas
- Manter separação entre HTML, CSS e JS
- Evitar manipulações DOM muito custosas dentro de loops grandes — prefira fragmentos (DocumentFragment)
- Delegação de eventos quando houver muitos elementos dinâmicos
- Usar nomes de funções e arquivos claros e descritivos

## Contribuição
1. Fork o repositório
2. Crie uma branch: `git checkout -b minha-melhoria`
3. Faça suas alterações e commit: `git commit -m "Descrição da melhoria"`
4. Abra um Pull Request

Se quiser, abra uma issue antes para discutir a mudança.

## Suporte / Issues
Se encontrar problemas ou quiser sugerir melhorias, abra uma issue descrevendo:
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Logs/prints (se aplicável)
