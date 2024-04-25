import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  Image,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, Card } from 'react-native-paper';
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
  card: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: colors.blue,
    textAlign: 'center',
  },
  date: {
    fontFamily: 'AveriaLibre-Regular',
    color: colors.lightBlue,
    textAlign: 'center',
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
});

const Home = () => {
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
                data={[
                  {
                    id: 1,
                    title: 'Card Title',
                    subtitle: '20/04/2024',
                    image: 'https://picsum.photos/700',
                  },
                  {
                    id: 2,
                    title: 'Card Title',
                    subtitle: '20/04/2024',
                    image: 'https://picsum.photos/700',
                  },
                  {
                    id: 3,
                    title: 'Card Title',
                    subtitle: '20/04/2024',
                    image: 'https://picsum.photos/700',
                  },
                  {
                    id: 4,
                    title: 'Card Title',
                    subtitle: '20/04/2024',
                    image: 'https://picsum.photos/700',
                  },
                ]}
                spa
                horizontal
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                    <Image source={{ uri: item.image }} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.subtitle}</Text>
                  </View>
                )}
              />
            </View>
            <View>
              <Button title="Nova Pesquisa" onPress={() => {}} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
