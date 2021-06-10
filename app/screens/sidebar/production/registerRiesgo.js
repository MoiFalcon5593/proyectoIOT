import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Colum_simple from '../../../utils/components/colum_simple'
import Icon2 from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { optionsImagePicker } from '../../../utils/others';
import { AddRegistersRiesgo } from '../../../actions/ProductionActions';
import { useDispatch, useSelector } from 'react-redux';
export default function RegisterRiesgo(props) {
    const navigation = useNavigation()
    const [avatarSource1, setAvatarSource1] = useState(null)
    const [avatarSource2, setAvatarSource2] = useState(null)
    const [avatarSource3, setAvatarSource3] = useState(null)
    const [cantidad, setCantidad] = useState('')
    const [costo, setCosto] = useState('')
    const [persona, setPersona] = useState('')
    const [tipoPalta, setTipoPalta] = useState('')
    const dispatch = useDispatch();
    const listas  = useSelector(reducers => reducers.ProductionReducer).ListRiesgo;
    console.log(listas);

    const onSubmmmit = async () => {
        console.log(costo );
        if (!persona || !avatarSource1 || !avatarSource2 || !avatarSource3 || !costo) {
            console.log("entreeee");
            return Alert.alert(
                "Alerta",
                "Llene todo los campos",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        dispatch(AddRegistersRiesgo(persona, costo, avatarSource1, avatarSource2, avatarSource3))
        Alert.alert(
            "Satisfactorio",
            "Nuevo registro de riesgro creado",
            [
                {
                    text: "Ok",
                    onPress: () => navigation.goBack()
                }
            ]
        )
    }

    function selectImg1() {
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
                setAvatarSource1(source)
            }
        });
    }
    function selectImg2() {
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
                setAvatarSource2(source)
            }
        });
    }
    function selectImg3() {
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
                setAvatarSource3(source)
            }
        });
    }

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <View style={styles.top}>
                <Pressable android_ripple={{ color: "#3b3b3b" }}
                    onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} />
                </Pressable>
                <Text style={styles.txt_white}>Registro de Riesgo</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Row_simple mar_top={30}>
                        <View>
                            <View>
                                <Text style={{ fontSize: 18 }}>Encarg. de Riesgo</Text>
                                <View style={styles.container_input}>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="default"
                                        onChangeText={(e) => setPersona(e)}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18 }}>Costo</Text>
                                <View style={styles.container_input}>
                                    <TextInput
                                        placeholder=''
                                        keyboardType="default"
                                        onChangeText={(e) => setCosto(e)}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center'}}>
                                <Text style={{ fontSize: 18, color: 'white' }}>Añadir Imagen 1</Text>
                                <Pressable style={{ position: "relative", marginBottom: 15 }} onPress={() => selectImg1()}>
                                    {avatarSource1 ?
                                        <Image source={avatarSource1} style={styles.img} /> :
                                        <Image source={require("../../../../assets/img-image.png")} style={styles.img} />}
                                </Pressable>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'center'}}>
                                <Text style={{ fontSize: 18, color: 'white' }}>Añadir Imagen 2</Text>
                                <Pressable style={{ position: "relative", marginBottom: 15 }} onPress={() => selectImg2()}>
                                    {avatarSource2 ?
                                        <Image source={avatarSource2} style={styles.img} /> :
                                        <Image source={require("../../../../assets/img-image.png")} style={styles.img} />}
                                </Pressable>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'center'}}>
                                <Text style={{ fontSize: 18, color: 'white' }}>Añadir Imagen 3</Text>
                                <Pressable style={{ position: "relative", marginBottom: 15 }} onPress={() => selectImg3()}>
                                    {avatarSource3 ?
                                        <Image source={avatarSource3} style={styles.img} /> :
                                        <Image source={require("../../../../assets/img-image.png")} style={styles.img} />}
                                </Pressable>
                            </View>
                        </View>

                    </Row_simple>


                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <View style={styles.containerBtn}>
                            <Pressable onPress={() => onSubmmmit()} style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} android_ripple={{ color: "#fff" }}>
                                <Text style={styles.textbtn}>Registrar</Text>
                            </Pressable>
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
        paddingHorizontal: 15
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
        fontWeight: 'bold'
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
        width: 250,
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
        width: 160,
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
    }
})
