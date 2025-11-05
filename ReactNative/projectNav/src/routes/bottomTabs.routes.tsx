import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SkillScreen from "../screens/SkillScreen";
import { FollowMeScreen } from "../screens/FollowMeScreen";
import { theme } from "../styles/theme";

const {Navigator,Screen} = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return(
        <Navigator
            screenOptions ={({route,navigation}) => (
                {
                    headerShown: false,
                    tabBarIcon: ({color,focused,size})=>{

                        let iconName: 'comment-text-outline' | 'account' | 'text-short' = 'comment-text-outline';

                        if(route.name === 'about'){
                            iconName = 'comment-text-outline'
                        } else if (route.name === 'follow'){
                            iconName = 'account'
                        } else {
                            iconName ='text-short'
                        }

                        return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
                    },

                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#ffffff78',
                    tabBarStyle:{
                        position: 'absolute',
                        bottom: 20,
                        backgroundColor: theme.colors.primary,
                        marginHorizontal: 40,
                        height: 80,
                        borderRadius: 50,
                        elevation: 0,
                    },
                    tabBarItemStyle: {
                        display: 'flex',
                        flexDirection: 'row',
                        paddingBlock: 0,
                        marginBottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                    }
                }
            )}
        >
            <Screen
            name="about"
            component={HomeScreen}
            />

            <Screen
            name="follow"
            component={FollowMeScreen}
            />

            <Screen
            name="skills"
            component={SkillScreen}
            />
        </Navigator>
    )
}