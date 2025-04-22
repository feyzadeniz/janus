import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Gerekli bileşenleri import ediyoruz

const BeforeRegister = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Vektörün PNG olarak gösterilmesi */}
      <Image
        source={require('../assets/vectors/vector1.png')}  // PNG dosyasını import ediyoruz
        style={styles.vector}
      />
      
      {/* Başlık ve açıklama */}
      <Text style={styles.title}>Janus ile her şey daha kolay!</Text>
      <Text style={styles.subtitle}>Hemen kayıt ol ve planlamaya başla.</Text>

      {/* Kayıt ol butonu */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.buttonText}>Kayıt ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF1F6',  // Arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  vector: {
    width: 200,  // Resmin genişliği
    height: 200, // Resmin yüksekliği
    marginBottom: 40, // Resim ile metin arasındaki mesafe
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E2A48',  // Başlık rengi
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#707070', // Alt metin rengi
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3498DB', // Buton rengi
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',  // Drop shadow
    shadowOffset: { width: 0, height: 4 },  // X ve Y yönünde gölge
    shadowOpacity: 0.1,
    shadowRadius: 3,  // Gölgenin yayılma derecesi
    elevation: 5,  // Android için gölge
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF', // Buton metin rengi
    fontWeight: 'bold',
  },
});

export default BeforeRegister;
