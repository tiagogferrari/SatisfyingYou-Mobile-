//Imports
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/Screens/Login"
import CriarConta from "./src/Screens/CriarConta"
import RecuperarSenha from "./src/Screens/RecuperarSenha"
import Drawer from "./src/Screens/Drawer"

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false, headerStyle: { backgroundColor: '#2B1D62' },headerTintColor: 'white',}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="CriarConta" component={CriarConta} options={{ headerShown: true }}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: true }} />
      </Stack.Navigator>

    </NavigationContainer>
  )

}

export default App