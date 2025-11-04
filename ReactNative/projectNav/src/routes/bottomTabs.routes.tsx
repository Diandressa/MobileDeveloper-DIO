import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const {Navigator,Screen} = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return(
        <Navigator
            screenOptions={
                {
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'lightgray',
                tabBarStyle: 
                    {
                        backgroundColor: 'blue',
                        marginHorizontal: 20,
                        marginBottom: 70,
                        borderRadius: 20,
                        elevation: 0,
                    },
                    tabBarItemStyle: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }   
            }
        >
            <Screen
            name="home"
            component={HomeScreen}
            options={{
                title: 'Main',
                headerShown: false,
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons
                        name='home'
                        size={size}
                    />  
                )
            }}
            />
        </Navigator>
    )
}