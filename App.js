import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstView from './src/screens/FirstView';
import BeforeRegister from './src/screens/BeforeRegister';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NewTask from './src/screens/NewTask';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="FirstView"
        screenOptions={{ headerShown: false }}  // Tüm ekranlarda başlık kaldırılıyor
      >
        <Stack.Screen name="FirstView" component={FirstView} />
        <Stack.Screen name="BeforeRegister" component={BeforeRegister} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewTask" component={NewTask} />



        {/* Diğer ekranları burada sırasıyla ekleyebilirsiniz */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
