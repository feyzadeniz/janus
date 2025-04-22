// App.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Welcome to React Native!</Text>
      <Button
        title="Press Me"
        onPress={() => alert('Button Pressed!')}
      />
    </View>
  );
};

export default App;
