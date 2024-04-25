import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login';
import CriarConta from './src/Screens/CriarConta';
import RecuperarSenha from './src/Screens/RecuperarSenha';
import Drawer from './src/Screens/Drawer';
import Agradecimento from './src/Screens/Agradecimento';
import Coleta from './src/Screens/Coleta';
import NovaPesquisa from './src/Screens/NovaPesquisa';
import Relatorio from './src/Screens/Relatorio';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#2B1D62' },
          headerTintColor: 'white',
          headerTitleStyle: { fontFamily: 'AveriaLibre-Regular' },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{
            headerShown: true,
            headerTitle: 'Nova Conta',
          }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{
            headerShown: true,
            headerTitle: 'Recuperação de senha',
          }}
        />
        <Stack.Screen
          name="NovaPesquisa"
          component={NovaPesquisa}
          options={{
            headerShown: true,
            headerTitle: 'Nova pesquisa',
          }}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{
            headerShown: true,
            headerTitle: 'Relatório',
          }}
        />
        <Stack.Screen name="Agradecimento" component={Agradecimento} />
        <Stack.Screen name="Coleta" component={Coleta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
