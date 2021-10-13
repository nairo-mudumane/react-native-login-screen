import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import Banner from './Banner';
import LoginForm from './Form';
// import { Icon } from 'native-base';
import { loginStyles } from './styles';

export default function Login() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      showsVerticalScrollIndicator={false}
    >
      <Banner />
      <View style={loginStyles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={loginStyles.welcomeText}>Welcome</Text>
          <Text>
            Don't have an account?
            <Text style={{ color: 'red', fontStyle: 'italic' }}>
              {' '}
              Register now
            </Text>
          </Text>
          <LoginForm />
        </View>
      </View>
    </ScrollView>
  );
}
