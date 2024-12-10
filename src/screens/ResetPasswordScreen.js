import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Success',
        'Password reset email has been sent. Please check your inbox.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Text className="text-3xl font-bold mb-8 text-center">Reset Password</Text>
      
      <TextInput
        className="w-full bg-gray-100 rounded-lg p-4 mb-6"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity 
        className="w-full bg-blue-500 p-4 rounded-lg mb-4"
        onPress={handleResetPassword}
      >
        <Text className="text-white text-center font-bold text-lg">Send Reset Link</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text className="text-blue-500 text-center">Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
