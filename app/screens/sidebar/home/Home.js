import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Row_simple from '../../../utils/components/row_simple'
import Icon from 'react-native-vector-icons/Ionicons';
import { SaveLogin, SaveUser } from '../../../actions/loginActions';
export default function Home(props) {
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const onLogout = async () => {
        dispatch(SaveLogin(null))
        dispatch(SaveUser(null))
    }

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <View style={styles.top}>
                <Text style={styles.txt_white}>Name User</Text>
            </View>

            <View style={styles.container}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.navigate("RegisterProduction")} style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20} pad_h={30}>
                        <Image source={require('../../../../assets/pr.png')} style={{ width: 80, height: 80 }}></Image>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.txt_center}>Registrar {'\n'} Producción</Text>
                        </View>
                    </Row_simple>
                </Pressable>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.navigate("VisualProduction")} style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20} pad_h={30}>
                        <Image source={require('../../../../assets/lupita.png')} style={{ width: 80, height: 80 }}></Image>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.txt_center}>Visualizar {'\n'} Producción</Text>
                        </View>
                    </Row_simple>
                </Pressable>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                onPress={() => navigation.navigate("ReportSensor")} style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20} pad_h={30}>
                        <Image source={require('../../../../assets/camara.png')} style={{ width: 80, height: 80 }}></Image>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={styles.txt_center}>Reporte de {'\n'} sensores</Text>
                        </View>
                    </Row_simple>
                </Pressable>
                <Pressable android_ripple={{ color: "#3b3b3b" }} onPress={() => onLogout()} style={styles.abcontainer}>
                    <Row_simple mar_top={20} mar_bot={20}>
                        <Image source={require('../../../../assets/exit.png')} style={{ width: 80, height: 80 }}></Image>
                    </Row_simple>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerhead: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '100%',
        height: 100,
    },
    centro_cont: {
        display: 'flex',
        justifyContent: 'center',
    },
    container_sec: {
        margin: 20
    },
    txt_white: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    acontainer: {
        width: '80%',
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 25,
        borderColor: '#3b3b3b',
        borderWidth: 2

    },
    abcontainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },
    txt_center: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    container_input: {
        backgroundColor: "#fff",
        width: 290,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    icon: {
        width: 40,
        height: 40
    },
    input: {
        flex: 1,
        color: "#000"
    },
    textbtn: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        //fontSize:15,
        marginVertical: 12
    },
    containerBtn: {
        width: 290,
        backgroundColor: "#ff4d0d",
        borderRadius: 15,
        marginVertical: 10,
        overflow: "hidden"
    },
    text1: {
        color: "#e9c28f",
        textDecorationLine: "underline",
        marginVertical: 2.5,
        paddingVertical: 5,
        fontWeight: "bold"
    },
    text2: {
        color: "#fff",
        fontWeight: "bold"
    },
    loginFooter: {
        //flexDirection: "row",
        marginTop: 20,
        width: 220,
        //justifyContent: "space-around",
        alignItems: "center"
    }
})
