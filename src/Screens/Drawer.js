import { createDrawerNavigator } from "@react-navigation/drawer"
import Tela1 from "./Tela1"
import Tela2 from "./Tela2"
import Calculadora from "./Calcuradora"

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{ drawerActiveTintColor: 'red'}}>
            <DrawerNavigator.Screen name="Tela1" component={Tela1}/>
            <DrawerNavigator.Screen name="Tela2" component={Tela2}/>
            <DrawerNavigator.Screen name="Calculadora" component={Calculadora}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer