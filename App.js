import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Botao from './Botao';

const App = () => {
  console.disableYellowBox = true;

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState('');

  const [stringCalculo, setStringCalculo] = useState('0');

  const numeros = [
    'AC',
    'DEL',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    3,
    2,
    1,
    '+',
    0,
    '.',
    '+/-',
    '=',
  ];

  /*var numeros = [];
  for (var i = 0; i <= 9; i++) {
    numeros.push(i);
  }*/

  function clearAll() {
    setStringCalculo('0');
    setSinal(0);
    setFirstNumber(0);
    setSecondNumber(0);
  }

  function logicaCalculadora(n) {
    if (sinal == '') {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }

    if ((n == '/' || n == '*' || n == '+' || n == '-') && secondNumber == 0) {
      setStringCalculo(firstNumber.toString() + n);
      setSinal(n);
    }
    console.log(sinal);
    if (sinal != '') {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculo(
        firstNumber + sinal + parseInt(secondNumber.toString() + n.toString()),
      );
      console.log(n);

      if (n == '=') {
        let resultado = 0;
        if (sinal == '+') {
          resultado = firstNumber + secondNumber;
        } else if (sinal == '-') {
          resultado = firstNumber - secondNumber;
        } else if (sinal == '/') {
          resultado = firstNumber / secondNumber;
        } else if (sinal == 'X') {
          resultado = firstNumber * secondNumber;
        }
        setStringCalculo(resultado);
        setSinal('');
        setFirstNumber(resultado);
        setSecondNumber(0);
      }
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: '#121212'}}>
      <Text style={{fontSize: 24, color: '#fff'}}>{stringCalculo}</Text>

      <View
        style={{
          display: 'flex',
          height: '30%',
          alignItems: 'flex-end',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          borderTopColor: '##363636',
          borderTopWidth: 2,
          height: '78%',
        }}>
        {numeros.map(function (e) {
          return (
            <Botao
              style={{borderBottomColor: '#363636'}}
              logicaCalculadora={logicaCalculadora}
              numero={e}></Botao>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    borderBottomWidth: 2,
    backgroundColor: '#121212',
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default App;
