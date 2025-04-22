import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstView from './src/screens/FirstView';  // Doğru yolda olduğunuzdan emin olun
import BeforeRegister from './src/screens/BeforeRegister';  // Diğer ekranları da import edin

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
        {/* Diğer ekranları burada sırasıyla ekleyebilirsiniz */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
