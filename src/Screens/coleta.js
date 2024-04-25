import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Coleta = (props) => {
    const navigation = useNavigation();

    const handleClickIcone = () => {
        navigation.navigate('Agradecimento'); // Navega para a tela de agradecimento ao clicar no ícone
    }

    return (
        <View style={estilos.view}>
            
                <Text style={estilos.titulo}>O que você achou do Carnaval 2024?</Text>
            
            <View style={estilos.container}>
                <TouchableOpacity style={estilos.iconeContainer} onPress={handleClickIcone}>
                    <Icon name="sentiment-very-dissatisfied" size={100} color="#8B0000" />
                    <Text style={estilos.label}>Péssimo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.iconeContainer} onPress={handleClickIcone}>
                    <Icon name="sentiment-dissatisfied" size={100} color="red" />
                    <Text style={estilos.label}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.iconeContainer} onPress={handleClickIcone}>
                    <Icon name="sentiment-neutral" size={100} color="#FFA07A" />
                    <Text style={estilos.label}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.iconeContainer} onPress={handleClickIcone}>
                    <Icon name="sentiment-satisfied" size={100} color="#98FB98" />
                    <Text style={estilos.label}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.iconeContainer} onPress={handleClickIcone}>
                    <Icon name="sentiment-very-satisfied" size={100} color="darkgreen" />
                    <Text style={estilos.label}>Excelente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: 40,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20, // Espaçamento entre o cabeçalho e os ícones
    },
    iconeContainer: {
        alignItems: 'center',
        margin: 30,
    },
    label: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    titulo: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular',
        
    }
})

export default Coleta;