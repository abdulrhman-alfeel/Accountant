/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {Store} from './Src/redux/store';
const Stack = createStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import ModulsData from './Src/Modulsdata';
import Homeing from './Src/Homeing';
import Home from './Home';
class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider store={Store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Homeing"
              screenOptions={() => ({header: () => null})}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ModulsData" component={ModulsData} />
              <Stack.Screen name="Homeing" component={Homeing} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </View>
    );
  }
}
export default App;
