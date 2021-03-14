import React from 'react';
import { Pressable ,Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import header from './style';


const Header = () => {
    const clicou = () => {
        alert('Clicou aqui')
    }
    return (
        <View style={header.topo}>
            <Pressable onPress={clicou}>
                <FontAwesomeIcon icon={faBars} color="white" size={25} />
            </Pressable>
            <Text style={header.title}>Admin dash</Text>
        </View>
    )
}

export default Header;