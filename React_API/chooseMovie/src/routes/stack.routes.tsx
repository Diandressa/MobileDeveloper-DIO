import { createStackNavigator } from '@react-navigation/stack';
import RaffleScreen from '../screens/RaffleScreen';
import MovieScreen from '../screens/MovieScreen';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='raffle'
                component={RaffleScreen}
                options={{
                    title: 'Main menu',
                    headerTintColor: 'pink',
                    headerShown: false,
                }}
            />
            <Screen
                name='movie'
                component={MovieScreen}
            />
        </Navigator>
    )
}