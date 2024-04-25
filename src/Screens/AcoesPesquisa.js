import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { colors } from '../constants/colors';
import coletar from '../../assets/img/coletardados.png';
import modificar from '../../assets/img/modificar.png';
import relatorio from '../../assets/img/relatorio.png';

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        flexDirection: 'row',

    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 26,
        fontFamily: 'AveriaLibre-Regular',
        color: colors.blue,
    },
    card: {
        margin: 10,
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
        <View style={styles.view}>
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={() => Modificar()} style={styles.card}>
                    <Card>
                        <Card.Cover source={modificar} style={styles.image} />
                        <Card.Title title="Modificar" style={styles.title} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ColetarDados()} style={styles.card}>
                    <Card>
                        <Card.Cover source={coletar} style={styles.image} />
                        <Card.Title title="Coletar dados" style={styles.title} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Relatorio()} style={styles.card}>
                    <Card>
                        <Card.Cover source={relatorio} style={styles.image} />
                        <Card.Title title="Relatório" style={styles.title} />
                    </Card>
                </TouchableOpacity>
            </View >
        </View>
    );
};


export default AcoesPesquisa;
