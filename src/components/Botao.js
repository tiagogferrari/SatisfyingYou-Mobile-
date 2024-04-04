//Import
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//Defs
const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#101010',
        width: 130,
        backgroundColor: '#404040',
        marginBottom: 20
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    }
})

//export
export default Botao