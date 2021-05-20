import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, ImageBackground, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row_simple from '../../../utils/components/row_simple'
import Colum_simple from '../../../utils/components/colum_simple'
import Icon2 from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { optionsImagePicker } from '../../../utils/others';
export default function RegisterProduction(props) {
    const navigation = useNavigation()
    const [avatarSource, setAvatarSource] = useState(null)
    const [cantidad, setCantidad] = useState('')
    const [persona, setPersona] = useState('')

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
            }
        });
    }

    return (
        <ImageBackground style={styles.containerhead} source={require("../../../../assets/bg-home.png")}>
            <ScrollView>
                <View style={styles.top}>
                    <Text style={styles.txt_white}>Registrar Producción</Text>
                </View>

                <View style={styles.container}>
                    <Row_simple mar_top={30}>
                        <View>
                            <Text style={{ fontSize: 20 }}>Cant. Prod</Text>
                            <View style={styles.container_input}>
                                <TextInput
                                    placeholder=''
                                    keyboardType="default"
                                    onChangeText={(e) => setCantidad(e)}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Añadir Imagen</Text>
                            <Pressable style={{ position: "relative" }} onPress={() => selectImg()}>
                                {avatarSource ?
                                    <Image source={avatarSource} style={styles.img} /> :
                                    <Image source={require("../../../../assets/img-image.png")} style={styles.img} />}
                            </Pressable>
                        </View>
                    </Row_simple>
                    <View>
                        <Text style={{ fontSize: 20 }}>Pers. Encargada</Text>
                        <View style={styles.container_input2}>
                            <TextInput
                                placeholder=''
                                keyboardType="default"
                                onChangeText={(e) => setPersona(e)}
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.containerBtn}>
                            <Pressable style={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }} android_ripple={{ color: "#fff" }}>
                                <Text style={styles.textbtn}>Registrar</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: 40, paddingHorizontal: 25 }}>
                    <Row_simple mar_bot={20}>
                        <Colum_simple jus_cont={'center'} flex={0.2}>
                            <Image source={require("../../../../assets/icons-15.png")} style={{ width: 70, height: 70, marginRight: "auto", marginLeft: "auto" }} />
                        </Colum_simple>
                        <Colum_simple flex={1} jus_cont={'flex-start'}>
                            <Row_simple flex={1} mar_l={10} jus_cont={'center'}>
                                <Colum_simple jus_cont={'center'}>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }} >Cant. Prod</Text>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }}>Pers. Encargada</Text>
                                </Colum_simple>
                            </Row_simple>
                        </Colum_simple>
                        <Colum_simple jus_cont={'center'}>
                            <Image source={require("../../../../assets/icons-14.png")} style={{ width: 20, height: 20 }} />
                        </Colum_simple>
                    </Row_simple>
                    <Row_simple mar_bot={20}>
                        <Colum_simple jus_cont={'center'} flex={0.2}>
                            <Image source={require("../../../../assets/icons-15.png")} style={{ width: 70, height: 70, marginRight: "auto", marginLeft: "auto" }} />
                        </Colum_simple>
                        <Colum_simple flex={1} jus_cont={'flex-start'}>
                            <Row_simple flex={1} mar_l={10} jus_cont={'center'}>
                                <Colum_simple jus_cont={'center'}>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }} >Cant. Prod</Text>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }}>Pers. Encargada</Text>
                                </Colum_simple>
                            </Row_simple>
                        </Colum_simple>
                        <Colum_simple jus_cont={'center'}>
                            <Image source={require("../../../../assets/icons-14.png")} style={{ width: 20, height: 20 }} />
                        </Colum_simple>
                    </Row_simple>
                    <Row_simple mar_bot={20}>
                        <Colum_simple jus_cont={'center'} flex={0.2}>
                            <Image source={require("../../../../assets/icons-15.png")} style={{ width: 70, height: 70, marginRight: "auto", marginLeft: "auto" }} />
                        </Colum_simple>
                        <Colum_simple flex={1} jus_cont={'flex-start'}>
                            <Row_simple flex={1} mar_l={10} jus_cont={'center'}>
                                <Colum_simple jus_cont={'center'}>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }} >Cant. Prod</Text>
                                    <Text style={{ fontFamily: "Metropolis-Bold", color: "white", fontSize: 16 }}>Pers. Encargada</Text>
                                </Colum_simple>
                            </Row_simple>
                        </Colum_simple>
                        <Colum_simple jus_cont={'center'}>
                            <Image source={require("../../../../assets/icons-14.png")} style={{ width: 20, height: 20 }} />
                        </Colum_simple>
                    </Row_simple>
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
