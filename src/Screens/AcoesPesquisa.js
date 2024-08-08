import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { colors } from '../constants/colors';
import coletar from '../../assets/img/coletardados.png';
import modificar from '../../assets/img/modificar.png';
import relatorio from '../../assets/img/relatorio.png';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  image: {
    width: 75,
    height: 75,
    backgroundColor: '#312464',
  },
  title: {
    fontSize: 26,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    marginTop: 10,
  },
  space: {
    margin: 10,
  },
  card: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: colors.lightPurple,
    padding: 30,
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
});

const AcoesPesquisa = props => {

  const Modificar = () => {
    props.navigation.navigate('ModificarPesquisa');
  };

  const ColetarDados = () => {
    props.navigation.navigate('Coleta');
  };

  const Relatorio = () => {
    props.navigation.navigate('Relatorio');
  };

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => Modificar()} style={styles.card}>
          <Image source={modificar} style={styles.image} />
          <Text style={styles.title}>Modificar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ColetarDados()} style={styles.card}>
          <Image source={coletar} style={styles.image} />
          <Text style={styles.title}>Coletar dados</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Relatorio()} style={styles.card}>
          <Image source={relatorio} style={styles.image} />
          <Text style={styles.title}>Relatório</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AcoesPesquisa;
