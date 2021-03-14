import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faBell } from '@fortawesome/free-solid-svg-icons'
import box from './style'

const Box = () => {
    const clicou = () => {
        alert('Clicou aqui')
    }
    return (
        <View style={box.fundo}>
            <View style={box.body}>
                <View style={box.side}>
                    <Text style={box.title}>Recado: Financeiro</Text>
                    <Text style={box.content}>Grafico dizendo alguma coisa,Grafico dizendo alguma coisa  Grafico dizendo alguma coisa Grafico dizendo alguma coisaGrafico dizendo alguma coisa Grafico dizendo alguma coisaGrafico dizendo alguma coisa</Text>
                </View>
                <View style={box.otherSide}>
                    <FontAwesomeIcon icon={faBell} style={box.icon} size={75} />
                </View>
            </View>
            <Pressable onPress={clicou}>
                <View style={box.baixo}>
                    <FontAwesomeIcon icon={faEye} color="#fff" />
                    <Text style={box.textBaixo}>Saber mais</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Box;