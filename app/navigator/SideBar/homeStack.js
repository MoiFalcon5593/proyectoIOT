import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/sidebar/home/Home';
import RegisterProduction from '../../screens/sidebar/production/registerProduction';
import VisualProduction from '../../screens/sidebar/production/visualProduction';
import ReportSensor from '../../screens/sidebar/production/reportSensor';
import GraficSensor from '../../screens/sidebar/production/graficSensors';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterProduction' component={RegisterProduction} options={{ headerShown: false }} />
            <Stack.Screen name='VisualProduction' component={VisualProduction} options={{ headerShown: false }} />
            <Stack.Screen name='ReportSensor' component={ReportSensor} options={{ headerShown: false }} />
            <Stack.Screen name='GraficSensor' component={GraficSensor} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack
