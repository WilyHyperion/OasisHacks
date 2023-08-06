import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Pages/Home';
import Scanner from './Pages/Scanner';
import Results from './Pages/Results';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Scanner"
          component={Scanner}
        />
        <Stack.Screen 
          name="Results"
          component={Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Raleway-Bold.ttf'),
  });
  return (
    <AppStack/>
  );
}

