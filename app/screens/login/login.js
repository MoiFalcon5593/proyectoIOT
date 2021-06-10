import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { SaveLogin, SaveUser } from '../../actions/loginActions';
import { storeUserData } from '../../utils/AsyncStore';
export default function Login(props) {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [username, setEmail] = useState(null)
    const [contrasena, setPassword] = useState(null)
    const [showPassword, setShowPassWord] = useState(false);
    const url_data = "https://apiusers.azurewebsites.net/api/usuarios/login"

    const onSummit = async () => {
        if (!username || !contrasena) {
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        const formData = { "USUARIO": username , "PASSWORD": contrasena }
        try {
            const res = await Axios.post(url_data, formData)
            console.log("res:", res)
            if(res.data.objModel.length > 0) {
                dispatch(SaveUser(res.data.objModel))
                dispatch(SaveLogin(true))
                await storeUserData(res.data.objModel)
            }else{
                return Alert.alert(
                    "Alerta",
                    "Usuario y/o contraseña incorrectos",
                    [{ text: "Aceptar", style: "default" }]
                )
            }
            
            //props.navigation.replace('SideBarStack');//No es necesario, y hace renderizar 2 veces.
        } catch (error) {
            console.log(error);
        }
        //props.navigation.replace('SideBarStack');//No es necesario, y hace renderizar 2 veces.

    };

    return (
        <ImageBackground style={styles.container} source={require("../../../assets/bg-login.png")}>

            <View style={[styles.container_input, { paddingRight: 20 }]}>
                <TextInput
                    placeholder='Nombre de usuario'
                    placeholderTextColor="#7c7878"
                    keyboardType="default"
                    onChangeText={(e) => setEmail(e)}
                    style={styles.input}
                />
            </View>
            <View style={styles.container_input}>
                <TextInput
                    placeholder='************'
                    placeholderTextColor="#7c7878"
                    keyboardType="default"
                    secureTextEntry={showPassword ? false : true}
                    onChangeText={(e) => setPassword(e)}
                    style={styles.input}
                />
                {
                    showPassword ? <Icon name='md-eye-off-outline' color="blue" size={20} style={{ marginRight: 10 }}
                        onPress={() => setShowPassWord(false)} /> :
                        <Icon name='ios-eye-outline' color="blue" size={20} style={{ marginRight: 10 }}
                            onPress={() => setShowPassWord(true)} />
                }
            </View>

            <View style={styles.containerBtn}>
                <Pressable style={{ width: "100%" }} android_ripple={{ color: "#fff" }}
                    onPress={() => onSummit()}>
                    <Text style={styles.textbtn}>INICIAR SESIÓN</Text>
                </Pressable>
            </View>
            {/* <Geoloc /> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
