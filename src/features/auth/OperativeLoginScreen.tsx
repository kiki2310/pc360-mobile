import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  SafeAreaView
} from 'react-native';

export default function OperativeLoginScreen() {
  const [unidad, setUnidad] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <Text style={styles.headerTitle}>PC360 - Operativo</Text>

      {/* Tu Logo Transparente */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Formulario de Login */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Iniciar sesión:</Text>

        <TextInput
          style={styles.input}
          placeholder="IDENTIFICADOR DE UNIDAD:"
          placeholderTextColor="#888"
          value={unidad}
          onChangeText={setUnidad}
        />

        <TextInput
          style={styles.input}
          placeholder="CONTRASEÑA:"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: '85%',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333333',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});