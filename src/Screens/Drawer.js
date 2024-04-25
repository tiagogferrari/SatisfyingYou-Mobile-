import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import Home from './Home';
import { CustomDrawer } from '../components/CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: -20,
  },
});

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      title="teste"
      screenOptions={{
        drawerActiveTintColor: '#2B1D62',
        headerStyle: { backgroundColor: '#2B1D62' },
        drawerLabelStyle: {
          color: 'white',
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 20,
        },
      }}>
      <DrawerNavigator.Screen
        name="Pesquisas"
        component={Home}
        options={{
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color="white"
              />
            </View>
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
