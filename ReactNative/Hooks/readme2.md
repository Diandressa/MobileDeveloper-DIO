# Hooks no React Native - Gerenciando Components

O React Web importa, no head, o react.developmente.js (motor/core que gerencia o react por debaixo dos panos), e o react-dom-development.js (o react dom gerencia a renderização/ render em aplicações web)

No React Native usamos react.develoment.js (o motor do react), e para renderização usamos o React Native (renderiza em apps mobile). 

Os hooks irão vir dentro do motor do React (react.developmente.js)

## Necessidade de um hook

React Core, responsável pela parte lógica:

* funções
* variáveis 
* source (código fonte)

React Native ou web, responsável pela view:

* renderização

O React Core passa a lógica para o React Native renderizar uma única vez. Para atualizar a aplicação precisamos utilizar os Hooks (Ganchos)