
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Authentication/Login";
import RegisterScreen from "./src/screens/Authentication/Register";
import KadastraiScreen from "./src/screens/Kadastrai"

  
  const Stack = createStackNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Kadastrai">
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options= {{ title: 'Home', headerShown: false}}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options= {{ title: 'Login', headerShown: false}}
            />
            <Stack.Screen 
                name="Register" 
                component={RegisterScreen} 
                options= {{ title: 'Register', headerShown: false}}
                
            />
            <Stack.Screen 
                name="Kadastrai" 
                component={KadastraiScreen} 
                options= {{ title: 'Kadastrai'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }