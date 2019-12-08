import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PrimaryTextBordered = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 0,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerText: {
    color: 'blue',
    fontSize: 22,
  }
})

export default PrimaryTextBordered
