import { Text, View, StyleSheet } from "react-native"
import { TextInput, Button } from "react-native-paper";

const CriarConta = () => {
    return (
        <View style={estilos.view}>
            <Text style={estilos.label}>E-mail</Text>
            <TextInput style={estilos.TextInput} placeholder="Insira seu e-mail" />
            <Text style={estilos.label}>Senha</Text>
            <TextInput style={estilos.TextInput} placeholder="Insira sua senha" />
            <Text style={estilos.label}>Repita sua senha</Text>
            <TextInput style={estilos.TextInput} placeholder="Repita sua senha" />
            <Button style={estilos.BtnC}> CADASTRAR </Button>

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
    },
    TextInput: {
        marginBottom: 20,
        width: 500,
        height: 40,
    },
    BtnC: {
        backgroundColor: "#37BD6D",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
})

export default CriarConta
