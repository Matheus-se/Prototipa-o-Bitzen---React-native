import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './src/Home';
import Login from './src/Login';
import Sobre from './src/Sobre';
import Empregados from './src/Empregados';
import Demo from './src/Empregados/EmpregadoDemo';
import Fragmento from './src/Home/fragmento'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'md-home'
        } else if (route.name === 'Sobre') {
          iconName = 'ios-settings';
        } else if (route.name === 'Empregados') {
          iconName = 'md-person'
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }} 
    > 
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Empregados" component={Empregados}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Olá!" component={Login} options={{
          headerTitleStyle: {
            fontSize: 35, paddingTop: 40, fontWeight: "bold",
          }, headerStyle: {
            elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, backgroundColor: "#fbfafa"
          } 
        }}/>
        <Stack.Screen name="Home" component={Tabs} options={{ 
          headerLeft: null, 
          headerShown: false,
          title: "",
          headerStyle: {
            elevation: 0, shadowOpacity: 0, borderBottomWidth: 0,
          },
          }}
        />
        <Stack.Screen name="Tiger Nixon" component={Demo} options={{
          headerStyle: {
            backgroundColor: "#fafafa", elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
          },
          headerTitleStyle: {
            alignSelf: "center", fontSize: 16, fontWeight: "normal", 
          }, headerRight: () => (
            <Icon name="more-vert" size={25} color="black" style={{padding: 15}}></Icon>
          )
        }}/>
        <Stack.Screen name="Notícias" component={Fragmento} options={{
          headerStyle: {
            backgroundColor: "#fafafa", elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
          },
          headerTitleStyle: {
            alignSelf: "center", fontSize: 16, fontWeight: "normal", 
          }, headerRight: () => (
            <Icon name="more-vert" size={25} color="black" style={{padding: 15}}></Icon>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
