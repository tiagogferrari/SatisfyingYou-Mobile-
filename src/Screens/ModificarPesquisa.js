import { Text, View, StyleSheet } from "react-native"
import { TextInput, Button } from "react-native-paper";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ModificarPesquisa = () => {
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
                <Icon name="party-popper" size={45} color="#c70eb3" />
            </View>
            <View style={estilos.change}>
                <Button labelStyle={estilos.BtnText} style={estilos.BtnC}>SALVAR</Button>
                <Icon name="trash-can-outline" size={35} color="white" marginLeft={50} marginTop={-5}/>
            </View>
            <View>
            <Text style={estilos.excluir}>Apagar</Text>
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
    change: {
        flexDirection: "row"
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
        marginLeft: 88
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
        justifyContent: "center",
        alignItems: "center",
    },
    excluir: {
        marginLeft: 650,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        marginTop: -19
    }
})

export default ModificarPesquisa