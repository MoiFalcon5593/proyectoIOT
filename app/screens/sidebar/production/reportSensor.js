import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import DatePicker from 'react-native-datepicker'
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function ReportSensor(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState('')
    const [date1, setDate1] = useState('')
    const url_data = "https://apiparametros.azurewebsites.net/api/parametros"
    const [tablahead, setTablaHead] = useState(['Id', 'Alcalinidad', 'Humedad'])
    const [tabladata, setTablaData] = useState([])
    const [data, setTData] = useState(null)
    console.log(date);
    useEffect(() => {
        async function getData() {
            try {
                const res = await Axios.get(url_data)
                console.log("res:", res.data)
                setTablaData(res.data)
                res.data.map((item, idx) => {
                    if (idx === res.data.length - 1) {
                        setDate(item.niveL_HUMEDAD);
                        setDate1(item.niveL_ALCALINIDAD)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, []);
    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <View style={styles.top}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} />
                </Pressable>
                <Text style={styles.txt_white}>Reporte Sensores</Text>
            </View>
            <ScrollView>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '80%', textAlign: 'center', height: 80, borderRadius: 10}}>
                    <Text style={{color: 'black'}}>Húmedad</Text>
                    {
                        date > 0 && date < 40 ?
                        <Text style={{textAlign: 'center', color: 'red'}}>El terreno necesita ser regado urgentemente.</Text>:
                        date > 40 && date < 80 ?
                        <Text style={{textAlign: 'center', color: 'yellow'}}>El terreno se encuentra en condiciones estables, pero en un periódo cercano se debe planificar el proceso de riego.</Text>
                        :
                        <Text style={{textAlign: 'center', color: 'blue'}}>El terreno se encuentra en óptimas condiciones.</Text>
                    }
                </View>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '80%', textAlign: 'center', height: 80, borderRadius: 10}}>
                <Text style={{color: 'black'}}>Alcalinidad</Text>
                    {
                        date1 > 0 && date1 < 4.8 ?
                        <Text style={{textAlign: 'center', color: 'red'}}>Se requiere el uso de fertilizantes y abono.</Text>:
                        date1 > 4.8 && date1 < 6.4 ?
                        <Text style={{textAlign: 'center', color: 'blue'}}>El terreno se encuentra en óptimas condiciones.</Text>:
                        <Text style={{textAlign: 'center', color: 'yellow'}}>El terreno se encuentra con excesos de nutrientes.</Text>
                    }
                </View>
                </View>
                <View style={styles.container}>
                    <View style={{ marginTop: 10 }}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title >Id</DataTable.Title>
                                <DataTable.Title numeric>Alcalinidad</DataTable.Title>
                                <DataTable.Title numeric>Humedad</DataTable.Title>
                            </DataTable.Header>
                            {
                                tabladata.map((item) => (
                                    <DataTable.Row key={item.id}>
                                        <DataTable.Cell><Text style={{ color: 'white' }}>{item.id}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric><Text style={{ color: 'white' }}>{item.niveL_ALCALINIDAD}</Text></DataTable.Cell>
                                        <DataTable.Cell numeric><Text style={{ color: 'white' }}>{item.niveL_HUMEDAD}%</Text></DataTable.Cell>
                                    </DataTable.Row>
                                ))
                            }
                        </DataTable>
                    </View>
                </View>
            </ScrollView>
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    head: {
        height: 60,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6,
        textAlign: 'center'
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
