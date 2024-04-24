import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import NovaPesquisa from "./NovaPesquisa"
import Calculadora from "./Calcuradora"
import CriarConta from "./CriarConta"

const DrawerNavigator = createDrawerNavigator()

//<DrawerNavigator.Screen name="Criar conta" component={CriarConta}/>
//<DrawerNavigator.Screen name="Nova Pesquisa" component={NovaPesquisa}/>


const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{ drawerActiveTintColor: '#2B1D62', headerStyle: { backgroundColor: '#2B1D62' }}}>
            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer