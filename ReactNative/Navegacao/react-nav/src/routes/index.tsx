import { NavigationContainer } from '@react-navigation/native'

//o contexto de rota
import { StackRoutes } from './stack.routes'

//caixa de contextos
export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}