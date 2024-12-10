import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Text className="text-3xl font-bold mb-8 text-center">Login</Text>
      
      <TextInput
        className="w-full bg-gray-100 rounded-lg p-4 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        className="w-full bg-gray-100 rounded-lg p-4 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg mb-4"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold text-lg">Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Register')}
        className="mb-4"
      >
        <Text className="text-blue-500 text-center">Don't have an account? Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text className="text-blue-500 text-center">Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}
