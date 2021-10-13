import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
// import { Icon } from 'native-base';
import { loginStyles } from './styles';

export default function Login() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={loginStyles.container} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../assets/background-image.jpg')}
          style={loginStyles.bgImage}
        >
          <View style={loginStyles.titleContainer}>
            {/* <Icon name="location-sharp" style={loginStyles.icon} /> */}
            <Text style={loginStyles.title}>Vision GO</Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
