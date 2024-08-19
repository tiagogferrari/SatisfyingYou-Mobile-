import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useResearches } from '../contexts/useResearches';
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
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

const researchOpinionCollection = collection(db, 'research_opinion');

const Coleta = props => {
  const { activeSearchId } = useResearches();

  const handleSubmitOpinion = async (opinion) => {
    await addDoc(researchOpinionCollection, { researchId: activeSearchId, opinion });

    props.navigation.navigate('Agradecimento');
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handleSubmitOpinion(1)}>
          <Icon name="sentiment-very-dissatisfied" size={100} color="#d31818" />
          <Text style={styles.label}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handleSubmitOpinion(2)}>
          <Icon name="sentiment-dissatisfied" size={100} color="#f43917" />
          <Text style={styles.label}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handleSubmitOpinion(3)}>
          <Icon name="sentiment-neutral" size={100} color="#ffc534" />
          <Text style={styles.label}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handleSubmitOpinion(4)}>
          <Icon name="sentiment-satisfied" size={100} color="#39bc6f" />
          <Text style={styles.label}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconeContainer}
          onPress={() => handleSubmitOpinion(5)}>
          <Icon name="sentiment-very-satisfied" size={100} color="#24bc21" />
          <Text style={styles.label}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coleta;
