import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import Card from './cards/'
import Box from './box/'
import body from './style';

const Body = () => {
    return (
        <View style={body.fundo}>
            <ScrollView style={body.scroll}>
                <Text style={body.title}>Dashboard</Text>
                <Text style={body.subTitle}>Aqui vc encontra todas as tuas informações sobre as tuas atividades</Text>
                <View style={body.container}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </View>
                <View style={body.containerOther}>
                    <Text style={body.title}>Ultimas actualizações</Text>
                    <Pressable style={body.button}>
                        <FontAwesomeIcon style={body.icon} icon={faSync} />
                    </Pressable>
                </View>
                <Text style={body.subTitle}>Aqui vc encontra todas as tuas informações sobre as tuas atividades</Text>
                <Box />
                <Box />
                <Box />
            </ScrollView>
        </View>
    )
}

export default Body;