import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 30,
  },
});

const Agradecimento = props => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('AcoesPesquisa');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.view}>
      <Text style={styles.texto}>Obrigado por participar da pesquisa !</Text>
      <Text style={styles.texto}>Aguardamos você no próximo ano !</Text>
    </View>
  );
};

export default Agradecimento;
