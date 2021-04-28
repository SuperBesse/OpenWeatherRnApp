/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppProvider from 'configuration/container/AppProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppProvider);
