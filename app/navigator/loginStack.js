import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../screens/login/login';

const Stack = createStackNavigator();
export default function LoginStack() {

    const { register, recovery } = useSelector(reducers => reducers.loginReducer).persistentData;
    //console.log("RegisterData stack:", RegisterData)

    return (
        
        
          <Stack.Navigator initialRouteName={"HomeLogin"}>
         {/* <Stack.Navigator initialRouteName={register ? "verification" : recovery ? "recovery" : "wallethome"}>    */}

            <Stack.Screen
                name='HomeLogin'
                component={Login}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}