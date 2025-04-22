import React from 'react';
import { View } from 'react-native';

// Ekranlar (Screens)
import FirstView from './src/screens/FirstView';
import BeforeRegister from './src/screens/BeforeRegister';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home'
import NewTask from './src/screens/NewTask';
import Calendar from './src/screens/Calendar';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FirstView />
      <BeforeRegister />
      <Register />
      <Login />
      <Home />
      <NewTask />
      <Calendar />
    </View>
  );
};

export default App;
