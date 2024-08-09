import { View, Image, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: 'AveriaLibre-Regular',
    color: colors.blue,
  },
  date: {
    fontFamily: 'AveriaLibre-Regular',
    color: colors.gray,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
});

export const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.date}>{item.data}</Text>
    </View>
  );
};
