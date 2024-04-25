import { Image, View, StyleSheet } from 'react-native';
import image from '../../assets/img/graphic.png';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:  'center'
  },
  image: {
    width: '62%',
    height: '100%',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
});

const Relatorio = () => {
  return (
    <View style={styles.view}>
      <Image source={image} style={styles.image}/>
    </View>
  );
};

export default Relatorio;
