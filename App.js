import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const App = () => {
  console.disableYellowBox = true;

  const [darkMode, setDarkMode] = useState(false);
  const buttons = [
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

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    const splitNumbers = currentNumber.split(' ');
    const fistNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString());
        return;
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString());
        return;
      case '*':
        setCurrentNumber((fistNumber * lastNumber).toString());
        return;
      case '/':
        setCurrentNumber((fistNumber / lastNumber).toString());
        return;
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === '+') |
      (buttonPressed === '-') |
      (buttonPressed === '*') |
      (buttonPressed === '/')
    ) {
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ');
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'AC':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber + ' = ');
        calculator();
        return;
      case '+/-':
        return;
    }

    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Icon
            name={darkMode ? 'light-up' : 'moon'}
            size={24}
            color={darkMode ? 'white' : 'black'}
            onPress={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
          />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map(button =>
          button === '=' ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[styles.button, {backgroundColor: '#9DBC7B'}]}>
              <Text style={[styles.textButton, {color: 'white', fontSize: 30}]}>
                {button}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              key={button}
              style={[
                styles.button,
                {
                  backgroundColor:
                    typeof button === 'number'
                      ? darkMode === true
                        ? '#303946'
                        : '#fff'
                      : darkMode === true
                      ? '#414853'
                      : '#ededed',
                },
              ]}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
          ),
        )}
        ,
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
    width: '100%',
    minHeight: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    color: darkMode ? '#f5f5f5' : '#282F38',
    margin: 10,
    fontSize: 40,
  },

  historyText: {
    color: darkMode ? '#B5B7BB' : '#7c7c7c',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  themeButton: {
    alignSelf: 'flex-start',
    bottom: 120,
    margin: 10,
    backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: darkMode ? '#b5b7bb' : '#7c7c7c',
    fontSize: 20,
  },
});

export default App;

/*
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
/*
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

    if ((n == '/' || n == 'X' || n == '+' || n == '-') && secondNumber == 0) {
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
    <View style={{flex: 1, backgroundColor: '#121212', alignItems: 'flex-end'}}>
      <Text style={{fontSize: 24, color: '#fff'}}>{stringCalculo}</Text>
      <Icon name="light-up" size={24} color="white" />
      <View
        style={{
          display: 'flex',
          height: '36%',
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

export default App;*/
