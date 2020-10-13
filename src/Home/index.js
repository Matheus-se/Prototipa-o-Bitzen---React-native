import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {New} from './styles';
import SearchBar from './SearchBar';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {
  const data = [
    {
      "Titulo": "Hackers atacam companhia de software e atrasam testes de covid-19", 
      "Noticia": "A companhia não divulgou quantos testes clínicos foram afetados; o seu software é utilizado por farmacêuticas na Europa, Ásia e América do Norte."
    }, 
    {
      "Titulo": "O carro de Elon Musk passou por Marte", 
      "Noticia": "O Tesla Roadster enviado ao espaço em 2018 pela SpaceX fez esta semana, a sua primeira aproximação de Marte."
    },
    {
      "Titulo": 'Google rebatiza pacote de software para escritório de "Workspace"', 
      "Noticia": 'O Google anunciou nesta terça-feira que "Workspace" será o novo nome de seu pacote de software para escritórios, substituindo a marca G Suite lançada em 2016.'
    }, 
  ]
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fafafa" barStyle="light-content"/> 
      <ScrollView>
        <Container style={styles.TopBar}>
          <SearchBar/>
      </Container>

      <Text h1 style={{fontSize: 35, marginTop: 5, margin: 20, marginLeft: 15, fontWeight: "bold"}}>Notícias</Text>

      <FlatList data={data} keyExtractor={(item) => item.Titulo} renderItem={({item}) =>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Notícias', {titulo: item.Titulo, noticia: item.Noticia})}>
          <New style={styles.posts}>
            <Text style={{fontWeight: "bold", fontSize: 18, lineHeight: 25, paddingBottom: 25}}>{item.Titulo}</Text>
            <Text style={{color: "gray", fontSize: 16, lineHeight: 22, paddingBottom: 25}}>{item.Noticia}</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Icon name="favorite" size={30} color="crimson" style={{paddingRight: 5}}/>
              <Text style={{paddingRight: 15}}>1125</Text>
              <Icon name="comment" size={30} color="gray" style={{paddingRight: 5}}/>
              <Text>348</Text>
            </View>
          </New> 
        </TouchableWithoutFeedback> 
      }/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    fontWeight: "bold",
  },
  posts: {
  shadowColor: "#000",
  paddingTop: 30,
  paddingBottom: 30,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  
  elevation: 4,
  justifyContent: "space-between",
  alignSelf: "center"
  },
  TopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 40,
    paddingBottom: 0,
  },
});
