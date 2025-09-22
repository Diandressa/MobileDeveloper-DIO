# Flexbox

## Flex

O elemento ocupa toda tel, se houver mais elementos com flex 1 eles vão dividir esse espaço total.

## Flex Direction

Precisa estar no component pai.

## Justify Content e Align Items

Alinha os elementos no eixo horizontal ou vertical, depende do flex direction

Justify Content está ligado ao eixo principal (o flex direction)

E o Align Items  está ligado ao eixo secundário (se o principal é horizontal o secundário será vertical)

## Align self

Sempre atua no eixo secundário. Alinha o elemento filho, só no qual foi aplicado.

## FlexWrap

Quebra os elementos para uma nova linha

## Align Content

Funciona com o Flex Wrap. Caso o wrap quebra os elementos, ele alinha esse conjunto que foi quebrado.
Ele direciona o eixo secundário, após a quebra do flex wrap. Se houver quebra ele muda o posicionamento do eixo secundário.

## FlexBasis

Somente aplicável para os components filhos. Aumento a largura ou altura de acordo com a direção do elemento pai. Se for row aumenta a largura e se for column a altura. Com valores numéricos acima de 0.

## Flex Grow

Aplica em componentes filhos. Ele subtrai o tamanho do elementos que já estão lá. O espaça que sobre é preenchido pelo elemento que recebe o flex grow. Com valor 1.

## Flex Shrink

Ao contrário do grow, ele reduz o elemento pra caber no espaço que sobra. Se usar em mais de um elemento ele reduz os elementos com flex shrink até tudo caber na tela, os elementos sem o flex shrink não encolhem. Com valor 1.

## Jogo para treinar

[Flexbox Froggy](https://flexboxfroggy.com/) -> Tem o default como row em vez de do column do React Native

