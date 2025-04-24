import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Gerekli bileşenleri import ediyoruz

const BeforeRegister = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Vektörün PNG olarak gösterilmesi */}
      <Image
        source={require('../assets/vectors/vector1.png')}  // Verdiğiniz yolu bozmadan PNG dosyasını import ediyoruz
        style={styles.vector}
      />
      
      {/* Başlık ve açıklama */}
      <Text style={styles.title}>Janus ile her şey daha kolay!</Text>
      <Text style={styles.subtitle}>Hemen kayıt ol ve planlamaya başla.</Text>

      {/* Kayıt ol butonu */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Kayıt ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',  // Arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  vector: {
    width: 293,  // Resmin genişliği
    height: 293, // Resmin yüksekliği
    marginBottom: 90, // Resim ile metin arasındaki mesafe
  },
  title: {
    color: '#010D19',  // Yazı rengi
    textAlign: 'center', // Yazı ortalanacak
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 24, // Font boyutu
    fontWeight: 'normal', // Font ağırlığı (normal)
    lineHeight: 28, // Satır yüksekliği (font size ile orantılı)
    marginBottom: 30,  // Başlık ve alt metin arasındaki mesafe
  },
  subtitle: {
    color: '#010D19',  // Yazı rengi
    textAlign: 'center', // Yazı ortalanacak
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 24, // Font boyutu
    fontWeight: 'normal', // Font ağırlığı (normal)
    lineHeight: 28, // Satır yüksekliği (font size ile orantılı)
    marginBottom: 40,  // Alt metin ile buton arasındaki mesafe
  },
  button: {
    backgroundColor: '#3498DB', // Buton rengi
    width:226 ,
    height: 60,
    borderRadius: 53,
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
