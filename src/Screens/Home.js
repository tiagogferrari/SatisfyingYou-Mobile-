import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Searchbar, Card, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Home = () => {
    return (
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
                <Button title="Nova Pesquisa" onPress={() => { }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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

export default Home;
