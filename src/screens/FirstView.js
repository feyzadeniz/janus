import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles'; // globalStyles dosyasını import edin

const FirstView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={globalStyles.header}>Janus App</Text> {/* Burada fontu test ediyoruz */}
    </View>
  );
};

export default FirstView;
