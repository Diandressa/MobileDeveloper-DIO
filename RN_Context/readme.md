# Context

Podemos passar propriedades através do método de passar propriedades pela rota, e pelo método do Contexto

Método de Passagem de Props

Esse método fica mais complexo e pouco prático.

[Método Passagem de Props](/RN_Context/met-props.png)

Método via contexto

Criamos um contexto, que é um 'espaço em comum' onde guardamos dados e podemos acessa-los depois. Ele não é passado e acessado de um componente para o outro, ele é uma 'espaço aberto' que podemos acessar os dados. Podemos ter vários Contextos diferentes. Os componentes conseguem ler o conteúdo dentro do contexto, por quer ele fornece o provider/provedor, ele controla quem acessa o contexto.

[Método via contexto](/RN_Context/met-context.png)