import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const PrimaryButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
})

export default PrimaryButton
