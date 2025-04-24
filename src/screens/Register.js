import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // AsyncStorage'a kullanıcı adı ve şifreyi kaydediyoruz
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      
      console.log('Kayıt Yapıldı!');
      navigation.navigate('Login');  // Kayıt başarılı, Login sayfasına yönlendiriyoruz
    } catch (error) {
      console.log('AsyncStorage hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Görseli ekliyoruz */}
      <Image
        source={require('../assets/vectors/vector2.png')}
        style={styles.vector}
      />
      
      
      <Text style= {styles.label}>kullanıcı adı</Text>
      {/* Kullanıcı adı input */}
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      
      <Text style= {styles.label}>şifre</Text>

      {/* Şifre input */}
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Kayıt ol butonu */}
      <TouchableOpacity 
        style={[styles.button, { opacity: (username && password) ? 1 : 0.5 }]}  // Butonun aktif olup olmaması
        onPress={handleRegister}
        //disabled={!username || !password}  // Eğer inputlar boşsa butonu devre dışı bırakıyoruz
      >
        <Text style={styles.buttonText}>Devam Et</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 56,
  },

  container2: {
    flex: 1,
    flexDirection: 'column',

  },

  vector: {
    width: 293,
    height: 293,
    marginBottom: 40,
  },
 
  label: {
    fontSize: 16,
    color: '#010D19',
    marginBottom: 10,
    fontWeight: '500'
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#EAF1F6',
    borderRadius: 53,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'MuseoModerno',
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#3498DB',
    width:226 ,
    height: 60,
    borderRadius: 53,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Register;
