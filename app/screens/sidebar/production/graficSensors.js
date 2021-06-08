import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export default function GraficSensor(props) {
    const { route: { params: { tipo } } } = props;
    console.log(tipo);
    const navigation = useNavigation()
    const [date, setDate] = useState(0)
    const [date1, setDate1] = useState(0)
    const [nivel, setNivel] = useState([20, 45, 28, 80, 99, 43])
    const [fecha, setFecha] = useState([])
    const url_data = "https://apiusers.azurewebsites.net/api/parametros/5"
    const [tablahead, setTablaHead] = useState(['Id', 'Alcalinidad', 'Humedad'])
    const [tabladata, setTablaData] = useState([])
    const screenWidth = Dimensions.get("window").width - 20;
    const chartConfig = {
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 1,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    };
    const fill = 'rgb(134, 65, 244)'
    const data = {
        labels: fecha,
        datasets: [
            {
                data: nivel,
                color: (opacity = 1) => `red`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Alcalinidad"] // optional
    };
    const getData = async () => {
        await Axios.get(url_data)
            .then(response => {
                var respuesta = response.data.objModel;
                var auxNiveles = [];
                var auxFechas = [];
                respuesta.map(elemento => {
                    auxNiveles.push(elemento.niveL_ALCALINIDAD)
                    auxFechas.push(elemento.fechA_REGISTRO)
                });
                setNivel(auxNiveles);
                setFecha(auxFechas);
            })
    }
    useEffect(() => {
        getData()
    }, []);
    console.log(nivel);
    return (
        <View style={styles.fathercontainer}>
            <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
                <View style={styles.top}>
                    <Pressable android_ripple={{ color: "#3b3b3b" }}
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../../../../assets/back.png")} />
                    </Pressable>
                    <Text style={styles.txt_white}>{tipo}</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={420}
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />
                </View>
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
