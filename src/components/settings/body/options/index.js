import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import option from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Option = (props) => {
    const press = () => {
        console.log(1);
    }
    return (
        <View style={option.fundo}>
            <TouchableHighlight onPress={press} >
                <View style={option.line}>
                    <FontAwesomeIcon icon={props.icone} color="#2E3192" size={25} />
                    <Text style={option.title}>{props.name }</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default Option;