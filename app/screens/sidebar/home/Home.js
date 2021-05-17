import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Icon from 'react-native-vector-icons/Ionicons';
export default function Home(props) {
    const navigation = useNavigation()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassWord] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor:'#1f570a' }}>
            <View style={styles.top}>
                <Text style={styles.txt_white}>Name User</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20}>
                        <Image source={require('../../../../assets/hombre-araña3.jpg')} style={{ width: 150, height: 100 }}></Image>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txt_center}>Registrar {'\n'} Producción</Text>
                        </View>
                    </Row_simple>
                </View>
                <View style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20}>
                        <Image source={require('../../../../assets/hombre-araña2.jpg')} style={{ width: 150, height: 100 }}></Image>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txt_center}>Visualizar {'\n'} Producción</Text>
                        </View>
                    </Row_simple>
                </View>
                <View style={styles.acontainer}>
                    <Row_simple mar_top={20} mar_bot={20}>
                        <Image source={require('../../../../assets/hombre-araña.jpg')} style={{ width: 150, height: 100 }}></Image>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.txt_center}>Reporte de {'\n'} sensores</Text>
                        </View>
                    </Row_simple>
                </View>
                <View style={styles.abcontainer}>
                    <Row_simple mar_top={20} mar_bot={20}>
                        <Image source={require('../../../../assets/peter-negro.png')} style={{ width: 90, height: 90 }}></Image>
                    </Row_simple>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: '#1f570a',
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
        fontFamily: 'Metropolis-Regular'
    },
    acontainer: {
        width: '80%', 
        paddingHorizontal: 40,
        display: 'flex', 
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 25,
        borderColor: '#3b3b3b',
        borderWidth:2

    },
    abcontainer:{
        height: 120,
        width: '30%', 
        paddingHorizontal: 17,
        display: 'flex', 
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 25,
        borderColor: '#3b3b3b',
        borderWidth:2
    },
    txt_center: {
        textAlign: 'center'
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
