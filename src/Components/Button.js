import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Button = ({ text }) => {
  return (
    <View style={styles.buttonStyles}>
      <Text style={{ color: '#FFF6E0' }}>{text}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: '#272829',
    width: 100,
    marginLeft: '5%',
    marginTop: '3%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
})
