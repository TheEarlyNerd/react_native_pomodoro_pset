import React from 'react'
import { View, StyleSheet } from 'react-native'

function Card({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View >
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 15
  }
})

export default Card
