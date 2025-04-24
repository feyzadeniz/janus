import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';  // AsyncStorage import ediyoruz

const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedUsername === username && storedPassword === password) {
        console.log('Başarıyla Giriş Yapıldı');
        navigation.navigate('Home');  // Giriş başarılı, Home sayfasına yönlendiriyoruz
      } else {
        console.log('Geçersiz kullanıcı adı veya şifre');
      }
    } catch (error) {
      console.log('AsyncStorage okuma hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Başlık ve açıklama */}
      <View style={styles.container2}>
        <Text style={styles.title}>Hoşgeldin!</Text>
        <Text style={styles.subtitle}>Giriş yap ve planlamaya başla.</Text>
      </View>
      <View style={styles.container3}>
      {/* Kullanıcı adı input */}

      <Text style={styles.label}>kullanıcı adı</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      
      <Text style={styles.label}>şifre</Text>
      {/* Şifre input */}
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      </View>
      {/* Giriş yap butonu */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',  // Arka plan rengi beyaz
    
    padding: 56,
  },

  container2: {
    flex:1,
    flexDirection: 'column',
    marginTop: 200,
  },

  container3: {
    flex:1,
    flexDirection: 'column',
    marginBottom: 200,
  },
  
  title: {
    fontSize: 30,
    fontWeight: 'semibold',
    color: '#010D19',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#EAF1F6',
    borderRadius: 53,
    paddingLeft: 20,
    marginBottom: 40,
    fontSize: 16,
    fontFamily: 'MuseoModerno',
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },

  label: {
    fontSize: 16,
    color: '#010D19',
    marginBottom: 10,
    fontWeight: '500'
  },

  button: {
    marginLeft:40,
    marginBottom: 100,
    backgroundColor: '#3498DB',  // Buton rengi
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

export default Login;
