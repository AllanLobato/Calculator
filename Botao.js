import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Botao(props) {
  return (
    <View
      style={{
        backgroundColor: 'black',
        borderColor: '#363636',
        borderWidth: 1,
        width: '25%',
        height: '15%',
      }}>
      <TouchableOpacity
        onPress={() => props.logicaCalculadora(props.numero)}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>{props.numero}</Text>
      </TouchableOpacity>
    </View>
  );
}
