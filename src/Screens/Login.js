import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <TextInput value={email} onChangeText={setEmail} label="Email" placeholder="Insira seu e-mail" />
            <TextInput value={password} onChangeText={setPassword} label="Senha" placeholder="Insira sua senha" />
            <Button style={{ backgroundColor: "gray" }}> Entrar </Button>
        </View>
    )
}

export default Login