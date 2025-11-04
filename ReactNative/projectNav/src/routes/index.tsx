import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsRoutes } from "./bottomTabs.routes";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Routes(){
    return(
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <BottomTabsRoutes/>
            </SafeAreaView>
        </NavigationContainer>
    )
}