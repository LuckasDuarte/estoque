import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

// icons
import { Entypo, MaterialCommunityIcons, Feather  } from '@expo/vector-icons';

export default function Home({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.Btn}
                    onPress={() => navigation.navigate('Entrada')}
                >
                    <Entypo name="box" size={50} color="black" />
                    <Text>ENTRADA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn}
                    onPress={() => navigation.navigate('Saida')}
                >
                    <MaterialCommunityIcons name="truck-delivery" size={50} color="black" />
                    <Text>SAÍDA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn}
                    onPress={() => navigation.navigate('Estoque')}
                >
                <Feather name="package" size={50} color="black" />
                    <Text>ESTOQUE</Text>
                </TouchableOpacity>
            </View>

        <Text>PROJETO INTEGRADOR III - ENG. COMPUTAÇÃO</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1
    },
    containerBtn:{
        flexDirection: 'row', // Alterado para 'row'
        flexWrap: 'wrap', // Adicionado para quebra de linha
        justifyContent: 'center', // Centralizar os botões
    },
    Btn: {
        width: '45%', // Definindo a largura para ocupar 45% da tela
        aspectRatio: 1, // Manter a proporção quadrada
        margin: '2.5%', // Margem entre os botões
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
    }
})

{/* <Entypo name="box" size={24} color="black" /> */}

