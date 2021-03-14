import React,{useRef} from 'react';
import { DrawerLayoutAndroid, ScrollView, StatusBar, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Header from './src/components/header'
import Body from './src/components/body/'

export default function App() {
  const drawer=useRef(null)
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={"left"} renderNavigationView={navigationView} style={styles.topoBar}>
      <ScrollView style={styles.scroll}>
        <StatusBar backgroundColor="#2E3192" />
        <Header />
        <Pressable onPress={() => drawer.current.openDrawer()}>
          <Text>Beijos</Text>
        </Pressable>
        <Body />
      </ScrollView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
        topoBar: {
        backgroundColor: '#dadada',

  },
  scroll: {
        height:10000
  },
});
