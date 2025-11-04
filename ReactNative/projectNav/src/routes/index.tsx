import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsRoutes } from "./bottomTabs.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
}