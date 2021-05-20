import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Column_simple from '../../../utils/components/colum_simple'
import Icon from 'react-native-vector-icons/Ionicons';
//import { Calendar } from 'react-native-calendario';
import DatePicker from 'react-native-datepicker'

export default function VisualProduction(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState('')
    const [date2, setDate2] = useState('')
    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <View style={styles.top}>
                <Text style={styles.txt_white}>Visualizar Producción</Text>
            </View>

            <View style={styles.container}>
                <Row_simple mar_top={30}>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Fecha Inicio</Text>
                        <View style={styles.container_input}>
                            <DatePicker style={{width: 150}}
                                date={date}
                                format='DD-MM-YYYY'
                                minDate='20-05-2019'
                                maxDate='20-05-2025'
                                onDateChange={setDate}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Fecha Fin</Text>
                        <View style={styles.container_input}>
                            <DatePicker style={{width: 150}}
                                date={date2}
                                format='DD-MM-YYYY'
                                minDate='20-05-2019'
                                maxDate='20-05-2025'
                                onDateChange={setDate2}
                            />
                        </View>
                    </View>
                </Row_simple>
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
        paddingHorizontal: 20
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
        paddingHorizontal: 40,
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
        width: 150,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    calen_div: {
        display: 'flex'

    },
    icon: {
        width: 40,
        height: 40
    },
    input: {
        flex: 1,
        color: "#000",
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
