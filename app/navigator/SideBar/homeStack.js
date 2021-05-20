import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/sidebar/home/Home';
import RegisterProduction from '../../screens/sidebar/production/registerProduction';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterProduction' component={RegisterProduction} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack
