import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable  } from 'react-native';

export default function App() {
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('Value');

  const addFunctionHandler = () => {
    const value1 = parseInt(inputValueOne);
    const value2 = parseInt(inputValueTwo);

    const sum = value1 + value2;
    setFinalAnswer(sum);
  }

  const subFunctionHandler = () => {
    const value1 = parseFloat(inputValueOne);
    const value2 = parseFloat(inputValueTwo);

    const final = value1 - value2;
    setFinalAnswer(parseFloat(final));
  }

  const divideFunctionHandler = () => {
    const value1 = parseFloat(inputValueOne);
    const value2 = parseFloat(inputValueTwo);

    const final = value1 / 
     value2;
    setFinalAnswer(final);
  }

  const multiplyFunctionHandler = () => {
    const value1 = parseFloat(inputValueOne);
    const value2 = parseFloat(inputValueTwo);

    const final = value1 * value2;
    setFinalAnswer(final);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput keyboardType="numeric" style={styles.inputOne} onChangeText={(text) => setInputValueOne(text)} value={inputValueOne} />
        <TextInput keyboardType="numeric" style={styles.inputTwo} onChangeText={(text) => setInputValueTwo(text)} value={inputValueTwo} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPressIn={addFunctionHandler} style={styles.button}><Text style={{color: 'white'}}>Add</Text></Pressable>
        <Pressable onPressIn={subFunctionHandler} style={styles.button}><Text style={{color: 'white'}}>Sub</Text></Pressable>
        <Pressable onPressIn={divideFunctionHandler} style={styles.button}><Text style={{color: 'white'}}>Divide</Text></Pressable>
        <Pressable onPressIn={multiplyFunctionHandler} style={styles.button}><Text style={{color: 'white'}}>Multiply</Text></Pressable>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answer}>The Answers is: </Text>
        <Text style={styles.answer}>{finalAnswer}</Text> 
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D0F0E3',
    flex: 1
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: "10px",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  inputOne: {
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
    padding: 20, 
    
  },
  inputTwo: {
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
    padding: 20, 
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'

  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    width: '40%',
    color: 'white',
    backgroundColor: '#242B2E'
  },
  answerContainer:{
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  answer: {
    fontSize: 20
  }

});
