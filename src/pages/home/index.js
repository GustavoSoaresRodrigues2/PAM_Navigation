// Imports Geral
import React from "react";
import { View,Text, Button } from "react-native";
import Details from "../details";

export default function Home() {
    return (
        <View>
            <Text>Screen Home !</Text>

            <Button title = 'Go to Details' onPress = {Details} />
        </View>
    );
}
