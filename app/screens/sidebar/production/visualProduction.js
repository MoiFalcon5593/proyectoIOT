import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import DatePicker from 'react-native-datepicker'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Colum_simple from '../../../utils/components/colum_simple';
import ListRegister from './components/listRegisters'
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export default function VisualProduction(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState('')
    const [date2, setDate2] = useState('')
    const [tablahead, setTablaHead] = useState(['Fecha', 'Cant. (kg)', 'Costo', 'Tipo de Palta', 'Encarg.'])
    const [tabladata, setTablaData] = useState([
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
        ['16-05-21', '2', '3.20', 'Hass', 'Luis'],
    ])
    const  listas  = useSelector(reducers => reducers.ProductionReducer).ListProduction;
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
                <Row_simple mar_top={30}>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Fecha Inicio</Text>
                        <View style={styles.container_input}>
                            <DatePicker style={{ width: 150 }}
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
                            <DatePicker style={{ width: 150 }}
                                date={date2}
                                format='DD-MM-YYYY'
                                minDate='20-05-2019'
                                maxDate='20-05-2025'
                                onDateChange={setDate2}
                            />
                        </View>
                    </View>
                </Row_simple>
                <View style={{ marginTop: 80, marginBottom: 20 }}>
                    <FlatList
                        data={listas}
                        horizontal={false}
                        renderItem={({ item }) => <ListRegister data={item}  />}
                        keyExtractor={(item, idx) => idx.toString()}
                    />
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
    img_contac2: {
        marginRight: "auto",
        marginLeft: "auto",
        height: 75,
        width: 45
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
