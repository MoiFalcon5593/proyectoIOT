import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Login(props) {
    const navigation = useNavigation()
    const [username, setEmail] = useState(null)
    const [contrasena, setPassword] = useState(null)
    const [showPassword, setShowPassWord] = useState(false);
    const urlData = "http://localhost:3001"

    const onSummit = async () => {

        if (!username || !contrasena) {
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        const formData = { username: username, contrasena: contrasena }
        console.log("entre");
        await axios.get(
            urlData + '/api/medicion')
            .then(res => {
                const { data } = res;
                console.log(data);
                switch (data.msg) {
                    case 'FOUND':
                        console.log('Login validado');
                        getUserData(data.userID);
                        break;
                    case 'NOT_FOUND':
                        setNotification(true);
                        console.log('Login no validado');
                        break;
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <ImageBackground style={styles.container} source={require("../../../assets/fondo.jpg")}>

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
                    showPassword ? <Icon name='md-eye-off-outline' color="#f0a830" size={30} style={{ marginRight: 10 }}
                        onPress={() => setShowPassWord(false)} /> :
                        <Icon name='ios-eye-outline' color="#f0a830" size={30} style={{ marginRight: 10 }}
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
