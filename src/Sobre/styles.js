import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('screen');

export default function Fundo() {
    return(
        <View>
            <View style={styles.fundo}></View>
            <View style={styles.fundo2}></View>
            <View style={styles.base}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "cyan",
        width: "100%",
        height: height * 0.61,
        borderBottomRightRadius: 75
      },
      fundo2: {
        backgroundColor: "cyan",
        width: "20%",
        height: "100%",
        position: "absolute"
      },
      base: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 75
      },
});