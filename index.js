/**
 * @format
 */

import {AppRegistry, Platform, StatusBar, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Require cycle:',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);
console.log('StatusBar.setTranslucent(true);', Platform.OS);
if (Platform.OS === 'android') {
  console.log('StatusBar.setTranslucent(true);');
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}
StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent(appName, () => App);
