import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import DatePicker from 'react-native-datepicker'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Colum_simple from '../../../utils/components/colum_simple';
import ListRegister from './components/listRegisters'
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

const optionsPerPage = [2, 3, 4];

export default function VisualProduction(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState('')
    const [date2, setDate2] = useState('')
    const [tipo, setTipo] = useState('')
    const [page, setPage] = useState(0);
    const [registros, setRegistros] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
    const [tablahead, setTablaHead] = useState(['Fecha', 'Cant. (kg)', 'Costo', 'Tipo de Palta', 'Encarg.'])
    const [tabladata, setTablaData] = useState([
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
    ])
    const listas = useSelector(reducers => reducers.ProductionReducer).ListProduction;
    const url_data = "https://apiusers.azurewebsites.net/api/produccion"


    function getFecha(fecha) {
        let id = fecha.slice(0, 10);
        return id
    }

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    useEffect(() => {
        let value = date.split("-")
        let data = ''
        let value2 = date2.split("-")
        let data2 = ''
        value.forEach(elem => {
            data += elem
        })
        value2.forEach(elem => {
            data2 += elem
        })
        console.log(data.length);
        async function getData() {
            console.log(`${url_data}/${data}/${data2}`);
            try {
                const res = await Axios.get(url_data + `/${data} 00:00/${data2} 23:59`)
                console.log(res.data.objModel);
                setRegistros(res.data.objModel)
            } catch (error) {
                console.log(error);
            }
        }
        if (data.length > 5 || data2.length > 5) {
            getData()
        }
    }, [date, date2]);

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <View style={styles.top}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} />
                </Pressable>
                <Text style={styles.txt_white}>Visualizar Producción</Text>
            </View>

            <View style={styles.container}>
                <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontFamily: "Metropolis-Bold", color: '#fff' }}>Tipo Palta</Text>
                    <View style={styles.row}>
                        <View style={styles.container_input3} flex={1}>
                            <Picker
                                enabled={true}
                                selectedValue={tipo}
                                onValueChange={date => setTipo(date)}
                                itemStyle={{ fontSize: 20, color: 'white' }}
                            >
                                <Picker.Item label="Tipo" value="" color="#a0aec0" />
                                <Picker.Item label="Fuerte" value="Fuerte" />
                                <Picker.Item label="Hass" value="Hass" />
                            </Picker>
                        </View>

                    </View>
                </View>
                <Row_simple mar_top={10}>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: "Metropolis-Bold" }}>Fecha Inicio</Text>
                        <View style={styles.container_input}>
                            <DatePicker style={{ width: 150 }}
                                date={date}
                                format='YYYY-MM-DD'
                                onDateChange={setDate}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff', fontFamily: "Metropolis-Bold" }}>Fecha Fin</Text>
                        <View style={styles.container_input}>
                            <DatePicker style={{ width: 150 }}
                                date={date2}
                                format='YYYY-MM-DD'
                                onDateChange={setDate2}
                            />
                        </View>
                    </View>
                </Row_simple>

                <ScrollView style={{ marginTop: 0, marginBottom: 20 }}>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title ><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>Fecha</Text></DataTable.Title>
                            <DataTable.Title numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>Cantidad</Text></DataTable.Title>
                            <DataTable.Title numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>Precio</Text></DataTable.Title>
                            <DataTable.Title numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>Total</Text></DataTable.Title>
                        </DataTable.Header>

                        {
                            registros.map((item, idx) => (

                                <DataTable.Row>
                                    <DataTable.Cell ><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>{getFecha(item.fechA_REGISTRO)}</Text></DataTable.Cell>
                                    <DataTable.Cell numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>{item.canT_PRO} kg</Text></DataTable.Cell>
                                    <DataTable.Cell numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>{item.precio} kg</Text></DataTable.Cell>
                                    <DataTable.Cell numeric><Text style={{ fontSize: 12, fontFamily: "Metropolis-Bold", color: "white" }}>{item.montoTotal}</Text></DataTable.Cell>
                                </DataTable.Row>

                            ))
                        }



                    </DataTable>
                </ScrollView>

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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '100%',
        height: 100,
    },
    img: {
        width: 80,
        height: 80,
    },
    centro_cont: {
        display: 'flex',
        justifyContent: 'center',
    },
    container_input3: {
        color: "#000"
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
    img_contac2: {
        marginRight: "auto",
        marginLeft: "auto",
        height: 75,
        width: 45
    },
    txt_white: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Metropolis-Bold"
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
    row: {
        display: 'flex',
        alignItems: 'center',
        width: 180,
        height: 45,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        flexDirection: "row",
        marginTop: 5,
        marginVertical: 10,
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
