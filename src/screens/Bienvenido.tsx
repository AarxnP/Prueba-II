import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenTwo } from './ScreenTwo';
import { ButtonComponent } from '../components/ButtonComponent';
import { ScreenThree } from './ScreenThree';

const Stack = createStackNavigator();

export const ScreenOne =({ navigation }:any)=> {

    const onPress = () => {
        
      navigation.navigate('ScreenTwo');
    };
  
    const onPressImagen2 = () => {
      navigation.navigate('ScreenThree');
    };
  
    const onPressMayIgual = () => {
      navigation.navigate('ScreenFour');
    };
  
    const onPressMenIgual = () => {
      navigation.navigate('ScreenFive');
    };
  
    return (
        <View>
          <Text style={{fontSize:45}}>HOLA PROFE :)</Text>
          <View>
            <ButtonComponent title="Img 1" onPress={() => navigation.navigate(ScreenTwo)} />
            <ButtonComponent title="Img 2" onPress={() => navigation.navigate(ScreenThree)} />
          </View>
          <View>
            <ButtonComponent title=">=" onPress={onPressMayIgual} />
            <ButtonComponent title="<=" onPress={onPressMenIgual} />
          </View>
        </View>
      );
    }