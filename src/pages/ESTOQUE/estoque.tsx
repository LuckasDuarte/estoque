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

// Firebase
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../FIREBASE/firebase'; // Importe o db do seu arquivo de configuração

export default function Estoque(){

    const [estoque, setEstoque] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Consultar entradas
                const entradasSnapshot = await getDocs(collection(db, 'estoque'));
                const entradas = entradasSnapshot.docs.map(doc => doc.data());

                // Consultar saídas
                const saidasSnapshot = await getDocs(collection(db, 'saida'));
                const saidas = saidasSnapshot.docs.map(doc => doc.data());

                // Calcular saldo para cada produto
                const saldoPorProduto = {};

                // Calcular entradas
                entradas.forEach(entrada => {
                    if (!saldoPorProduto[entrada.produto]) {
                        saldoPorProduto[entrada.produto] = entrada.quantidade;
                    } else {
                        saldoPorProduto[entrada.produto] += entrada.quantidade;
                    }
                });

                // Subtrair saídas
                saidas.forEach(saida => {
                    if (!saldoPorProduto[saida.produto]) {
                        saldoPorProduto[saida.produto] = -saida.quantidade;
                    } else {
                        saldoPorProduto[saida.produto] -= saida.quantidade;
                    }
                });

                // Transformar o objeto saldoPorProduto em um array
                const estoqueArray = Object.entries(saldoPorProduto).map(([produto, saldo]) => ({ produto, saldo }));
                setEstoque(estoqueArray);
            } catch (error) {
                console.error('Erro ao buscar dados do estoque:', error);
            }
        };

        fetchData();

        // Atualizar o estoque em tempo real
        const unsubscribe = onSnapshot(collection(db, 'estoque'), () => {
            fetchData();
        });

        return () => unsubscribe();
    }, []);




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estoque</Text>
            <FlatList
                data={estoque}
                keyExtractor={(item, index) => item.produto}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.produto}</Text>
                        <Text>Quantidade: {item.saldo}</Text>
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


