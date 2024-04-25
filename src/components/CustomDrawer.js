import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { Button, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: colors.purple,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    paddingVertical: 10,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: 'white',
  },
  logoutButton: {
    color: 'white',
    borderRadius: 0,
    padding: 10,
  },
  logoutButtonLabel: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export const CustomDrawer = props => {
  const goBack = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.drawerContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>usuario@dominio.com</Text>
        <View style={styles.divider} />
      </View>
      <DrawerContentScrollView
        {...props}
        style={{ width: '100%' }}
        contentContainerStyle={{
          backgroundColor: colors.purple,
        }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Button
        icon="logout"
        onPress={goBack}
        style={styles.logoutButton}
        labelStyle={styles.logoutButtonLabel}>
        Sair
      </Button>
    </View>
  );
};
