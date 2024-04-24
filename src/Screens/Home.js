import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <Searchbar placeholder="Insira o termo de busca..." />
            </View>
            <View style={styles.cardsContainer}>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" />
                </Card>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" />
                </Card>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" />
                </Card>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Meu Botão" onPress={() => { }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBarContainer: {
        height: '20%', 
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: '60%',
    },
    card: {
        width: '30%',
        height: '40%', 
        marginBottom: 10,
    },
    buttonContainer: {
        height: '20%', // Botão ocupa 20% da altura
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
