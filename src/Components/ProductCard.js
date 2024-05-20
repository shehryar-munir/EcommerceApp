import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as navigation from '@/Navigators/Root'

const ProductCard = ({ prodcutName, productPrice, productImage }) => {
  const handlePress = () => {
    console.log(
      'Sending data ' + 'prodcutName, productPrice, productImage',
      prodcutName,
      productPrice,
      productImage,
    )

    navigation.navigate('ProductDetails', {
      productName: prodcutName, // corrected from "prodcutName" to "productName"
      productDescription: 'Hello world',
      productPrice: productPrice, // corrected from "productPrice" to "productPrice"
      productImage: productImage, // corrected from "productImage" to "productImage"
    })
  }

  useEffect(() => {
    console.log(
      'prodcutName, productPrice, productImage',
      prodcutName,
      productPrice,
      productImage,
    )
  }, [])

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.productImageContainer}>
          <Image source={productImage} style={styles.productImageStyle} />
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
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    margin: 20,
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
