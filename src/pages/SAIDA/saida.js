import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'

// icons
import { Entypo, MaterialCommunityIcons, Feather  } from '@expo/vector-icons';

// importando firestore
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../FIREBASE/firebase'; // Importe o db do seu arquivo de configuração

export default function Saida(){

    const [nf, setNF] = useState('');
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [destino, setDestino] = useState('');

    const handleSaida = async () => {
        try {
            // Adicionar os dados ao Firestore
            const docRef = await addDoc(collection(db, 'saida'), {
                operacao: "saida",
                nf: nf,
                produto: produto,
                quantidade: quantidade,
                destino: destino
            });
            console.log('Documento adicionado com ID: ', docRef.id);
            alert("Saida Registrada!")

            // Limpar os campos após a adição dos dados
            setNF('');
            setProduto('');
            setQuantidade('');
            setDestino('');
        } catch (error) {
            console.error('Erro ao adicionar dados: ', error);
            alert("Ocorreu um erro!")
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Saída</Text>
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
                placeholder="Destino"
                value={destino}
                onChangeText={text => setDestino(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSaida}>
                <Text style={styles.buttonText}>Registrar Saída</Text>
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})


