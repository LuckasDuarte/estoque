import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native'

// icons
import { Entypo, MaterialCommunityIcons, Feather  } from '@expo/vector-icons';

export default function Estoque(){

    const [estoque, setEstoque] = useState([]);

    // Simulando dados de estoque
    useEffect(() => {
        // Aqui você pode buscar os dados do estoque do seu banco de dados ou de outra fonte de dados
        const dadosEstoque = [
            { id: 1, produto: 'Produto 1', quantidade: 10 },
            { id: 2, produto: 'Produto 2', quantidade: 15 },
            { id: 3, produto: 'Produto 3', quantidade: 20 },
            // Adicione mais itens conforme necessário
        ];
        setEstoque(dadosEstoque);
    }, []);



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estoque</Text>
            <FlatList
                data={estoque}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.produto}</Text>
                        <Text>Quantidade: {item.quantidade}</Text>
                    </View>
                )}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
})


