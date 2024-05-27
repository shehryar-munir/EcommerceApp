import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native'
import CartItem from '@/Components/CartItem'
import * as navigation from '@/Navigators/Root'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)

  const goBack = () => {
    navigation.navigate('Home')
  }
  const cart = useSelector(state => state.cart.cart)
  useEffect(() => {
    let total = 0
    cart.forEach(item => {
      total += Number(item.productPrice.split('$')[1]) * item.qty
    })
    setTotalPrice(total)
  }, [cart])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <View>
            <Image
              style={{ height: 40, width: 40 }}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADt7e3w8PBGRkY9PT1NTU3y8vJJSUnr6+tCQkJQUFBAQEBLS0tHR0dSUlLExMTd3d2vr6+YmJjMzMxeXl6Dg4MmJiYYGBgbGxsODg6MjIx0dHRZWVnj4+PT09Mx0NsjAAADTElEQVR4nO2d7VbiQBBEM5ElgGAQEFhZ9f3f0o9dXTHFv8npw62+T9B1pirdMxNC0yRJkiRJkiRJ4k2322zWN9FVjEe3PZQ3jvt5dCUj0c7KP4676FpGoV2UL37fR1czAu2kfOMhupz6tL/KGevogmrzU2DZR1dUmXOLvtNHl1SXocCyiq6pKgOL0h417XIosGyjq6qIsGgpj6CG+L3R/+cUXVY9VAZLmXbRdVVDr+Cyja6rGjKDZcnZW8ylRe9AKygFLkACpUUXHItqgROQQGnRGciialTjtwlSBuUK4tsESaC2KF4gJ4N6VJtxzvJ1Bid0i5IEyv0g6SmKH9XkCvLbBEigHNVIFsVnEN8m8AKlRVf4UQ0kEG9R2ehJT1F8BuUKkixKz6De0U9BFsUfWUiLkp6ieIH4DMr9IH5UIx06yUZPsig+g/opShcIyuCFUQ30KleOalfOhTYBEohvE/pMBiQQn0E5bN+CVhCfQWlR0rGhFgjKoLToLX1UW4EE4i3quaMnZVCuYLaJ60FbtAdZFH9kIS1KeoriBeIzKPeD+FGNZFHZ6HuQQHwG8cM2PYP68oVkUfx2SVqUdC4qBWabuB4utAmQQHwG5bBNsig9g91UWpQjsPkDz2DzArdo05zgFm2aJ7GCIIu+MRsIPDxH11QX/hryc8h/lvL7YXNzJyWSVhE/lxrsLQz2hwZ7fI8s0s/aPLJIP/M2uLcwuHsyuD/0aBr0e3yPLNLfp/HIooFRDSTS3y81ziLoPW+Dd/UtNlMOY7hBFum/XfPIooFR6b8DNvgtt8Hv8Q2+qWDwXQyPLNK/T+ORRfp3ogy+9WXwvTaDb+45Nw2URIMs0r9B65FFg+nGQKLtAEeSiP9vhNz1M7Ad4ByaBmpLnNc2APLahoDttQ0ri/q9G9QT1eAFMdcBjiWRf6eRv7Yh4CDRwKiuP5dmGVWuIqppOGTR4LfEBhL5RrUd4FhGlftF1jmqNOpDdFk10at4ii6rJjKLj/fRZdVEDnDb6KqqorKISqI06iq6psoMJfbRJdVmYNR9dEXV+SlxHV1Qfc6NCnvQ/OWs9b9EVzMKbf+p7wj06Afd9vChbz+PrmQ8ut1msybdmCZJkiRJkiQJmFfv7iMu226OeQAAAABJRU5ErkJggg==',
              }}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: '35%',
            alignSelf: 'center',
            fontSize: 20,
          }}
        >
          Cart
        </Text>
      </View>
      <ScrollView>
        {cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              productId={item.productID}
              productBrand={item.productBrand}
              productImageUrl={item.productImageUrl}
              productName={item.productName}
              productPrice={item.productPrice}
              qty={item.qty}
            />
          )
        })}
      </ScrollView>
      <View style={styles.totalPaymentView}>
        <Text
          style={{
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
            color: '#61677A',
          }}
        >
          Total Price: ${totalPrice}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.checkoutBtnStyle}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              Checkout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 5,
  },
  totalPaymentView: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutBtnStyle: {
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    // width:200,
  },
})
