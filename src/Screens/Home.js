import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { Card } from '../components/Card';
import { colors } from '../constants/colors';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useResearches } from '../contexts/useResearches';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    width: '90%',
  },
  cardContainer: {
    width: '100%',
  },
  searchBar: {
    width: '100%',
    borderRadius: 0,
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: 'AveriaLibre-Regular',
    color: colors.blue,
    backgroundColor: 'white',
  },
  newSearchButton: {
    width: '100%',
    borderRadius: 0,
    padding: 0,
    backgroundColor: colors.green,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
});

const Home = props => {
  const { selectSearch } = useResearches();
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    const fetchResearches = onSnapshot(
      collection(db, 'researches'),
      snapshot => {
        const researchesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(researchesList);
        setResearches(researchesList);
      },
      error => {
        console.error('Erro ao buscar pesquisas: ', error);
      },
    );

    return () => fetchResearches();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Searchbar
              style={styles.searchBar}
              inputStyle={styles.searchBar}
              placeholder="Insira o termo de busca..."
            />
            <View style={styles.cardContainer}>
              <FlatList
                data={researches}
                horizontal
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      selectSearch(item.id);
                      props.navigation.navigate('AcoesPesquisa');
                    }}>
                    <Card item={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
            <Button
              onPress={() => {
                props.navigation.navigate('NovaPesquisa');
              }}
              style={styles.newSearchButton}
              labelStyle={styles.buttonText}>
              NOVA PESQUISA
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
