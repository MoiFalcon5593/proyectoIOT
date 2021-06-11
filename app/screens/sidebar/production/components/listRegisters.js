import React, { useState } from 'react'
import { Pressable, Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colum_simple from '../../../../utils/components/colum_simple';
import Row_simple from '../../../../utils/components/row_simple';
import Icon2 from 'react-native-vector-icons/AntDesign';
const ListRegister = ({ data }) => {

    const { avatarSource, cantidad, precio, persona, dateTime } = data

    return (
        <View style={styles.container}>
            <Row_simple >
                <Colum_simple jus_cont={'center'} flex={0.3}>
                    <Image source={avatarSource} style={styles.img_contac2} />
                </Colum_simple>
                <Colum_simple flex={1}>
                    <Row_simple flex={1} mar_l={10}>
                        <Colum_simple jus_cont={'center'} flex={1}>
                            <Colum_simple>
                                <Text style={{ fontFamily: "Metropolis-Bold", color: "black", fontSize: 14 }} >{dateTime}</Text>
                            </Colum_simple>
                            <Row_simple >
                                <Colum_simple flex={0.3}>
                                    <Text style={{ color: 'black' }}>{persona}</Text>
                                </Colum_simple>
                                <Colum_simple flex={0.3}>
                                    <Text style={{ color: 'black' }}>{cantidad}kg</Text>
                                </Colum_simple>
                            </Row_simple>

                        </Colum_simple>
                    </Row_simple>
                </Colum_simple>
                <Colum_simple jus_cont={'center'}>
                    <Icon2 name='right' color={"#3b3b3b"} size={15} />
                </Colum_simple>
            </Row_simple>
        </View>
    )
}

export default ListRegister

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    container_top: {
        flexDirection: "row",
        paddingBottom: 10,
        borderBottomColor: "#d2d2d2",
        borderBottomWidth: 2,
        alignItems: "center",
        //marginHorizontal: 30
    },
    text_top: {
        flex: 1,
        color: "#565454",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    },
    img_contac2: {
        marginRight: "auto",
        marginLeft: "auto",
        height: 75,
        width: 75
    },
})
