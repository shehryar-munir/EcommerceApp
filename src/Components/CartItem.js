import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

const CartItem = () => {
  return (
    <View style={styles.container}>
      <Text>This is Cart Item</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container:{
   borderWidth: 1,
  }
})
