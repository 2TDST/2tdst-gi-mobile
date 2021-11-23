import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListProjects from "../screens/ListProjects";
import AddProjects from "../screens/AddProjects";

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='ListProjects' component={ListProjects} />
                <Screen name='AddProjects' component={AddProjects} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack