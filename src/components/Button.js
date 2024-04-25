import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  fundo: {
    width: 150,
    backgroundColor: 'grey',
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    padding: 5,
  },
  texto: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export const Button = props => {
  const texto = props.texto;

  return (
    <TouchableOpacity style={styles.fundo} onPress={props.funcao}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};
