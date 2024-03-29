import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native'

// icons
import { Entypo, MaterialCommunityIcons, Feather  } from '@expo/vector-icons';

// Linear gradient
import { LinearGradient } from "expo-linear-gradient";

// importando firestore
import { collection, addDoc, getDocs, onSnapshot, doc, setDoc} from 'firebase/firestore';
import { db } from '../../FIREBASE/firebase'; // Importe o db do seu arquivo de configuração

export default function Entrada(){

    const [nf, setNF] = useState('');
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [fornecedor, setFornecedor] = useState('');

    const handleCadastro = async () => {

        
        try {
            // Adicionar os dados ao Firestore
            const docRef = await addDoc(collection(db, 'estoque'), {
                operacao: "entrada",
                nf: nf,
                produto: produto,
                quantidade: quantidade,
                fornecedor: fornecedor
            });
            console.log('Documento adicionado com ID: ', docRef.id);
            Alert.alert("Sucesso", "Entrada registrada com sucesso!")

            // Limpar os campos após a adição dos dados
            setNF('');
            setProduto('');
            setQuantidade('');
            setFornecedor('');
        } catch (error) {
            console.error('Erro ao adicionar dados: ', error);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>CADASTRAR ENTRADA</Text>
            <TextInput
                style={styles.input}
                placeholder="NF"
                value={nf}
                keyboardType="numeric"
                onChangeText={text => setNF(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Produto"
                value={produto}
                onChangeText={text => setProduto(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Quantidade"
                value={quantidade}
                onChangeText={text => setQuantidade(text)}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Fornecedor"
                value={fornecedor}
                onChangeText={text => setFornecedor(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})
