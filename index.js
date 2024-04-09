/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Calculadora from './src/Screens/Calcuradora';
import Login from './src/Screens/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
