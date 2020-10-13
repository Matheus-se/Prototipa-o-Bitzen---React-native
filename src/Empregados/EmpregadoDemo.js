import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

export default function Demo() {

    const dados = [
        {
            identification: "Nome Completo",
            description: "Tiger Nixon"            
        },
        {
            identification: "Idade",
            description: "61 Anos" 
        },
        {
            identification: "Salário Anual",
            description: "Tiger Nixon" 
        },
    ]

    return (
        <View style={styles.container}>
            <Text h1 style={styles.nome}>Tiger Nixon</Text>

            <View style={{marginBottom: 20}}>
                <FlatList data={dados} renderItem={({item}) => 
                    <View style={styles.infos}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{item.identification}</Text>
                        <Text style={{color: "#858585", fontSize: 15}}>{item.description}</Text>
                    </View>
                }/> 
            </View>
            <TouchableHighlight style={styles.botao}>
                <Text style={{color: "white"}}>Editar Perfil</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    infos: {
        flexDirection: "row", 
        justifyContent: "space-between",
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        padding: 23,
        paddingLeft: 0,
        paddingRight: 0,
        width: "90%",
        alignSelf: "center",
    },
    nome: {
        fontSize: 35,
        fontWeight: "bold",
        width: "90%",
        alignSelf: "center",
        margin: 25
    },
    botao: {
        backgroundColor: "crimson",
        width: "90%",
        borderRadius: 26,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 15
    }
});