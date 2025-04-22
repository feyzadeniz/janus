import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native'; // StyleSheet import ediyoruz

const FirstView = ({ navigation }) => {
  useEffect(() => {
    // 1500ms sonra geçiş yapılacak
    const timer = setTimeout(() => {
      navigation.navigate('BeforeRegister');  // Önceden belirlediğiniz ekran ismine geçiş yapıyoruz
    }, 1500);

    // Temizlik fonksiyonu
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* LOGO.png dosyasını render ediyoruz */}
      <Image
        source={require('../assets/vectors/LOGO.png')}  // Yerel PNG dosyasını require ile import ediyoruz
        style={styles.logo}  // Resme ait stil özelliklerini StyleSheet ile tanımlıyoruz
      />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BBEF1',  // Arka plan rengini burada tanımlıyoruz
    justifyContent: 'center',    // Dikeyde ortalamak için
    alignItems: 'center',        // Yatayda ortalamak için
  },
  logo: {
    width: 200,  // Görüntü genişliği
    height: 200, // Görüntü yüksekliği
    resizeMode: 'contain', // Resim orantılı şekilde ekran boyutuna uysun
  },
});

export default FirstView;
