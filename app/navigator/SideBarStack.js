import React, { useEffect, useRef, useState } from 'react';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { DrawerContent } from '../navigator/DrawerContent'
import { Image, View, Text, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import HomeStack from './SideBar/homeStack';



const Drawer = createDrawerNavigator();

export default function SideBarStack(props) {


    const dispatch = useDispatch();
    const navigation = useNavigation()

    function titleHome() {
        return (
            <View style={{ justifyContent: "center" }}>
                <Image source={require("../../assets/fondo.jpg")} style={{ height: 33, width: 80 }} />
            </View>
        )
    }

    return (
        <>

            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}></DrawerContent>}
                screenOptions={{
                    headerStyle: {
                        // backgroundColor: "#f4f6f8",
                        backgroundColor: 'red',
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                        color: "#d6692a",
                        fontSize: 24
                    },
                    headerTitleAlign: "left",
                    headerTintColor: "#ee710c",
                    //headerLeft: () => titleHome2()
                }}
                drawerPosition="left"
                drawerType="front"

                drawerStyle={{
                    width: Dimensions.get("window").width * 0.80,
                    margin: 0,
                    marginTop: 20,
                    borderTopRightRadius: 20,
                    flex: 1
                }}
            >
                <Drawer.Screen name='SideHome' component={HomeStack}
                    options={{
                        title: titleHome(),
                        headerShown: false
                    }}
                />

            </Drawer.Navigator>



        </>
    );
}