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
        backgroundColor: '#312464',
        padding: 30,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle:{
        marginTop:10,
    }

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
                <TouchableOpacity onPress={() => Modificar()} style={styles.space}>
                    <Card style={styles.card}>
                        <Card.Cover source={modificar} style={styles.image} />
                        <Card.Title title="Modificar" titleStyle={styles.title} style={styles.cardTitle}/>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ColetarDados()} style={styles.space}>
                    <Card style={styles.card}>
                        <Card.Cover source={coletar} style={styles.image} />
                        <Card.Title title="Coletar dados" titleStyle={styles.title} style={styles.cardTitle} />
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Relatorio()} style={styles.space}>
                    <Card style={styles.card}>
                        <Card.Cover source={relatorio} style={styles.image} />
                        <Card.Title title="Relatório" titleStyle={styles.title} style={styles.cardTitle}/>
                    </Card>
                </TouchableOpacity>
            </View >
        </View>
    );
};


export default AcoesPesquisa;
