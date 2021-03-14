import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native';
import Body from './body';
import Header from './header/';

const HomeScreen = () => {
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

export default HomeScreen;