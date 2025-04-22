import { StyleSheet } from 'react-native';
import MuseoModerno from '../assets/fonts/MuseoModerno-VariableFont_wght.ttf'; 


const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Genel arka plan rengi
    padding: 16,
  },
  header: {
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 28,
    color: '#1E2A48', // Başlık rengi
    textAlign: 'center',
    marginBottom: 20,
  },
  textPrimary: {
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 16,
    color: '#1E2A48', // Ana metin rengi
  },
  textSecondary: {
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 14,
    color: '#707070', // İkinci metin rengi
  },
  button: {
    backgroundColor: '#3498DB', // Buton rengi
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'MuseoModerno',
    fontSize: 16,
    color: '#FFFFFF', // Buton metin rengi
  },
  input: {
    backgroundColor: '#EFF4FA', // Input alanı arka plan rengi
    borderWidth: 1,
    borderColor: '#D1D1D1', // Input sınır rengi
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#1E2A48', // Input metin rengi
  },
  footer: {
    fontFamily: 'MuseoModerno', // Yazı tipi
    fontSize: 14,
    color: '#707070', // Alt metin rengi
    textAlign: 'center',
    marginTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
  },
  calendarTitle: {
    fontFamily: 'MuseoModerno',
    fontSize: 18,
    color: '#1E2A48',
    marginBottom: 10,
  },
});

export default globalStyles;
