import { NavigationContainer } from '@react-navigation/native'

//o contexto de rota
import { StackRoutes } from './stack.routes'
import { BottomTabsRoutes } from './bottom-tabs.routes'
import { DrawerRoutes } from './drawer.routes'

//caixa de contextos
export function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}