import "react-native-gesture-handler";
import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/Tabs'

import { Products, Brands } from "./screens";
// import OfflineNotice from './helper/offline'



const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
         {/* <OfflineNotice /> */}
            <Stack.Navigator
                screenOptions={{
                    headerShown: true
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="Brands" component={Brands} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
