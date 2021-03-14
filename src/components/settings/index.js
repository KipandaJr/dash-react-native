import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native';
import Header from './header/';
import Body from './body/';

const SettingScreen = () => {
    return (
        <View>
            <ScrollView>
                <StatusBar backgroundColor="#2E3192" />
                <Header />
                <Body />
            </ScrollView>
        </View>
    );
}

export default SettingScreen;