import React, { useRef } from 'react'
import { DrawerLayoutAndroid, ScrollView, View, StatusBar, Text, Button, Pressable } from 'react-native';
import Body from './body';
import Header from './header/';

const HomeScreen = () => {
    const drawer = useRef(null)
    const navigationView = () => (
        <View>
            <Text>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );

    return (
        /*<DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={"left"} renderNavigationView={navigationView} >
          */  <ScrollView>
                <StatusBar backgroundColor="#2E3192" />
                <Header />
                <Pressable onPress={() => drawer.current.openDrawer()}>
                    <Text>Beijos</Text>
                </Pressable>
                <Body />
            </ScrollView>
        /*</DrawerLayoutAndroid>*/
    );
}

export default HomeScreen;