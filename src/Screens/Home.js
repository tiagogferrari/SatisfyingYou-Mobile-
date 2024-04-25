import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { Card } from '../components/Card';
import { colors } from '../constants/colors';

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

const options = [
  {
    id: 1,
    title: 'CARD TITLE',
    subtitle: '20/04/2024',
    image: 'https://picsum.photos/700',
  },
  {
    id: 2,
    title: 'CARD TITLE',
    subtitle: '20/04/2024',
    image: 'https://picsum.photos/700',
  },
  {
    id: 3,
    title: 'CARD TITLE',
    subtitle: '20/04/2024',
    image: 'https://picsum.photos/700',
  },
  {
    id: 4,
    title: 'CARD TITLE',
    subtitle: '20/04/2024',
    image: 'https://picsum.photos/700',
  },
];

const Home = props => {

  const handleCardPress = (item) => {
    props.navigation.navigate('ModificarPesquisa');
  };


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
                data={options}
                horizontal
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={({ item }) =>
                (
                  <TouchableOpacity onPress={() => handleCardPress(item)}>
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
