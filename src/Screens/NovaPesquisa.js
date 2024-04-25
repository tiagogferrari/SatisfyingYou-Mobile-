import { Text, View, StyleSheet, Image } from "react-native"
import { TextInput, Button, } from "react-native-paper";
import Fontisto from 'react-native-vector-icons/Fontisto';

const NovaPesquisa = () => {
    return (
        <View style={estilos.view}>
            <Text style={estilos.label}>Nome</Text>
            <TextInput style={estilos.TextInput} placeholder="Insira seu nome" />
            <Text style={estilos.label}>Data</Text>
            <TextInput
                style={estilos.TextInput}
                placeholder="Insira a data"
                right={<TextInput.Icon icon={() => <Fontisto name="date" size={24} color="#989897" />} />}
            />
            <Text style={estilos.label}>Imagem</Text>
            <View style={estilos.addImg}>
                <Text style={estilos.texto}>Câmera/Galeria de imagens</Text>
            </View>
            <Button labelStyle={estilos.BtnText} style={estilos.BtnC}> CADASTRAR </Button>
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
    label: {
        alignSelf: 'flex-start',
        marginLeft: '17%',
        marginBottom: 5,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    TextInput: {
        marginBottom: 15,
        width: 500,
        height: 40,
    },
    BtnC: {
        backgroundColor: "#37BD6D",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
    BtnText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20
    },
    addImg: {
        alignSelf: 'flex-start',
        marginLeft: '17%',
        width: 250,
        height: 60,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    texto: {
        color: '#939393',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 20
    }
})

export default NovaPesquisa
