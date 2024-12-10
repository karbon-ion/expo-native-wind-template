import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // 'user' or 'restaurant'

  const handleRegister = async () => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      // Add user type to user profile
      await response.user.updateProfile({
        userType: userType,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Text className="text-3xl font-bold mb-8 text-center">Register</Text>
      
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

      <View className="flex-row justify-center space-x-4 mb-6">
        <TouchableOpacity 
          className={`px-6 py-3 rounded-lg ${userType === 'user' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onPress={() => setUserType('user')}
        >
          <Text className={`${userType === 'user' ? 'text-white' : 'text-gray-700'}`}>User</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className={`px-6 py-3 rounded-lg ${userType === 'restaurant' ? 'bg-blue-500' : 'bg-gray-300'}`}
          onPress={() => setUserType('restaurant')}
        >
          <Text className={`${userType === 'restaurant' ? 'text-white' : 'text-gray-700'}`}>Restaurant Admin</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg mb-4"
        onPress={handleRegister}
      >
        <Text className="text-white text-center font-bold text-lg">Register</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-blue-500 text-center">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
