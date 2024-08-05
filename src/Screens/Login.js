import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CustomTextInput } from '../components/CustomTextInput';
import { colors } from '../constants/colors';
import { validateEmail } from '../utils/validate-email';
import { auth_mod } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    gap: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    gap: 2,
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  loginButton: {
    backgroundColor: colors.green,
  },
  createAccountButton: {
    backgroundColor: colors.blue,
  },
  forgotPasswordButton: {
    backgroundColor: colors.lightBlue,
  },
  button: {
    width: '100%',
    borderRadius: 0,
    padding: 0,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  errorMessage: {
    color: colors.red,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const goToCriar = () => {
    props.navigation.navigate('CriarConta');
  };

  const goToRecuperar = () => {
    props.navigation.navigate('RecuperarSenha');
  };

  const handleSubmit = () => {
    if (!email) {
      return setError('Campo de e-mail obrigatírio.');
    }

    if (!password) {
      return setError('Campo de senha obrigatírio.');
    }

    if (!validateEmail(email)) {
      return setError('E-mail inválido.');
    }

    signInWithEmailAndPassword(auth_mod, email, password)
      .then((userLogged) => {
        console.log("Usuário autenticado: " + JSON.stringify(userLogged))
        props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log("Erro ao autenticar: " + JSON.stringify(error.code))
      })
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.titulo}>Satisfying.you</Text>
              <Icon name="sentiment-satisfied-alt" size={60} color="white" />
            </View>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <CustomTextInput
                  label="E-mail"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Insira seu e-mail"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <CustomTextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Insira sua senha"
                  secureTextEntry={true}
                />
                <Text style={styles.errorMessage}>{error}</Text>
              </View>
              <Button
                labelStyle={styles.buttonText}
                style={[styles.button, styles.loginButton]}
                onPress={handleSubmit}>
                Entrar
              </Button>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                labelStyle={styles.buttonText}
                style={[styles.button, styles.createAccountButton]}
                onPress={goToCriar}>
                Criar minha conta
              </Button>
              <Button
                labelStyle={styles.buttonText}
                style={[styles.button, styles.forgotPasswordButton]}
                onPress={goToRecuperar}>
                Esqueci minha senha
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
