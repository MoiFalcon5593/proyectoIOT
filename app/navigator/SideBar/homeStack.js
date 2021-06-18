import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/sidebar/home/Home';
import RegisterProduction from '../../screens/sidebar/production/registerProduction';
import VisualProduction from '../../screens/sidebar/production/visualProduction';
import ReportSensor from '../../screens/sidebar/production/reportSensor';
import GraficSensor from '../../screens/sidebar/production/graficSensors';
import RegisterRiesgo from '../../screens/sidebar/production/registerRiesgo';
import RegisterFertil from '../../screens/sidebar/production/registerFertil';
import ReportMonitoreo from '../../screens/sidebar/production/reportMonitoreo';
import Register from '../../screens/login/components/register';
import RegisterAbono from '../../screens/sidebar/production/RegisterAbono';
import RegisterFertilizante from '../../screens/sidebar/production/RegisterFertilizante';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterProduction' component={RegisterProduction} options={{ headerShown: false }} />
            <Stack.Screen name='VisualProduction' component={VisualProduction} options={{ headerShown: false }} />
            <Stack.Screen name='ReportSensor' component={ReportSensor} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterRiesgo' component={RegisterRiesgo} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterFertil' component={RegisterFertil} options={{ headerShown: false }} />
            <Stack.Screen name='GraficSensor' component={GraficSensor} options={{ headerShown: false }} />
            <Stack.Screen name='ReportMonitoreo' component={ReportMonitoreo} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterAccount' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterAbono' component={RegisterAbono} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterFertilizante' component={RegisterFertilizante} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack
