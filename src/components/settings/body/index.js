import React from 'react'
import { Text, View } from 'react-native';
import { faAddressBook, faBriefcase, faClipboard, faLandmark, faStore, faUserTie } from '@fortawesome/free-solid-svg-icons';
import body from './style';
import Option from './options/'

const Body = () => {
    return (
        <View style={body.fundo}>
            <Option icone={faBriefcase} name="Company information" />
            <Option icone={faClipboard} name="Documents" />
            <Option icone={faLandmark} name="Bank account" />
            <Option icone={faAddressBook} name="Gateway credential" />
            <Option icone={faStore} name="Store" />
            <Option icone={faUserTie} name="Users" />
        </View>
    );
}

export default Body;