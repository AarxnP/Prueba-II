import { Alert, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { ButtonComponent } from "../components/ButtonComponent";
import { useState } from "react";

export const ScreenFive = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
  
    const onPressIgual = () => {
      const num1 = parseInt(numero1);
      const num2 = parseInt(numero2);
  
      let may, men;
      if (num1 >= num2) {
        may = num1;
        men = num2;
      } else if (num1 < num2) {
        may = num2;
        men = num1;
      } else {
        Alert.alert('Resultado', 'Los números son iguales');
        return;
      }
      Alert.alert('Resultado', 'El número mayor es ${may} y el número menor es ${men}');
    };
    return (
      <View>
        <Text style={{ fontSize: 45 }}>Formulario</Text>
        <TextInput
          onChangeText={setNumero1}
          value={numero1}
          placeholder="Num 1"
        />
        <TextInput
          onChangeText={setNumero2}
          value={numero2}
          placeholder="Num 2"
        />
        <ButtonComponent title="Obtener mayor o igual" onPress={onPressIgual} />
      </View>
    );
  };
  