import { Image, View, StyleSheet } from 'react-native';
import image from '../../assets/img/graphic.png';
import { PieChart } from 'react-native-svg-charts'
import { useResearches } from '../contexts/useResearches';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import React, { useEffect, useState } from 'react';

const satisfymap = [
  {
    color: '#d31818',
    name: 'Péssimo'
  },
  {
    color: '#f43917',
    name: 'Ruim'
  },
  {
    color: '#ffc534',
    name: 'Neutro'
  },
  {
    color: '#39bc6f',
    name: 'Bom'
  },
  {
    color: '#24bc21',
    name: 'Excelente'
  },
]

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    height: 260,
    width: 450,
  },
});

const Relatorio = () => {
  const { activeSearchId } = useResearches();
  const [researches, setResearches] = useState([]);
  const data = [
    {
      key: 1,
      value: 50,
      svg: { fill: '#600080' },
      arc: { outerRadius: '130%', cornerRadius: 10, }
    },
    {
      key: 2,
      value: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      value: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      value: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      value: 35,
      svg: { fill: '#ecb3ff' }
    }
  ]
  let datas = [
    {
      key: 1,
      value: 10,
      svg: { fill: satisfymap[0].color },
      arc: { outerRadius: '130%', cornerRadius: 10, }
    },
    {
      key: 2,
      value: 10,
      svg: { fill: satisfymap[1].color }
    },
    {
      key: 3,
      value: 10,
      svg: { fill: satisfymap[2].color }
    },
    {
      key: 4,
      value: 10,
      svg: { fill: satisfymap[3].color }
    },
    {
      key: 5,
      value: 10,
      svg: { fill: satisfymap[4].color }
    }
  ]
  useEffect(() => {
    const fetchResearches = onSnapshot(
      collection(db, 'research_opinion'),
      snapshot => {
        const researchesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(activeSearchId);
        const filteredResearches = researchesList.filter(
          item => item["researchId"] === activeSearchId
        );
        console.log(filteredResearches);
        setResearches(filteredResearches);
      },
      error => {
        console.error('Erro ao buscar pesquisas: ', error);
      },
    );

    return () => fetchResearches();
  }, []);

  return (
    <View style={styles.view}>
      <PieChart
        style={{ height: 400 }}
        outerRadius={'70%'}
        innerRadius={10}
        data={data}
      />
    </View>
  );
};

export default Relatorio;
