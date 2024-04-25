import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
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
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => Modificar()}>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
                    <Card.Title title="Modificar" style={styles.title} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ColetarDados()}>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
                    <Card.Title title="Coletar dados" style={styles.title} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Relatorio()}>
                <Card>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
                    <Card.Title title="Relatório" style={styles.title} />
                </Card>
            </TouchableOpacity>
        </View >
    );
};

const estilos = StyleSheet.create({

})

export default AcoesPesquisa;
