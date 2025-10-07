import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import GallerySreen from '../screens/GallerySreen'

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Main menu',
                    headerTintColor: 'blue',
                    headerShown: false,
                }}
            />

            <Screen 
                name='gallery'
                component={GallerySreen}
            />
        </Navigator>
    )
}