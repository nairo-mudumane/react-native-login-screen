import React from 'react';
import { View } from 'react-native';
/* import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; */
import Login from './src/components/login/';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};
export default App;

{
  /* <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer> */
}
