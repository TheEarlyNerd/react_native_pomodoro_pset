import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const MainInput = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.style }} />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: '#ff11aa',
    borderBottomWidth: 3,
    marginVertical: 10,
  }
})

export default MainInput
