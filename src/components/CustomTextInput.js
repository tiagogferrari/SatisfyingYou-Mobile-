import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  TextInput: {
    width: '100%',
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: 'AveriaLibre-Regular',
    color: colors.blue,
    backgroundColor: 'white',
  },
});

export const CustomTextInput = props => {
  return <TextInput {...props} style={styles.TextInput} />;
};
