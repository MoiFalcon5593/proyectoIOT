import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import DatePicker from 'react-native-datepicker'
import { DataTable } from 'react-native-paper';
import Slider from "react-native-slider";
import Icon2 from 'react-native-vector-icons/AntDesign';
import Colum_simple from '../../../utils/components/colum_simple';

export default function ReportSensor(props) {
    const navigation = useNavigation()
    const [date, setDate] = useState(0)
    const [date1, setDate1] = useState(0)
    const url_data = "https://apiusers.azurewebsites.net/api/parametros"
    const [tablahead, setTablaHead] = useState(['Id', 'Alcalinidad', 'Humedad'])
    const [tabladata, setTablaData] = useState([])
    const [data, setTData] = useState(null)
    useEffect(() => {
        async function getData() {
            try {
                const res = await Axios.get(url_data)
                setTablaData(res.data.objModel)
                res.data.objModel.map((item, idx) => {
                    if (idx === res.data.objModel.length - 1) {
                        setDate(item.niveL_HUMEDAD);
                        setDate1(Number(item.niveL_ALCALINIDAD))
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [tabladata]);
    return (
        <View style={styles.fathercontainer}>
            <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
                <View style={styles.top}>
                    <Pressable android_ripple={{ color: "#3b3b3b" }}
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../../../../assets/back.png")} />
                    </Pressable>
                    <Text style={styles.txt_white}>Reporte Sensores</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={{ marginTop: 30 }}>
                        <Row_simple jus_cont={'center'} alitems={'space-between'} flex={1}>
                            <Colum_simple flex={0.9}>
                                <Pressable android_ripple={{ color: "#3b3b3b" }}
                                    onPress={() => navigation.navigate("GraficSensor", { tipo: 'Niveles de Humedad' })}>
                                    <Text style={{ marginBottom: 20, textAlign: 'center' }}>Nivel de Humedad: {date} (%)</Text>
                                    <Slider
                                        style={{ width: '100%', height: 40, marginBottom: 20 }}
                                        minimumValue={0}
                                        value={date}
                                        disabled
                                        maximumValue={100}
                                        minimumTrackTintColor="#FFFFFF"
                                        maximumTrackTintColor="#000000"
                                        thumbStyle={{ height: 80, width: 20 }}
                                        thumbTintColor="red"
                                        trackStyle={{ height: 60 }}
                                    />
                                    <Row_simple>
                                        <View>
                                            <Text>0</Text>
                                        </View>
                                        <View>
                                            <Text>100</Text>
                                        </View>
                                    </Row_simple>
                                </Pressable>
                            </Colum_simple>
                            <Colum_simple alitems={'flex-end'} jus_cont={'center'} flex={0.1}>
                                <Pressable android_ripple={{ color: "#3b3b3b" }}
                                    onPress={() => navigation.navigate("RegisterRiesgo")}>
                                    <Icon2 name='right' color={"#3b3b3b"} size={30} />
                                </Pressable>
                            </Colum_simple>
                        </Row_simple>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Row_simple jus_cont={'center'} alitems={'space-between'} flex={1}>
                            <Colum_simple flex={0.9}>
                                <Pressable android_ripple={{ color: "#3b3b3b" }}
                                    onPress={() => navigation.navigate("GraficSensor", { tipo: 'Niveles de Alcalinidad' })}>
                                    <Text style={{ marginBottom: 20, textAlign: 'center' }}>Nivel de Alcalinidad: {date1}</Text>
                                    <Slider
                                        style={{ width: '100%', height: 40, marginBottom: 20 }}
                                        minimumValue={0}
                                        value={date1}
                                        disabled
                                        maximumValue={7}
                                        minimumTrackTintColor="#FFFFFF"
                                        maximumTrackTintColor="#000000"
                                        thumbStyle={{ height: 80, width: 20 }}
                                        thumbTintColor="red"
                                        trackStyle={{ height: 60 }}
                                    />
                                    <Row_simple>
                                        <View>
                                            <Text>0</Text>
                                        </View>
                                        <View>
                                            <Text>7</Text>
                                        </View>
                                    </Row_simple>
                                </Pressable>
                            </Colum_simple>
                            <Colum_simple alitems={'flex-end'} jus_cont={'center'} flex={0.1}>
                                <Pressable android_ripple={{ color: "#3b3b3b" }}
                                    onPress={() => navigation.navigate("RegisterFertil")}>
                                    <Icon2 name='right' color={"#3b3b3b"} size={30} />
                                </Pressable>
                            </Colum_simple>
                        </Row_simple>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    containerhead: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    fathercontainer: {
        flex: 1
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
