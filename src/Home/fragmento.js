import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function Fragmento({ route }) {
    const comentarios = [
            {user: "Matheus Henrique", email: "matheushenrriquepeteleco@gmail.com", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus velit, imperdiet nec elementum quis, commodo eget dui."},
            {user: "Tiger Nixon", email: "Eliseo@gardner.biz", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus velit, imperdiet nec elementum quis, commodo eget dui."},
            {user: "Bitzen Soluções", email: "rh@bitzen.com.br", comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce risus velit, imperdiet nec elementum quis, commodo eget dui."},
    ]
    return(
        <ScrollView style={styles.container}>
            <View style={{alignItems: "center"}}>
                <Text style={styles.titulo}>{route.params.titulo}</Text>
                <Text style={styles.noticia}>{route.params.noticia}</Text>
                <View style={{width: "90%"}}>
                    <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 30, marginBottom: 15}}>Comentários ({comentarios.length})</Text>
                    <View style={{marginTop: 10}}>
                        <FlatList data={comentarios} renderItem={({item}) => 
                            <View style={styles.coments}>
                                <View>
                                    <Text style={{fontSize: 16, fontWeight: "bold"}}>{item.user}</Text>
                                    <Text style={{fontSize: 16, color: "#f7437c"}}>{item.email}</Text>
                                </View>
                                <Text style={{fontSize: 15, color: "#a5a5a5", marginTop: 25, marginBottom: 25}}>{item.comentario}</Text>
                            </View>
                        }/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        width: "90%",
        margin: 15,
        lineHeight: 40
    },
    noticia: {
        fontSize: 15,
        width: "90%",
        margin: 15,
        lineHeight: 25
    },
    coments: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginBottom: 20
    }
});