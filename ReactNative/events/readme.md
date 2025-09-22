# Events onPress

Os eventos começam com o termo "on" . São ações que os componentes podem fazer.

`<Text onPress={handlerPress(2)}>Open up App.tsx to start working on your app!</Text>`

Não recebe parâmetro diretamente. Precisa ser por array function:

`<Text onPress={() => handlerPress(2)}>Open up App.tsx to start working on your app!</Text>`

## onPressIn

Sempre é executado antes do onPress, ele é acionado ao pressionar. Pode ser usado para fazer alguma verificação, pois ele é executado primeiro, antes das funções onPress

## onPressOut

Acionado depois da saída/finalizado o onPressIn, usado geralmente para guardar um dado depois da verificação PressIn

A ordem da execução das funções é: OnPressIn, depois onPress e por fim o onPressOut

## onLongPress

Quando é executado por um tempo mais longo. Ele executado outra ação ao clicar. Só executa o press in e pressOut, o onPress é substituído por ele quando clico e seguro

## onTextLayout

É acionado quando o texto vai para o layout, quando o texto é renderizado na aplicação a função é acionada
