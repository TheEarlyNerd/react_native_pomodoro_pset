import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, TouchableOpacity, Text, StyleSheet, Keyboard, Alert, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native'

import PrimaryButton from '../Widgets/PrimaryButton'

import Card from '../Templates/Card'
import MainInput from '../Templates/MainInput'
import PrimaryTextBordered from '../Templates/PrimaryTextBordered'

function StartGameScreen({ onSubmitLength }) {
  const [enteredNum, setEnteredNum] = useState('')

  const numInputHandler = inputText => {
    setEnteredNum(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredNum('')
    Keyboard.dismiss()
  }

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredNum)
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        'Invalid number',
        'number has to be between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }

    onSubmitLength(chosenNum)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='position' keyboardVerticalOffset={60}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Text style={styles.header}>How long would you like your timer to be?</Text>
            <MainInput
              style={styles.input}
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='number-pad'
              maxLength={2}
              onChangeText={numInputHandler}
              value={enteredNum}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.btn} onPress={resetInputHandler}>
                <Text style={{ color: '#fff' }}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={confirmInputHandler}>
                <Text style={{ color: '#fff' }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 25,
    fontFamily: 'Futura-Medium',
    marginVertical: 12,
  },
  inputContainer: {
    marginTop: 4,
    width: 250,
    maxWidth: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4436ff',
    padding: 8,
    margin: 10,
    borderRadius: 4,
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  type: {
    fontSize: 18,
    marginBottom: 5
  }
})

export default StartGameScreen
