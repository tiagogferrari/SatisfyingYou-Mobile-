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
  },
});

export const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.subtitle}</Text>
    </View>
  );
};
