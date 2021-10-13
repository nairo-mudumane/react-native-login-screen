import React from 'react';
import { View, Text } from 'react-native';
import { formStyles } from './styles';

export default function LoginForm() {
  return (
    <View style={formStyles.container}>
      <Text style={{ color: '#0000' }}>Form</Text>
    </View>
  );
}
