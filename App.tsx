import { StatusBar } from 'expo-status-bar';

import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

// Screens
import homePage from './src/pages/HOME/home'
import entradaPage from './src/pages/ENTRADA/entrada'
import saidaPage from './src/pages/SAIDA/saida'
import estoquePage from './src/pages/ESTOQUE/estoque'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homePage}
          options={{
            title: "Estoque Fácil",
          }}
        />
        <Stack.Screen name="Entrada" component={entradaPage}
          options={{
            title: "Cadastrar Entrada",
          }}
        />
        <Stack.Screen name="Saida" component={saidaPage}
          options={{
            title: "Cadastrar Saída",
          }}
        />
        <Stack.Screen name="Estoque" component={estoquePage}
          options={{
            title: "Consultar Estoque",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

