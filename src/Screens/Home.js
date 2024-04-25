import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, Card } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '30%',
    height: '100%',
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Searchbar placeholder="Insira o termo de busca..." />
          </View>
          <View style={styles.cardContainer}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
            </Card>
          </View>
          <View>
            <Button title="Nova Pesquisa" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
