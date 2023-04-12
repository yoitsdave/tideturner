import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button } from 'react-native';
import HomeScreen from './components/screens/Home'
import LoginScreen from './components/screens/Login'
import NewWashScreen from './components/screens/NewWash'
import RegisterScreen from './components/screens/Register'
import SetupMachineScreen from './components/screens/SetupMachine'
import LeaderBoardScreen from './components/screens/LeaderBoard'
import LaunchScreen from './components/screens/Launch';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />

        <Stack.Screen
            name="NewWash"
            component={NewWashScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="SetupMachine"
          component={SetupMachineScreen}
        />

        <Stack.Screen
          name="LeaderBoard"
          component={LeaderBoardScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;