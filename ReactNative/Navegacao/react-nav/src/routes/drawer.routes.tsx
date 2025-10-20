import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GallerySreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name='gallery'
                component={GalleryScreen}
                options={{
                    drawerIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="view-gallery" size={size} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}