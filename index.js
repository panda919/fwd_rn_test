/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
    'Require cycle:',
    'Remote debugger',
    'useNativeDriver',
    'currentlyFocusedField',
]);
AppRegistry.registerComponent(appName, () => App);
