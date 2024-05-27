import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import SalesVew from '@/Components/SalesView'
import Header from '@/Components/Header'
import Brands from '@/Components/Brands'
import ProductCard from '@/Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import FetchAllProducts from '@/Store/Products/FetchAllProducts'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const originalProducts = useSelector(state => state.products.products)
  const [products, setProducts] = useState(originalProducts)

  // filtering products on the basis of text in search bar
  const handleTextChange = text => {
    const currentProducts = originalProducts
    const filteredProducts = currentProducts.filter(product => {
      return product.productName.toLowerCase().includes(text.toLowerCase())
    })
    setProducts(filteredProducts)
  }

  const addFilter = brandFilter => {
    const currentProducts = originalProducts

    const filteredProducts = currentProducts.filter(product => {
      return product.productBrand === brandFilter
    })
    setProducts(filteredProducts)
  }

  useEffect(() => {
    async function fetchData() {
      await dispatch(FetchAllProducts.action())
    }
    fetchData()
    setTimeout(() => {
      setProducts(originalProducts)
    }, 2000)
  }, [dispatch, originalProducts])

  return (
    <View style={styles.container}>
      <Header handleTextChange={handleTextChange} />
      <Brands addFilter={addFilter} />
      <SalesVew />
      <ScrollView>
        <View style={styles.productsContainer}>
          {products.map(product => {
            return (
              <ProductCard
                key={product.productID}
                productID={product.productID}
                productPrice={product.productPrice}
                productImageUrl={product.productImageUrl}
                prodcutName={product.productName}
                productDescription={product.productDescription}
                availableSizes={product.availableSizes}
              />
            )
          })}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})
