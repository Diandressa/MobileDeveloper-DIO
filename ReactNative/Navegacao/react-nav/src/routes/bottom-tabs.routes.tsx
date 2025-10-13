import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GallerySreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home' 
                component={HomeScreen}
                options={{
                    tabBarIcon:({color,size}) => (
                        <MaterialCommunityIcons
                            name='home'
                            color='red'
                            size={size}
                        >
                        </MaterialCommunityIcons>
                    ),
                }}
            />
            <Screen 
                name='gallery' 
                component={GalleryScreen}
                options={{
                    tabBarIcon:({color,size}) => (
                        <MaterialCommunityIcons
                            name='view-gallery'
                            color='blue'
                            size={size}
                        >
                        </MaterialCommunityIcons>
                    ),
                }}
            />
        </Navigator>
    )
}