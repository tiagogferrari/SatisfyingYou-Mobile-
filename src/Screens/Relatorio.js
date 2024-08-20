import { View, StyleSheet } from 'react-native';
import { useResearches } from '../contexts/useResearches';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import React, { useEffect, useState } from 'react';

const satisfymap = [
  {
    color: '#d31818',
    name: 'Péssimo',
  },
  {
    color: '#f43917',
    name: 'Ruim',
  },
  {
    color: '#ffc534',
    name: 'Neutro',
  },
  {
    color: '#39bc6f',
    name: 'Bom',
  },
  {
    color: '#24bc21',
    name: 'Excelente',
  },
];

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

const researchOpinionCollection = collection(db, 'research_opinion');

const Relatorio = () => {
  const { activeSearchId } = useResearches();
  const [chartData, setChartData] = useState([]);

  const filterAndCountOpnions = (opinionKey, opinions) => {
    return opinions.filter(opinion => opinion.opinion === opinionKey).length;
  };

  useEffect(() => {
    const getResearchOpinions = async () => {
      const querySnapshot = await getDocs(
        query(
          researchOpinionCollection,
          where('researchId', '==', activeSearchId),
        ),
      );

      const researchOpinions = [];

      querySnapshot.forEach(async documento => {
        researchOpinions.push(documento.data());
      });

      setChartData([
        {
          key: 1,
          value: filterAndCountOpnions(1, researchOpinions),
          svg: { fill: satisfymap[0].color },
          arc: { outerRadius: '130%', cornerRadius: 10 },
        },
        {
          key: 2,
          value: filterAndCountOpnions(2, researchOpinions),
          svg: { fill: satisfymap[1].color },
        },
        {
          key: 3,
          value: filterAndCountOpnions(3, researchOpinions),
          svg: { fill: satisfymap[2].color },
        },
        {
          key: 4,
          value: filterAndCountOpnions(4, researchOpinions),
          svg: { fill: satisfymap[3].color },
        },
        {
          key: 5,
          value: filterAndCountOpnions(5, researchOpinions),
          svg: { fill: satisfymap[4].color },
        },
      ]);
    };

    getResearchOpinions();
  }, []);

  return <View style={styles.view}></View>;
};

export default Relatorio;
