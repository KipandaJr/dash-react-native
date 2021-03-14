import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import card from './style'

const Card = () => {
    const clicou = () => {
        alert('Clicou aqui')
    }
    return (
        <View style={card.fundo}>
            <View style={card.body}>
                <View style={card.iconBody}>
                    <FontAwesomeIcon style={card.icon} size={28} icon={faSignal} />
                </View>
                <Text style={card.number}>18</Text>
                <Text style={card.text}>Grafico dizendo alguma coisa</Text>
            </View>
            <Pressable onPress={clicou}>
            <View style={card.baixo}>
                <Text style={card.text, card.textBaixo}>Saber mais</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Card;