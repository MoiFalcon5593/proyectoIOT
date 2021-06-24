import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import Row_simple from '../../../utils/components/row_simple'
import Icon from 'react-native-vector-icons/Ionicons';
import { SaveLogin, SaveUser } from '../../../actions/loginActions';
import Colum_simple from '../../../utils/components/colum_simple';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Col } from 'react-native-table-component';
import { AddRegistersTipRiesgo } from '../../../actions/ProductionActions';
export default function RegisterAbono(props) {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    console.log("nadaa");
    const user = useSelector(reducers => reducers.loginReducer).User;
    const [name, setName] = useState('')
    const [nombre, setEmail] = useState(null)
    const [costo, setCosto] = useState(null)
    const [cantidad, setCantidad] = useState(null)
    const [contrasena, setPassword] = useState(null)
    const [showPassword, setShowPassWord] = useState(false);
    const listas  = useSelector(reducers => reducers.ProductionReducer).ListTipRiesgo;
    console.log(listas);

    const onSubmmmit = async () => {
        if (!nombre || !costo || !cantidad) {
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        dispatch(AddRegistersTipRiesgo(nombre, costo, cantidad))
        Alert.alert(
            "Satisfactorio",
            "Nuevo tipo de abono creado",
            [
                {
                    text: "Ok",
                    onPress: () => navigation.goBack()
                }
            ]
        )
    }

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/wp-verde.jpg")}>
            <View style={styles.top}>
                <Row_simple jus_cont={'space-evenly'} flex={1}>
                    <Colum_simple jus_cont={'center'} alitems={'flex-start'} flex={0.1} >
                        <Pressable android_ripple={{ color: "#3b3b3b" }}
                            onPress={() => navigation.goBack()}>
                            <Image source={require("../../../../assets/back.png")} />
                        </Pressable>
                    </Colum_simple>
                    <Colum_simple jus_cont={'center'} alitems={'center'} flex={1} >
                        <Text style={styles.txt_white}>Registro de Abono</Text>
                    </Colum_simple>
                </Row_simple>
            </View>

            <View style={styles.container}>
                <View style={[styles.container_input, { paddingRight: 20 }]}>
                    <TextInput
                        placeholder='Nombre del Abono'
                        placeholderTextColor="#7c7878"
                        keyboardType="default"
                        onChangeText={(e) => setEmail(e)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.container_input}>
                    <TextInput
                        placeholder='Costo de Abono'
                        placeholderTextColor="#7c7878"
                        keyboardType="default"
                        onChangeText={(e) => setCosto(e)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.container_input}>
                    <TextInput
                        placeholder='Cantidad'
                        placeholderTextColor="#7c7878"
                        keyboardType="default"
                        onChangeText={(e) => setCantidad(e)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerBtn}>
                    <Pressable style={{ width: "100%" }} android_ripple={{ color: "#fff" }}
                        onPress={() => onSubmmmit()}>
                        <Text style={styles.textbtn}>Registrar</Text>
                    </Pressable>
                </View>
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
        justifyContent: "center",
        alignItems: 'center',
        height: 450
    },
    top: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '100%',
        height: 100,
        paddingHorizontal: 20
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
        fontFamily: "Metropolis-Bold"
    },
    acontainer: {
        width: '60%',
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 25,
        borderColor: '#3b3b3b',
        borderWidth: 2

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
        color: "#000",
        fontFamily: "Metropolis-Bold"
    },
    textbtn: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Metropolis-Bold",
        //fontSize:15,
        marginVertical: 12
    },
    containerBtn: {
        width: 290,
        backgroundColor: "blue",
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
