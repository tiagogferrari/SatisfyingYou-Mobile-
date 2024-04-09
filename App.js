//Imports
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/Screens/Login"
import Calculadora from "./src/Screens/Calcuradora"
import Drawer from "./src/Screens/Drawer"

const Stack = createStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" /*</NavigationContainer>screenOptions={{headerShown: false}}*/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Drawer" component={Drawer}/>
        <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>

    </NavigationContainer>
  )

}

export default App