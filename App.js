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
import ModificarPesquisa from './src/Screens/ModificarPesquisa';
import AcoesPesquisa from './src/Screens/AcoesPesquisa';
import { ResearchesProvider } from './src/contexts/useResearches';
import { colors } from './src/constants/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ResearchesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: '#2B1D62' },
            headerTintColor: colors.purple,
            headerTitleStyle: {
              fontFamily: 'AveriaLibre-Regular',
              color: 'white',
            },
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
            name="ModificarPesquisa"
            component={ModificarPesquisa}
            options={{
              headerShown: true,
              headerTitle: 'Modificar pesquisa',
            }}
          />
          <Stack.Screen
            name="AcoesPesquisa"
            component={AcoesPesquisa}
            options={{
              headerShown: true,
              headerTitle: 'Ações Pesquisa',
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
    </ResearchesProvider>
  );
};

export default App;
