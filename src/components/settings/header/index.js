import React from 'react';
import { Pressable, Image, Text, View, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import header from './style';


const Header = () => {
    return (
        <ImageBackground source={require('../../../../assets/fundo-azul.jpg')} style={header.image, header.topo}>
            <View style={header.setting}>
                <Text style={header.title}>Settings</Text>
                <FontAwesomeIcon icon={faCog} color="white" size={25} />
            </View>
            <View style={header.pics}>
                <Image
                    style={header.tinyLogo}
                    source={require('../../../../assets/user1.jpg')}
                />
                <Text style={header.name}>Kipanda Cardoso Beleza</Text>
            </View>
        </ImageBackground>
    )
}

export default Header;