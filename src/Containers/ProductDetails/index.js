import React, { useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import Tag from '@/Components/Tag'
import * as navigation from '@/Navigators/Root'
import { useDispatch, useSelector } from 'react-redux'
import AddProductToCart from '@/Store/Cart/AddProductToCart'

const ProductDetails = ({ route: { params } }) => {
  const {
    productID,
    productName,
    productDescription,
    productPrice,
    productImageUrl,
    availableSizes,
  } = params
  const tags = ['Women', 'Highly Rated', '5 Pairs Left']

  const dispatch = useDispatch()
  const handleAddToCartPress = () => {
    const product = {
      productID,
      productName,
      productDescription,
      productPrice,
      productImageUrl,
      availableSizes,
      qty: 1,
    }
    dispatch(AddProductToCart.action({ product }))
  }
  const goBack = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.productImageViewStyle}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <View>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('@/Assets/Images/white_back_arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{ uri: productImageUrl }}
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
              {availableSizes.map((item, index) => {
                return (
                  <View style={{ marginLeft: 7 }} key={index}>
                    <Tag tagText={item} />
                  </View>
                )
              })}
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
  header: {
    flexDirection: 'row',
    padding: 5,
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
