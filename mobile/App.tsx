import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SignIn, SignUp, ResetPassword, Home, Passengers
} from "./screens/index";
import { AuthProvider } from './context/auth';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const options = {
    headerShown: false
  }
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <AuthProvider>
      <SafeAreaProvider style={{ width: screenWidth, minHeight: screenHeight }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen options={options} name="SignIn" component={SignIn} />
            <Stack.Screen options={options} name="SignUp" component={SignUp} />
            <Stack.Screen options={options} name="ResetPassword" component={ResetPassword} />
            <Stack.Screen options={options} name="Home" component={Home} />
            <Stack.Screen options={options} name="Passengers" component={Passengers} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>      
    </AuthProvider>
  );
}

export default App;