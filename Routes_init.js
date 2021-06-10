import React, { lazy, Suspense, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './app/screens/loading';
import LoginStack from './app/navigator/loginStack'
import HomeStack from './app/navigator/SideBar/homeStack';
import { getListRegisters, getUserData } from './app/utils/AsyncStore';
import { SaveListRegisters } from './app/actions/ProductionActions';
import { SaveLogin, SaveUser } from './app/actions/loginActions';

const Stack = createStackNavigator();
const Routes_init = () => {

    /*****/
    const dispatch = useDispatch();
    const LoginState = useSelector(reducers => reducers.loginReducer).Login;
    console.log('que hay:', LoginState);
    useEffect(() => {
        async function getList() {
            const list = await getListRegisters()
            const user = await getUserData()
            console.log("lista de registros:", list)
            console.log("usuario?:", user)
            if (list) dispatch(SaveListRegisters(list))
            if (user) {
                dispatch(SaveUser(user))
                dispatch(SaveLogin(true))

            } else {
                dispatch(SaveLogin(null))
                dispatch(SaveUser(null))
            }
        }
        getList();
    }, [])


    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={"green"} /* hidden={true} */ />
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {LoginState == null &&
                        <Stack.Screen name='validation_jwt' component={LoginStack} options={{ headerShown: false }} ></Stack.Screen>}
                    {LoginState &&
                        <Stack.Screen name='Sidebar' component={SideBarStack} options={{ headerShown: false }} />}
                    <Stack.Screen name='SWallet' component={HomeStack} options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const SideBarStackLazy = lazy(() => import("./app/navigator/SideBarStack"))
const SideBarStack = (props) => (
    <Suspense fallback={<Loading view />}>
        <SideBarStackLazy {...props} />
    </Suspense>
)


/* const LoadingSuspense = () => (
    <View style={styles.container}>
        <Text style={styles.text}>
            CARGANDO...
        </Text>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#df7639"
    },
    text: {
        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    }
}) */

export default Routes_init
