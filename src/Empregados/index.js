import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home({ navigation }) {

  const seta = Platform.OS === "android" ? <Icon name="arrow-forward" size={30} color="lightgray"></Icon> : <Icon name="arrow-forward-ios" size={30} color="lightgray"></Icon>

  function data(n) {
    let values = []
    for (let i = 0; i < n; i++) {
      values.push({name: "Tiger Nixon"})
    }
    return values
  }
  return (
    <View style={styles.container}> 
      <StatusBar backgroundColor="#fafafa" barStyle="light-content"/> 

      <View style={styles.header}>
        <Text style={{fontSize: 35, fontWeight: "bold"}}>Empregados</Text>
        <Icon name="add-circle" size={45} color="red"/>
      </View>

      <View style={{marginTop: 20}}>
        <FlatList data={data(10)} renderItem={({item}) => 
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Tiger Nixon')}>
          <View style={styles.empregados}>
            <View style={{flexDirection: "row"}}>
              <Text style={{backgroundColor: "lightgray", borderRadius: 30, width: 60, height: 60, marginRight: 15}}></Text>
              <View style={{justifyContent: "center"}}>
                <Text style={{fontWeight: "bold", fontSize: 15}}>{item.name}</Text>
                <Text style={{color: "#c4baba"}}>Salário: 320.800</Text>
              </View>
            </View>
            {seta}
          </View>
        </TouchableWithoutFeedback>} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  header: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 40,
    paddingBottom: 0
  },
  empregados: {
    flexDirection: "row",  
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 17,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 0,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
});