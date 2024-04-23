import { StyleSheet, TouchableOpacity, Text } from "react-native"



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
        width: 150,
        backgroundColor: 'grey',
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 1,
        padding: 5
    },
    texto: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Botao