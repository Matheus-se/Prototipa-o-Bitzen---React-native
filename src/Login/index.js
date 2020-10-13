import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles/style';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fafafa" barStyle="light-content"/> 

      <View style={styles.container_descr}>
        <Text style={styles.text_container}>Está pronto para mudar a sua vida?</Text>
      </View>

      <View style={styles.container_input}>
        <Text style={styles.labels}>Seu Login</Text>
        <TextInput placeholder="contato@teste.com.br" autoCorrect={false} onChangeText={() => {}} style={styles.container_textInput}></TextInput>

        <Text style={styles.labels}>Senha</Text>
        <TextInput placeholder="**************" autoCorrect={false} onChangeText={() => {}} style={styles.container_textInput}></TextInput>
        <TouchableOpacity onPress={ () => {navigation.navigate('Home')} } style={styles.LoginButton}><Text style={styles.submit_text}>Fazer login</Text></TouchableOpacity>
      </View>
    </View>
  );
}
