import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./Home"
import { Text } from "react-native-paper"

const DrawerNavigator = createDrawerNavigator()

const CustomComponent = () => <Text>Texto Personalizado</Text>;

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{ drawerActiveTintColor: '#2B1D62', headerStyle: { backgroundColor: '#2B1D62' }}}>
            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer