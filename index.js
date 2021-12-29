/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { WelcomeScreen } from './src/screens/welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WelcomeScreen);
