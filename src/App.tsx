import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
