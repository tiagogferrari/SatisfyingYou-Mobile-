import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '17%',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  TextInput: {
    marginBottom: 20,
    width: 500,
    height: 40,
  },
  BtnC: {
    backgroundColor: '#37BD6D',
    borderRadius: 0,
    marginBottom: 10,
    width: 500,
  },
  BtnText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
});

const RecuperarSenha = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.TextInput} placeholder="Insira seu e-mail" />
      <Button labelStyle={styles.BtnText} style={styles.BtnC}>
        RECUPERAR
      </Button>
    </View>
  );
};

export default RecuperarSenha;
