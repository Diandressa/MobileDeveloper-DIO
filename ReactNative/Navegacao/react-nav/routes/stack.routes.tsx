import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../src/screens/HomeScreen'
import { GallerySreen } from '../src/screens/GallerySreen'

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
            />

            <Screen 
                name='gallery'
                component={GallerySreen}
            />
        </Navigator>
    )
}