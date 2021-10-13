import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import Banner from './Banner';
// import { Icon } from 'native-base';
import { loginStyles } from './styles';

export default function Login() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={loginStyles.container} showsVerticalScrollIndicator={false}>
        <Banner />
      </View>
    </ScrollView>
  );
}
