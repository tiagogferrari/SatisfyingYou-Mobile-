import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import NovaPesquisa from "./NovaPesquisa"
import Calculadora from "./Calcuradora"
import CriarConta from "./CriarConta"

const DrawerNavigator = createDrawerNavigator()

//<DrawerNavigator.Screen name="" component={}/>
//<DrawerNavigator.Screen name="Calculadora" component={Calculadora}/>

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{ drawerActiveTintColor: 'red'}}>
            <DrawerNavigator.Screen name="Home" component={Home}/>
            <DrawerNavigator.Screen name="Criar conta" component={CriarConta}/>
            <DrawerNavigator.Screen name="Nova Pesquisa" component={NovaPesquisa}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer