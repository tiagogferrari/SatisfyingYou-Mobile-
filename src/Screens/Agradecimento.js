import React, { useEffect } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Agradecimento = (props) => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate('Home');
            //navigation.navigate('AcoesPesquisa'); // Navega para a tela de ações de pesquisa após 3 segundos
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={estilos.view}>
            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
           
           
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    );
};

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 30,
    },
})

export default Agradecimento;
