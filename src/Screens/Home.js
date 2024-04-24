import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

const Home = () => {
    return (
            <View style={styles.container}>
                <Searchbar placeholder="Insira o termo de busca..." />
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
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '25%', // Define o tamanho do card
        marginBottom: 10,
    },
});

export default Home;
