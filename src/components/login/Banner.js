import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { loginStyles } from './styles';

export default function Banner() {
  return (
    <ImageBackground
      source={require('../../assets/background-image.jpg')}
      style={loginStyles.bgImage}
    >
      <View style={loginStyles.titleContainer}>
        {/* <Icon name="location-sharp" style={loginStyles.icon} /> */}
        <Text style={loginStyles.title}>Vision GO</Text>
      </View>
    </ImageBackground>
  );
}
