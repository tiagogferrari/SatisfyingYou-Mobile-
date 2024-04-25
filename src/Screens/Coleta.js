import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  iconeContainer: {
    alignItems: 'center',
    margin: 10,
  },
  label: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
});

const Coleta = props => {
  const handleClickIcone = () => {
    props.navigation.navigate('Agradecimento');
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>O que você achou do Carnaval 2024?</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={handleClickIcone}>
          <Icon name="sentiment-very-dissatisfied" size={100} color="#d31818" />
          <Text style={styles.label}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={handleClickIcone}>
          <Icon name="sentiment-dissatisfied" size={100} color="#f43917" />
          <Text style={styles.label}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={handleClickIcone}>
          <Icon name="sentiment-neutral" size={100} color="#ffc534" />
          <Text style={styles.label}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={handleClickIcone}>
          <Icon name="sentiment-satisfied" size={100} color="#39bc6f" />
          <Text style={styles.label}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={handleClickIcone}>
          <Icon name="sentiment-very-satisfied" size={100} color="#24bc21" />
          <Text style={styles.label}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coleta;
