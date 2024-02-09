import { Alert, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";

export const ScreenFour = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  const onPressIgual = () => {
    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);
    let menorIgual, mayorIgual;
    if (num1 <= num2) {
      menorIgual = num1;
      mayorIgual = num2;
    } else {
      menorIgual = num2;
      mayorIgual = num1;
    }

    Alert.alert('Resultado', 'El número menor es ${menorIgual} y el número mayor es ${mayorIgual}');
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
      <ButtonComponent title="Obtener menor o igual" onPress={onPressIgual} />
    </View>
  );
};
