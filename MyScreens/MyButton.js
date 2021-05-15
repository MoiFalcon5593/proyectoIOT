import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as RootNavigation from './RootNavigation'

export default function MyButton({nombre, destino}) {
    return (
            <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: 'brown', alignItems: 'center', borderRadius: 15 }}
                onPress={() => RootNavigation.navigate(destino)}>
                <Text style={{ color: '#fff', fontSize: 15, marginTop: 'auto', marginBottom: 'auto' }}>{nombre}</Text>
            </TouchableOpacity>
    )
}
