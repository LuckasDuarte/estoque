import { StatusBar } from 'expo-status-bar';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

// firebase
// import firestore from "./src/FIREBASE/firebase";
// import app from "./src/FIREBASE/firebase"

// Screens
import homePage from './src/pages/HOME/home'
import entradaPage from './src/pages/ENTRADA/entrada'
import saidaPage from './src/pages/SAIDA/saida'
import estoquePage from './src/pages/ESTOQUE/estoque'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homePage}
          options={{
            title: "ESTOQUE DE ALIMENTOS",
            headerTitleAlign: 'center', // Alinha o texto ao centro
            headerStyle: {
              backgroundColor: '#3F51B5', // Cor de fundo desejada
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do cabeçalho
            },
          }}
        />
        <Stack.Screen name="Entrada" component={entradaPage}
          options={{
            title: "Cadastrar Entrada",
            headerTitleAlign: 'center', // Alinha o texto ao centro
            headerStyle: {
              backgroundColor: '#3F51B5', // Cor de fundo desejada
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do cabeçalho
            },
          }}
        />
        <Stack.Screen name="Saida" component={saidaPage}
          options={{
            title: "Cadastrar Saída",
            headerTitleAlign: 'center', // Alinha o texto ao centro
            headerStyle: {
              backgroundColor: '#3F51B5', // Cor de fundo desejada
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do cabeçalho
            },
          }}
        />
        <Stack.Screen name="Estoque" component={estoquePage}
          options={{
            title: "Consultar Estoque",
            headerTitleAlign: 'center', // Alinha o texto ao centro
            headerStyle: {
              backgroundColor: '#3F51B5', // Cor de fundo desejada
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do texto do cabeçalho
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

