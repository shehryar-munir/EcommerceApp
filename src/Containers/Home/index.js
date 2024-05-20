import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import SalesVew from '@/Components/SalesView'
import Header from '@/Components/Header'
import Brands from '@/Components/Brands'
import ProductCard from '@/Components/ProductCard'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Brands />
      <SalesVew />

      <ScrollView>
        <View style={styles.productsContainer}>
          <ProductCard
            prodcutName={'Nike 1 Elevate Low'}
            productImage={require('@/Assets/Images/splashsreen_shoes.png')}
            productPrice={'$133.87'}
          />

          <ProductCard
            prodcutName={'Nike 1 Elevate Low'}
            productImage={require('@/Assets/Images/splashsreen_shoes.png')}
            productPrice={'$133.87'}
          />

          <ProductCard
            prodcutName={'Nike 1 Elevate Low'}
            productImage={require('@/Assets/Images/splashsreen_shoes.png')}
            productPrice={'$133.87'}
          />

          <ProductCard
            prodcutName={'Nike 1 Elevate Low'}
            productImage={require('@/Assets/Images/splashsreen_shoes.png')}
            productPrice={'$133.87'}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})
