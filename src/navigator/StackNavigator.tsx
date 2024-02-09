import 'react-native-gesture-handler'; 
import React from 'react' 
import { createStackNavigator } from '@react-navigation/stack'; 
import { ScreenOne } from '../screens/Bienvenido'; 
import { ScreenTwo } from '../screens/ScreenTwo'; 
import { ScreenThree } from '../screens/ScreenThree';
import { ScreenFive } from '../screens/ScreenFive';
import { ScreenFour } from '../screens/ScreenFour';

 
export type RootStackParamList = {
    ScreenOne: undefined;
    ScreenTwo: undefined;
    ScreenThree: undefined;
    ScreenFour: undefined;
    ScreenFive: undefined;
}

const Stack = createStackNavigator <RootStackParamList> (); 
 
export const StackNavigator=()=> { 
  return ( 
    <Stack.Navigator screenOptions={{ 
        cardStyle:{ 
        }}}> 
      <Stack.Screen name="ScreenOne" options={{title:'INICIO'}}component={ScreenOne} /> 
      <Stack.Screen name="ScreenTwo" options={{headerShown:false}}component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" options={{headerShown:false}}component={ScreenThree} />
      <Stack.Screen name="ScreenFour" options={{headerShown:false}}component={ScreenFour} />
      <Stack.Screen name="ScreenFive" options={{headerShown:false}}component={ScreenFive} />
     
    </Stack.Navigator> 
  ); 
}
