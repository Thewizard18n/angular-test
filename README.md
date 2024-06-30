# Conceitos Clean Architecture aplicados e design patterns
 - desenvolvimentos em camadas
 - fortalecimento do open closed principle , inversão de dependência (extensibilidade , testabilidade e futuras manutenção do MVP)
 - Separation of concern design (SoC) aplicado para delegar e separar com clareza.
 - criação de um facade service para evitar o acumulo de responsabilidades para o uso de metódos HTTP no cliente

# Angular app arquitetura
 - Arquitetura baseada em projeções feitas pelo livro Angular for Enterprise Applications
 - controle entre o que vai ser eager loaded e lazy loaded
 - controle sobre mudanças em versões do angular recentes para segurança da aplicacão.
 - Notifição ao ficar offline e online novamente

# Angular v14,v15 features implementadas
 - formularios fortemente tipados com formBuilder
 - diretiva para carregamento de imagem otimazadas , evitando layout trashing (TBT)

# o que eu mudaria/implementaria ?
 - muita responsabilidade no componente e no serviço. usar um gerenciador global com (NgRx) aliviaria.
 - conforme a aplicação aumenta é necessario implementar tecnicas de cutting-edge css para otimizar o css
 - Testes e2e
 - Testes unitarios
 - Usar o Angular para gerar algumas automações (scaffolding)
 - Loader como structural directive e não NgIf


# Visão abstrata arquitetura front

<p align="center">
  <img alt="front" src="./Screenshot 2024-06-30 at 00.59.44.png"  >
</p>

# Visão macro AWS system design

<p align="center">
  <img alt="aws" src="./Screenshot 2024-06-25 at 14.26.19.png"  >
</p>

## Rodar a aplicação online

Acesse em -> https://thewizard18n.github.io/angular-test/
