import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('window');

import Fundo from './styles'

export default function Sobre() {

  const dots = [
    {item: 1},
    {item: 2},
    {item: 3},
    {item: 4},
  ]
  const scrollX = new Animated.Value(0)
  let position = Animated.divide(scrollX, width);
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="cyan" barStyle="light-content"/>   
      <Fundo/>
      <View style={styles.drag}>

      <View style={{ flexDirection: 'row', position: "absolute", top: height*0.62, justifyContent: "center", width: "100%"}}>
        {dots.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i-1, i, i+1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })
          return (
            <Animated.View 
              style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5}}
            />);})}
      </View>

        <ScrollView horizontal decelerationRate="fast" 
        snapToInterval={width} 
        showsHorizontalScrollIndicator={false} 
        pagingEnabled={true}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }])}>

          <View>
            <Text style={styles.sobreTexto}>Sobre</Text>
            <View style={{justifyContent:"center", alignItems:"center", width: "100%", transform: [{translateY: width - 55}]}}>
                <Image key={0} source={require('../../assets/logo.png')} style={{position: "absolute", width: width/2, height: width/2, flex: 1, resizeMode: "cover"}}></Image>
            </View>
            <View style={styles.Desc}>
              <Text style={styles.sobreDescText}>Este projeto é uma prorotipação não funcional de um layout especificado pela Bitzen Soluções como teste tecnico para vaga de Desenvolvedor Front-End Junior</Text>
            </View>
          </View>

          <ScrollView>

            <View style={{justifyContent:"center",alignItems:"center", width: "100%", transform: [{translateY: height*0.61 - (height*0.6)/2}]}}>
              <Image key={2} source={require('../../assets/eu.png')} style={{position: "absolute", width: width, height: height*0.6, flex: 1, resizeMode: "cover"}}></Image>
            </View>
            <Text style={styles.sobreTexto}>Eu</Text>
            <View style={styles.Desc}>
              <Text style={styles.sobreDescText}>Meu nome é Matheus, sou estudante de engenharia de software na UniCesumar - Maringá e este é meu primeiro projeto em React Native. Deixando a parte de TI de lado eu gosto muito de aprender, de café, chás chineses, xadrez, Cubo mágico e algumas outras coisas.</Text>
              <Text style={styles.sobreDescText}>Comecei a criar interesse na area de TI com 15 anos de idade, sempre gostei de lógica e resolução de problemas e por conta disso comecei a buscar conteudos de estudo relacionados a estas caracteristicas com intenção de ganhar minha vida com isso. Minha primeira linguagem a aprender e masterizar foi o Python, comecei por ela pelo meu apego a Google que está sempre contratando cientistas de dados, e por consequência acabei me interessando pela parte estatística. No momento que estou escrevendo isto além de estar envolvido na área de desenvolvimento Front-End, estudo calculo juntamente com machine learning reforçando meus estudos de data science.</Text>
              <Text style={styles.sobreDescText}>Atualmente estou trabalhando em um MVP com minha equipe de faculdade no qual nosso objetivo final é apresentar o projeto para a prefeitura e implementa-lo.</Text>
            </View>
        </ScrollView>

        <View>
          <Text style={styles.sobreTexto}>Experiência</Text>
          <View style={{justifyContent:"center", alignItems:"center", width: "100%", transform: [{translateY: width - 55}]}}>
            <Image key={2} source={require('../../assets/logo-small.png')} style={{position: "absolute", width: width/2, height: width/2, flex: 1, resizeMode: "cover"}}></Image>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.sobreDescText}>Minha experiência com React Native foi bem natural, apesar de ser algo diferente que nunca havia estudado antes posso dizer que gostei muito.{"\n"}Utilizei o Expo para fazer a prototipação e uma estrutura de hooks em vez de classes.</Text>
          </View>
        </View>

        <ScrollView>
          <Text style={styles.sobreTexto}>Curriculo</Text>
          <View style={{justifyContent:"center", alignItems:"center", width: "100%", transform: [{translateY: width - 55}]}}>
            <Image key={3} source={require('../../assets/icone-perfil.png')} style={{position: "absolute", width: width/2, height: width/2, flex: 1, resizeMode: "cover"}}></Image>
          </View>
          <View style={styles.Desc}>
            <View>
              <Text style={styles.subtitulo}>Atividades complementares</Text>
              <Text style={styles.curriculoinfo}>Experiência com criação de REST api's, hospedagem no heroku e documentação no postman disponível em:{"\n"}https://github.com/Matheus-se/API-Vcaixa</Text>
              <Text style={styles.curriculoinfo}>Experiência em projetos, criação de sites, jogos e pesquisas. Por favor dê uma olhada no meu último projeto:{"\n"}https://wash-your-hand.herokuapp.com/</Text>
              <Text style={styles.curriculoinfo}>Certificado de introdução à ciência de dados em python da Universidade de Michigan disponível em:{"\n"}https://coursera.org/share/12262df935f116fc2d1fe7c00c5b51a7</Text>
              <Text style={styles.curriculoinfo}>Certificado de Applied Plotting, Charting and Data Representation in Python disponível em:{"\n"}https://coursera.org/share/6c46d01156171fd85ef441cc363f84bf</Text>
              <Text style={styles.subtitulo}>Habilidades</Text>
              <Text style={styles.curriculoinfo}>Conhecimento aprofundado de HTML, CSS e Javascript;</Text>
              <Text style={styles.curriculoinfo}>Experiência com REST api's (consumo e criação);</Text>
              <Text style={styles.curriculoinfo}>Django;</Text>
              <Text style={styles.curriculoinfo}>Conhecimento de scrum;</Text>
              <Text style={styles.curriculoinfo}>Python avançado;</Text>
              <Text style={styles.curriculoinfo}>Conhecimento aprofundado em python usando bibliotecas de análise estatística, manipulação e visualização de dados como numpy, matplotlib, pandas entre outras;</Text>
              <Text style={styles.curriculoinfo}>Bom conhecimento de Linguagens de banco de dados (SQL) e experiência com SQLite, Postgresql e outros bancos de dados NoSQL;</Text>
              <Text style={styles.curriculoinfo}>Conhecimento de Git (Clone, push, pull, merge, init, branch, etc.)</Text>
              <Text style={styles.curriculoinfo}>Capacidade, tempo e dedicação para aprender novos conceitos caso precise;</Text>
              <Text style={styles.subtitulo}>Idiomas</Text>
              <Text style={styles.curriculoinfo}>Inglês avançado.</Text>
            </View>
          </View>
          </ScrollView>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sobreTexto: {
    color: "white", 
    fontWeight: "bold", 
    fontSize: 50, 
    lineHeight: 80, 
    position: "absolute",
    width: 400,
    height: 95,
    transform: [{rotate: "90deg"}, {translateY: width/2 - 40}, {translateX: height/6+80}],
  },
  drag: {
    flex: 1,
    position: "absolute",
    height: height,
  },
  sobreDescText: {
    width: width,
    textAlign: "center",
    color: "black",
    fontSize: 16,
    padding: 15,
  },
  subtitulo: {
    width: width,
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    padding: 15,
    paddingTop: 30
  },
  curriculoinfo: {
    width: width,
    color: "black",
    fontSize: 16,
    paddingTop: 15,
    paddingLeft: 30,
  },
  Desc: {
    marginTop: height*0.65,
    paddingBottom: 200,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
  }
});
