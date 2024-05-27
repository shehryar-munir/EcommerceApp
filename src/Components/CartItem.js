import React, { useEffect, useState } from 'react'
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import UpdateProductQty from '@/Store/Cart/UpdateProductQty'

const CartItem = ({
  productId,
  productName,
  productImageUrl,
  productBrand,
  productPrice,
  qty,
}) => {
  const [quantity, setQuantity] = useState(qty)
  const dispatch = useDispatch()
  const increaseQty = () => {
    dispatch(UpdateProductQty.action({ productId: productId, qty: 1 }))
  }

  const decreaseQty = () => {
    if (quantity === 0) {
      setQuantity(0)
      return
    } else {
      dispatch(UpdateProductQty.action({ productId: productId, qty: -1 }))
    }
  }

  useEffect(() => {
    setQuantity(qty)
  }, [qty])

  return (
    <View style={styles.container}>
      <View style={styles.productImageViewStyle}>
        <Image
          source={{ uri: productImageUrl }}
          style={styles.productImageStyle}
        />
      </View>
      <View style={styles.productInformtionViewStyle}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 18,
            color: '#272829',
          }}
        >
          {productName}
        </Text>
        <Text style={{ marginTop: 10, color: '#272829' }}>{productBrand}</Text>
        <View
          style={{
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 0.3, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#61677A' }}>
              {productPrice}
            </Text>
          </View>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity onPress={decreaseQty}>
              <View style={styles.minusSignImageViewStyle}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require('@/Assets/Images/black_minus_sign.png')}
                />
              </View>
            </TouchableOpacity>
            <TextInput
              value={quantity.toString()}
              onChangeText={setQuantity}
              style={styles.quantityTextInputStyle}
            />
            <TouchableOpacity onPress={increaseQty}>
              <View style={styles.plusSignImageViewStyle}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={require('@/Assets/Images/white_plus_sign.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    margin: 20,
  },

  productImageViewStyle: {
    flex: 0.3,
    backgroundColor: '#D8D9DA',
    borderRadius: 10,
  },
  productImageStyle: {
    height: 100,
    width: 100,
  },

  productInformtionViewStyle: {
    flex: 0.7,
    marginLeft: 20,
  },

  quantityTextInputStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  plusSignImageViewStyle: {
    backgroundColor: '#61677A',
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  minusSignImageViewStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
})
