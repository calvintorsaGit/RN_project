/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';;
import Home from "./src/Screen/Home";
import DetailTransaction from "./src/Screen/DetailTransaction";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from  './src/Store/configureStore'
const store = configureStore()
const Stack = createStackNavigator();

const App: () => Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{title:'Halaman awal'}}/>
                    <Stack.Screen name="DetailTransaction" component={DetailTransaction}
                                  options={{title:'Detail Transaksi'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
