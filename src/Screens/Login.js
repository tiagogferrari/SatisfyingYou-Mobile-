import { View, Text, StyleSheet, } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goToDrawer = () => {
        props.navigation.navigate('Drawer')

    }

    const goToCriar = () => {
        props.navigation.navigate('CriarConta')
    }

    const goToRecuperar = () => {
        props.navigation.navigate('RecuperarSenha')
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.header}>
                <Text style={estilos.titulo}>Satisfying.you</Text>
                <Icon name="sentiment-satisfied-alt" size={50} color="white" />
            </View>
            <View style={estilos.vInputs}>
                <Text style={estilos.label}>E-mail</Text>
                <TextInput style={estilos.TextInput} value={email} onChangeText={setEmail} placeholder="Insira seu e-mail" />
                <Text style={estilos.label}>Senha</Text>
                <TextInput style={estilos.TextInput} value={password} onChangeText={setPassword} placeholder="Insira sua senha" />
            </View>
            <View style={estilos.vBotoes}>
                <Button labelStyle={estilos.BtnText} style={estilos.BtnE} onPress={goToDrawer}> Entrar </Button>
                <Button labelStyle={estilos.BtnText} style={estilos.BtnC} onPress={goToCriar}>Criar minha conta</Button>
                <Button labelStyle={estilos.BtnText} style={estilos.BtnS} onPress={goToRecuperar}>Esqueci minha senha</Button>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    titulo: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginRight: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    TextInput: {
        marginBottom: 20,
        width: 500,
        height: 40,
        fontFamily: 'AveriaLibre-Regular'
    },
    BtnE: {
        backgroundColor: "#37BD6D",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
    BtnC: {
        backgroundColor: "#419ED7",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
    BtnS: {
        backgroundColor: "#B0CCDE",
        borderRadius: 0,
        marginBottom: 10,
        width: 500,
    },
    BtnText: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20
    },
})

export default Login