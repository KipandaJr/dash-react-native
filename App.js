import * as React from 'react';
import { DrawerLayoutAndroid, ScrollView, StatusBar, StyleSheet, Text, View, Button, Pressable } from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBraille, faUserTie, faBars, faCogs } from '@fortawesome/free-solid-svg-icons'
import HomeScreen from './src/components/home/'
import SettingScreen from './src/components/settings/'

function SettingsScreen() {
  return (
    <View>
      <SettingScreen />
    </View>
  );
}
const Home = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  )
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <FontAwesomeIcon icon={faBraille} size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <FontAwesomeIcon icon={faCogs} size={size} color={color} />;
            } else {
              return <FontAwesomeIcon icon={faUserTie} size={size} color={color} />;
            }

            // You can return any component that you like here!
            //return <Ionicons name={iconName} size={size} color={color} />;
            //return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2E3192',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="teste2" component={SettingsScreen} />
        <Tab.Screen name="Teste" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  topoBar: {
    backgroundColor: '#dadada',

  },
  fundo: {
    backgroundColor: "red"
  },
  scroll: {
  },
});
