import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Colum_simple from '../../../utils/components/colum_simple'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Axios from 'axios';
import CurrencyInput from 'react-native-currency-input';
import { useDispatch, useSelector } from 'react-redux';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { optionsImagePicker } from '../../../utils/others';
import { AddRegisters } from '../../../actions/ProductionActions';
import { Picker } from '@react-native-community/picker';
export default function RegisterProduction(props) {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [avatarSource, setAvatarSource] = useState(null)
    const [foto, setFoto] = useState(null)
    const [cantidad, setCantidad] = useState('0.00')
    const [persona, setPersona] = useState('')
    const [tipoPalta, setTipoPalta] = useState('')
    const [precio, setPrecio] = useState('0.00')
    const listas = useSelector(reducers => reducers.ProductionReducer).ListProduction;
    const url_data = "https://apiusers.azurewebsites.net/api/produccion"
    console.log(listas);
    const onSummit = async () => {
        if (cantidad == "0.00" || !persona || precio == '0.00' || !foto || !tipoPalta || !avatarSource) {
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        var today = new Date();
        let monto = (precio * cantidad).toFixed(2)
        const formData = {
            FECHA_REGISTRO: today,
            PERSONA_ENCARGADA: persona,
            CANT_PRO: cantidad,
            TIPO_PALTA: tipoPalta,
            IMAGEN_PRODUCCION: foto,
            PRECIO: precio,
            MontoTotal: Number(monto)
        }
        console.log(formData);
        try {
            const res = await Axios.post(url_data, formData)
            console.log("res:", res)
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

            //props.navigation.replace('SideBarStack');//No es necesario, y hace renderizar 2 veces.
        } catch (error) {
            console.log(error);
            Alert.alert(
                "Error",
                "Ocurri?? un error al registrar producci??n.",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.goBack()
                    }
                ]
            )
        }
        /*dispatch(AddRegisters(cantidad, precio, foto, tipoPalta, persona, avatarSource, dateTime))*/

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
                const source2 = response.uri

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setAvatarSource(source)
                setFoto(source2)
            }
        });
    }

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/wp-verde.jpg")}>
            <View style={styles.top}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} />
                </Pressable>
                <Text style={styles.txt_white}>Registrar Producci??n</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Row_simple jus_cont={'space-around'}>
                        <View style={{ marginTop: 30 }}>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "Metropolis-SemiBold", color: "white" }}>Cant. Prod</Text>
                                <View style={styles.container_input}>
                                    <CurrencyInput style={styles.input} value={cantidad} delimiter="," separator="." onChangeValue={setCantidad} onChangeText={(formattedValue) => { if (formattedValue == "") { setCantidad("0.00") } }} precision={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "Metropolis-SemiBold", color: "white" }}>Tipo de palta</Text>
                                <View style={styles.row} flex={1}>
                                    <View style={styles.container_input3} flex={1}>
                                        <Picker
                                            enabled={true}
                                            selectedValue={tipoPalta}
                                            onValueChange={date => setTipoPalta(date)}
                                            itemStyle={{ fontSize: 20, color: 'white' }}
                                        >
                                            <Picker.Item label="Tipo" value="" color="#a0aec0" />
                                            <Picker.Item label="Fuerte" value="Fuerte" />
                                            <Picker.Item label="Hass" value="Hass" />
                                        </Picker>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "Metropolis-SemiBold", color: "white" }}>Precio</Text>
                                <View style={styles.container_input}>
                                    <CurrencyInput style={styles.input} value={precio} delimiter="," separator="." onChangeValue={setPrecio} onChangeText={(formattedValue) => { if (formattedValue == "") { setPrecio("0.00") } }} precision={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontFamily: "Metropolis-SemiBold", color: "white" }}>Pers. Encargada</Text>
                                <View style={styles.row} flex={1}>
                                    <View style={styles.container_input3} flex={1}>
                                        <Picker
                                            enabled={true}
                                            selectedValue={persona}
                                            onValueChange={date => setPersona(date)}
                                            itemStyle={{ fontSize: 20, color: 'white' }}
                                        >
                                            <Picker.Item label="Persona" value="" color="#a0aec0" />
                                            <Picker.Item label="Javier" value="Javier" />
                                            <Picker.Item label="Fernando" value="Fernando" />
                                            <Picker.Item label="Lucas" value="Lucas" />
                                            <Picker.Item label="Edward" value="Edward" />

                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, color: 'white', fontFamily: "Metropolis-SemiBold" }}>A??adir Imagen</Text>
                                <Pressable style={{ position: "relative" }} onPress={() => selectImg()}>
                                    {avatarSource ?
                                        <Image source={avatarSource} style={styles.img} /> :
                                        <Image source={require("../../../../assets/img-image.png")} style={styles.img} />}
                                </Pressable>
                            </View>
                        </View>
                    </Row_simple>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.containerBtn}>
                                <Pressable onPress={() => onSummit()} style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} android_ripple={{ color: "#fff" }}>
                                    <Text style={styles.textbtn}>Registrar</Text>
                                </Pressable>
                            </View>
                        </View>
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
    },
    container_sec: {
        margin: 20
    },
    txt_white: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Metropolis-Bold"
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
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
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
    container_input3: {
        color: "#000"
    },
    icon: {
        width: 40,
        height: 40
    },
    input: {
        flex: 1,
        color: "#000",
        fontFamily: "Metropolis-Bold"
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
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        marginVertical: 10,
        paddingHorizontal: 10
    },
})
