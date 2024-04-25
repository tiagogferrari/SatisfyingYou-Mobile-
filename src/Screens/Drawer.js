import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import Home from './Home';
import { CustomDrawer } from '../components/CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants/colors';

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
        drawerActiveTintColor: colors.darkPurple,
        headerStyle: { backgroundColor: colors.darkPurple },
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
          headerTintColor: 'white',
          headerTitle: '',
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
