import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Colum_simple from '../../../utils/components/colum_simple'
import Icon2 from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { optionsImagePicker } from '../../../utils/others';
import { AddRegisters } from '../../../actions/ProductionActions';
import { Picker } from '@react-native-community/picker';
import Axios from 'axios';
export default function ReportMonitoreo(props) {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [avatarSource, setAvatarSource] = useState(null)
    const [foto, setFoto] = useState(null)
    const [marzo, setMarzo] = useState(0)
    const [marzo1, setMarzo1] = useState(0)
    const [abril, setAbril] = useState(0)
    const [abril1, setAbril1] = useState(0)
    const [mayo, setMayo] = useState(0)
    const [mayo1, setMayo1] = useState(0)
    const [junio, setJunio] = useState(0)
    const [junio1, setJunio1] = useState(0)
    const [cantidad, setCantidad] = useState('')
    const [persona, setPersona] = useState('')
    const [tipoPalta, setTipoPalta] = useState("Fuerte")
    const [precio, setPrecio] = useState('')
    const [kpi1, setKpi1] = useState(0)
    const [kpi2, setKpi2] = useState(0)
    const listas = useSelector(reducers => reducers.ProductionReducer).ListProduction;
    const url_data = "https://apiusers.azurewebsites.net/api/produccion"
    console.log(listas);
    const onSummit = async () => {
        if (!cantidad || !persona || !precio || !foto || !tipoPalta || !avatarSource) {
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        dispatch(AddRegisters(cantidad, precio, foto, tipoPalta, persona, avatarSource))
        Alert.alert(
            "Satisfactorio",
            "Nuevo registro creado",
            [
                {
                    text: "Ok",
                    onPress: () => navigation.goBack()
                }
            ]
        )
    }

    function selectImg() {
        launchImageLibrary(optionsImagePicker, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setAvatarSource(source)
                setFoto(response.base64)
            }
        });
    }

    useEffect(() => {
        console.log("hola");
        async function getMarzo() {
            try {
                const res = await Axios.get(url_data + `/${tipoPalta}/20210301 00:00/20210331 23:59`)
                console.log(res.data.objModel);
                let rest = 0;
                let prom = 0;
                let acum = 0;
                let rest1 = 0;
                let prom1 = 0;
                let i = 0;
                for (i = 0; i < res.data.objModel.length; i++) {
                    rest += res.data.objModel[i].canT_PRO
                    rest1 += res.data.objModel[i].montoTotal
                }
                setMarzo(rest)
                setMarzo1(rest1)
            } catch (error) {
                console.log(error);
            }
        }
        async function getAbril() {
            try {
                const res = await Axios.get(url_data + `/${tipoPalta}/20210401 00:00/20210430 23:59`)
                console.log(res.data.objModel);
                let rest = 0;
                let prom = 0;
                let acum = 0;
                let rest1 = 0;
                let prom1 = 0;
                let i = 0;
                for (i = 0; i < res.data.objModel.length; i++) {
                    rest += res.data.objModel[i].canT_PRO
                    rest1 += res.data.objModel[i].montoTotal
                }
                setAbril(rest)
                setAbril1(rest1)
            } catch (error) {
                console.log(error);
            }
        }
        async function getMayo() {
            try {
                const res = await Axios.get(url_data + `/${tipoPalta}/20210501 00:00/20210531 23:59`)
                console.log(res.data.objModel);
                let rest = 0;
                let prom = 0;
                let acum = 0;
                let rest1 = 0;
                let prom1 = 0;
                let i = 0;
                for (i = 0; i < res.data.objModel.length; i++) {
                    rest += res.data.objModel[i].canT_PRO
                    rest1 += res.data.objModel[i].montoTotal
                }
                setMayo(rest)
                setMayo1(rest1)
            } catch (error) {
                console.log(error);
            }
        }
        async function getJunio() {
            try {
                const res = await Axios.get(url_data + `/${tipoPalta}/20210601 00:00/20210630 23:59`)
                console.log(res.data.objModel);
                let rest = 0;
                let prom = 0;
                let acum = 0;
                let rest1 = 0;
                let prom1 = 0;
                let i = 0;
                for (i = 0; i < res.data.objModel.length; i++) {
                    rest += res.data.objModel[i].canT_PRO
                    rest1 += res.data.objModel[i].montoTotal
                }
                setJunio(rest)
                setJunio1(rest1)
            } catch (error) {
                console.log(error);
            }
        }
        getMarzo()
        getAbril()
        getMayo()
        getJunio()

    }, [tipoPalta, junio1])


    useEffect(() => {
        if (abril != 0 && marzo != 0 && mayo != 0 && junio != 0) {
            let i1 = (((abril / marzo) - 1) * 100).toFixed(1)
            i1 = Number(i1)
            let i2 = (((mayo / abril) - 1) * 100).toFixed(1)
            i2 = Number(i2)
            let i3 = (((junio / mayo) - 1) * 100).toFixed(1)
            i3 = Number(i3)
            let prom = ((i1 + i2 + i3) / 3).toFixed(2)
            console.log(abril, marzo, i1, i2, i3, prom);
            let j1 = (((abril1 / marzo1) - 1) * 100).toFixed(1)
            j1 = Number(j1)
            let j2 = (((mayo1 / abril1) - 1) * 100).toFixed(1)
            j2 = Number(j2)
            let j3 = (((junio1 / mayo1) - 1) * 100).toFixed(1)
            j3 = Number(j3)
            let prom2 = ((j1 + j2 + j3) / 3).toFixed(2)
            console.log(j1, j2, j3, prom2);
            setKpi1(prom)
            setKpi2(prom2)
        }
    }, [marzo, abril, mayo, junio, marzo1, abril1, mayo1, junio1])

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/wp-verde.jpg")}>
            <View style={styles.top}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} />
                </Pressable>
                <Text style={styles.txt_white}>Control de Monitoreo</Text>
            </View>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 40, color: 'white', marginBottom: 20, fontFamily: 'Metropolis-SemiBold' }}>KPI</Text>
                <View style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Metropolis-SemiBold' }}>Tipo de Palta</Text>
                    <View style={styles.row} >
                        <View style={styles.container_input3} flex={1}>
                            <Picker
                                enabled={true}
                                selectedValue={tipoPalta}
                                onValueChange={date => setTipoPalta(date)}
                                itemStyle={{ fontSize: 20, color: 'white' }}
                            >
                                <Picker.Item label="Tipo de Palta" value="" color="#a0aec0" />
                                <Picker.Item label="Fuerte" value={'Fuerte'} color="white" />
                                <Picker.Item label="Hass" value={'Hass'} color="white" />

                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={styles.centro_cont}>
                        <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Metropolis-SemiBold' }}>Índice de crecimiento de la producción: {kpi1}%</Text>
                    </View>
                    <View style={styles.centro_cont}>
                        <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Metropolis-SemiBold' }}>Índice de crecimiento de ingreso netos: {kpi2}%</Text>
                    </View>
                </View>

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerhead: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20
    },
    container2: {
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
        alignItems: 'center',
        marginBottom: 50
    },
    container_sec: {
        margin: 20
    },
    txt_white: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Metropolis-Bold'
    },
    img_contac2: {
        marginRight: "auto",
        marginLeft: "auto",
        height: 75,
        width: 45
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
    img: {
        marginTop: 20,
        width: 110,
        height: 110,
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
        width: 180,
        height: 45,
        borderWidth: 3,
        borderColor: 'blue',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    container_input2: {
        width: 180,
        height: 45,
        borderWidth: 3,
        borderColor: 'blue',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
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
    },
    textbtn: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        //fontSize:15,
        marginVertical: 12
    },
    containerBtn: {
        width: 200,
        backgroundColor: "blue",
        borderRadius: 15,
        marginVertical: 10,
        overflow: "hidden",
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
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: 180,
        height: 45,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        flexDirection: "row",
        marginTop: 5,
        marginVertical: 10,
    },
})
