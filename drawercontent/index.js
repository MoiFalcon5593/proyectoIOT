import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Paragraph,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

export function DrawerContent(props) {

    return (
        <View style={{ flex: 1, borderTopRightRadius: 30, backgroundColor: Colors.color_gray_bg }}>
            {/* Perfil */}
            <DrawerContentScrollView {...props} >

                <View style={styles.drawerContent}>
                    {/* Menu */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.label}
                            label='Notificaciones'>


                        </DrawerItem>
                        {/* <DrawerItem style={[styles.drawerItem, { marginBottom: 15 }]}
                            labelStyle={styles.label}
                            label='Chat'
                            icon={({ color, size, direction }) => (
                                <Image
                                    source={require("../../../assets/flechainicio.png")}
                                    style={styles.imagen}
                                ></Image>
                            )}
                            onPress={() => { }}>
                        </DrawerItem> */}
                        <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.label}
                            label='Tiendas y comercios'>
                        </DrawerItem>
                        <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.label}
                            label='Monedero Keola'>
                        </DrawerItem>

                        <Text style={styles.affiliates}>Zona de Afiliados</Text>
                        <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.label}
                            label='Historial de Pedidos'>
                        </DrawerItem>
                        <DrawerItem style={styles.drawerItem}
                            labelStyle={styles.label}
                            label='KeOla Prime'>
                        </DrawerItem>
                        <DrawerItem style={[styles.drawerItem]}
                            labelStyle={styles.label}
                            label='Mis negocios'>
                        </DrawerItem>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.bottomLogout}>
                <DrawerItem
                    style={[styles.drawerItem,{borderBottomWidth:0,borderTopWidth:0}]}
                    icon={({ color, size }) => (
                        <Icon name='md-exit'
                            color={color}
                            size={size}></Icon>
                    )}
                    label='Cerrar sesión'
                    onPress={() => { }}>
                </DrawerItem>
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        padding: 20,
        backgroundColor: Colors.backgroundPrimary,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 16,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        paddingTop: 10,
        backgroundColor: "#f7fafc",
        backgroundColor: 'transparent'
    },
    drawerItem: {
        backgroundColor: "white",
        marginVertical: 0,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: "#e2e8f0",
        marginHorizontal: 0,
    },
    imagen: {
        width: 12,
        height: 12,
    },
    label: {
        fontFamily: "Metropolis-Regular",
    },
    labelPais: {
        fontFamily: "Metropolis-Regular",
        marginLeft: -10,
    },
    bottomLogout: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    affiliates: {
        marginVertical: 14,
        marginLeft: 20,
        fontFamily: "Metropolis-Regular",
        fontSize: 16
    },
    country: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 65,
        marginVertical: 10,
    }
});