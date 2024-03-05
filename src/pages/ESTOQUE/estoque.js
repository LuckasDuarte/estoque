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

export default function Estoque({ navigation }){

    const [estoqueAtual, setEstoqueAtual] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "estoque"), (snapshot) => {
        const estoqueData = {};

        snapshot.forEach((doc) => {
            const item = doc.data();
            const { produto, operacao, quantidade } = item;

            if (!estoqueData[produto]) {
            estoqueData[produto] = 0;
            }

            if (operacao === "entrada") {
            estoqueData[produto] += parseInt(quantidade);
            } else if (operacao === "saida") {
            estoqueData[produto] -= parseInt(quantidade);
            }
        });

        setEstoqueAtual(estoqueData);
        });

        return () => {
        unsubscribe();
        };
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estoque Atual</Text>
                {Object.keys(estoqueAtual).map((produto, index) => (
                <View key={index} style={styles.produtoContainer}>
                    <Text style={styles.produtoNome}>{produto}</Text>
                    <Text style={styles.produtoQuantidade}>
                    Quantidade: {estoqueAtual[produto]}
                    </Text>
                </View>
                 ))}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      },
      title: {
        fontSize: 20,
        marginBottom: 20,
      },
      produtoContainer: {
        display: 'flex',
        alignItems :'center',
        marginBottom: 10,
        marginTop: 20,
      },
      produtoNome: {
        fontSize: 20,
        fontWeight: "bold",
      },
      produtoQuantidade: {
        fontSize: 16,
      },
})


