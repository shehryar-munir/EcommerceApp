import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import Tag from '@/Components/Tag'
import * as navigation from '@/Navigators/Root'

const ProductDetails = ({ route: { params } }) => {
  const { productName, productDescription, productPrice, productImage } = params
  const tags = ['Women', 'Highly Rated', '5 Pairs Left']
  const shoeSizes = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10']

  const handleAddToCartPress = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={styles.container}>
      <View style={styles.productImageViewStyle}>
        <ImageBackground
          source={productImage}
          resizeMode="cover"
          style={styles.productImageStyle}
        />
      </View>

      <View style={styles.actionSheetViewStyle}>
        <ScrollView>
          <View style={styles.productInformationViewStyle}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ fontWeight: 'bold', fontSize: 20, color: '#272829' }}
              >
                {productName}
              </Text>
              <Tag tagText={productPrice} />
            </View>
            <View style={{ marginTop: 10, padding: 10 }}>
              <Text style={{ color: '#61677A' }}>{productDescription}</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {tags.map((item, index) => (
                <View key={index} style={{ marginLeft: 20 }}>
                  <Tag tagText={item} />
                </View>
              ))}
            </View>
          </View>

          <View style={styles.productInformationViewStyle}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 18, color: '#272829' }}
            >
              Select Size
            </Text>
            <View
              style={{
                marginTop: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {shoeSizes.map(item => (
                <View style={{ marginLeft: 7 }}>
                  <Tag tagText={item} />
                </View>
              ))}
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={handleAddToCartPress}>
              <View style={{ margin: 10 }}>
                <Tag tagText={'Add to Cart'} />
              </View>
            </TouchableOpacity>
            <View style={{ margin: 10 }}>
              <Tag tagText={'Buy Now'} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272829',
  },

  productImageViewStyle: {
    flex: 0.5,
  },

  productImageStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  productInformationViewStyle: {
    borderRadius: 50,
    padding: 20,
    margin: 10,
    backgroundColor: '#D8D9DA',
  },

  actionSheetViewStyle: {
    flex: 0.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
})
