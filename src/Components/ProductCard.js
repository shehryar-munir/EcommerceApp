import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProductCard = ({ prodcutName, productPrice, productImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image
          source={productImage}
          style={styles.productImageStyle}
        />
      </View>
      <Text style={{ fontSize: 12, color: '#272829', marginTop: 10 }}>
        {prodcutName}
      </Text>

      <Text
        style={{
          fontSize: 12,
          color: '#272829',
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        {productPrice}
      </Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    width: '30%',
  },

  productImageStyle: {
    height: 100,
    width: 100,
  },

  productImageContainer: {
    backgroundColor: '#D8D9DA',
    borderRadius: 20,
    alignItems: 'center',
  },
})
