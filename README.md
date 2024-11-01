# Tripleten web_project_around - EUA Afora

**EUA Afora** é uma página interativa onde os usuários podem explorar, adicionar e remover fotos de locais nos Estados Unidos, com a opção de curtir as fotos. Este projeto é desenvolvido como parte da Sprint 7 da Tripleten.

## Visão Geral

O site é projetado para ser responsivo e atender layouts para dispositivos móveis e desktop, com uma experiência de usuário adaptada para telas de 320px a 1280px. Ele inclui um layout de galeria e um pop-up de edição de perfil com campos editáveis para "Nome" e "Sobre mim".

### Funcionalidades

- Adição, remoção e curtidas em fotos.
- Pop-up de edição de perfil com campos customizáveis.
- Layout responsivo para dispositivos móveis e desktop.
- Efeitos de overflow com texto cortado e reticências.
- Estrutura de ramificações no Git para organização do desenvolvimento.

## Tecnologias

- **HTML**: Estrutura da página e dos elementos.
- **CSS**: Layout responsivo e estilo dos elementos (incluindo layout em grid).
- **JavaScript**: Gerenciamento do comportamento do site, como abrir e fechar pop-ups e manipular os dados do usuário.
- **Git e GitHub**: Controle de versão e publicação do projeto.

## Estrutura de Ramificações

Este projeto utiliza uma estrutura de ramificações conforme a metodologia Git Flow para organização do código:

1. **Main**: Código final e revisado, pronto para implementação.
2. **Develop**: Ramificação de desenvolvimento principal.
3. **Feature/xxx**: Ramificações para desenvolvimento de recursos específicos.
4. **Hotfix/xxx**: Ramificações para correção rápida de erros encontrados após publicação.

### Fluxo de Trabalho no Git

1. Mescle código do `main` em `develop` antes de iniciar.
2. Crie uma nova ramificação `feature/xxx` e desenvolva o recurso.
3. Mescle a `feature/xxx` em `develop` ao concluir.
4. Realize testes na `develop` e, ao finalizar, mescle-a no `main`.
5. Para correções pós-revisão, use `hotfix/xxx` e mescle ao final no `main`.

## Documentação e Implementação

A versão mais recente do projeto pode ser visualizada no GitHub Pages:

[Visualizar Projeto EUA Afora](https://astormg.github.io/web_project_around/)
