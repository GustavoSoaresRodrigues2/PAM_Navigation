// Imports Geral
import React from "react";
import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Imports Pages
import Home from "../pages/home";
import Details from "../pages/details";

const Stack = createStackNavigator();

export default function StackShifts() {
    return (

        <Stack.Navigator>
            <Stack.Screen name = 'home' component = {Home} />
            <Stack.Screen name = 'details' component = {Details} />
        </Stack.Navigator>

    );
}
