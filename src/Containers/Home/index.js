import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import SalesVew from '@/Components/SalesView'
import Header from '@/Components/Header'
import Brands from '@/Components/Brands'
import ProductCard from '@/Components/ProductCard'
import database from '@react-native-firebase/database'
import firebase from '@react-native-firebase/app'

const productsInfo = [
  {
    productID: '1',
    productName: 'Nike Air Max 90',
    productDescription:
      'The Nike Air Max 90 is a classic sneaker that combines style and comfort.',
    productBrand: 'Nike',
    productPrice: '$100',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452803/splashsreen_shoes_assrvp.png',
  },
  {
    productID: '2',
    productName: 'Adidas Ultraboost',
    productDescription:
      'The Adidas Ultraboost is known for its responsive cushioning and sleek design.',
    productBrand: 'Adidas',
    productPrice: '$120',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452802/shoes6_ytohsh.png',
  },
  {
    productID: '3',
    productName: 'Lama 990',
    productDescription:
      'The Lama 990 offers a perfect blend of cushioning and stability.',
    productBrand: 'Lama',
    productPrice: '$130',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452802/shoes4_nvdlm9.png',
  },
  {
    productID: '4',
    productName: 'Outfitters RS-X',
    productDescription:
      'The Outfitters RS-X is a retro-inspired sneaker with modern features.',
    productBrand: 'Outfitters',
    productPrice: '$90',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452802/shoes4_nvdlm9.png',
  },
  {
    productID: '5',
    productName: 'Vans Old Skool',
    productDescription:
      'The Vans Old Skool is a timeless classic loved by skaters and streetwear enthusiasts alike.',
    productBrand: 'Vans',
    productPrice: '$70',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452800/shoes5_od1n8b.png',
  },
  {
    productID: '6',
    productName: 'Vans Chuck Taylor All Star',
    productDescription:
      'The Vans Chuck Taylor All Star is an iconic sneaker known for its simple yet stylish design.',
    productBrand: 'Vans',
    productPrice: '$55',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452800/shoes3_d5jlnw.png',
  },
  {
    productID: '7',
    productName: 'Adidas Classic Leather',
    productDescription:
      'The Adidas Classic Leather offers a timeless look and comfortable feel.',
    productBrand: 'Adidas',
    productPrice: '$80',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452800/shoes2_rpsert.png',
  },
  {
    productID: '8',
    productName: 'Nike HOVR Phantom',
    productDescription:
      'The Nike HOVR Phantom provides a perfect combination of cushioning and energy return.',
    productBrand: 'Nike',
    productPrice: '$110',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452799/shoes1_pdsmec.png',
  },
  {
    productID: '9',
    productName: 'Adidas Gel-Kayano 27',
    productDescription:
      'The Adidas Gel-Kayano 27 offers stability and support for long-distance runners.',
    productBrand: 'Adidas',
    productPrice: '$150',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452802/shoes6_ytohsh.png',
  },
  {
    productID: '10',
    productName: 'Outfitters Jazz Original',
    productDescription:
      'The Outfitters Jazz Original is a retro sneaker with a classic look and feel.',
    productBrand: 'Outfitters',
    productPrice: '$75',
    availableSizes: ['UK-6', 'UK-7', 'UK-8', 'UK-9', 'UK-10'],
    productImageUrl:
      'https://res.cloudinary.com/dlgfqfcqj/image/upload/v1716452800/shoes3_d5jlnw.png',
  },
]



const Home = ({ navigation }) => {
  const [products, setProducts] = useState([])
  const [originalProducts, setOriginalProducts] = useState([])

  const [cart, setCart] = useState([])

  const addToCart = product => {
    let currentCart = cart
    currentCart.push(product)
    setCart(currentCart)
  }

  // filtering products on the basis of text in search bar
  const handleTextChange = text => {
    const currentProducts = originalProducts
    const filteredProducts = currentProducts.filter(product => {
      return product.productName.toLowerCase().includes(text.toLowerCase())
    })
    setProducts(filteredProducts)
  }

  const uploadProductsToFirebase = async () => {
    const reference = database(firebase.app('EcommerceApp')).ref('products')

    productsInfo.map(async item => {
      await reference.push(item)
    })
  }

  const firebaseDb = async () => {

    if (!firebase.apps.length) {
      const config = {
        clientId:
          '818389047636-1tjjnsa5h25tg20vm36e11e3jlebjorp.apps.googleusercontent.com',
        appId: '1:818389047636:ios:2103d5726fbd08136310c1',
        apiKey: 'AIzaSyC_WNulGytp5EydcvNXrX6iN9t58M0bhxs',
        databaseURL:
          'https://ecommerceapp-burakbinmunir-default-rtdb.firebaseio.com',
        storageBucket: 'ecommerceapp-burakbinmunir.appspot.com',
        messagingSenderId: '818389047636',
        projectId: 'ecommerceapp-burakbinmunir',
      }
      const r = await firebase.initializeApp(config, { name: 'EcommerceApp' })
      console.log('Response on app initialization: ', r)
    }
  }

  const addFilter = brandFilter => {
    const currentProducts = originalProducts

    const filteredProducts = currentProducts.filter(product => {

      return product.productBrand === brandFilter
    })
    setProducts(filteredProducts)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (!firebase.apps.length) {
        const config = {
          clientId:
            '818389047636-1tjjnsa5h25tg20vm36e11e3jlebjorp.apps.googleusercontent.com',
          appId: '1:818389047636:ios:2103d5726fbd08136310c1',
          apiKey: 'AIzaSyC_WNulGytp5EydcvNXrX6iN9t58M0bhxs',
          databaseURL:
            'https://ecommerceapp-burakbinmunir-default-rtdb.firebaseio.com',
          storageBucket: 'ecommerceapp-burakbinmunir.appspot.com',
          messagingSenderId: '818389047636',
          projectId: 'ecommerceapp-burakbinmunir',
        }
        const r = await firebase.initializeApp(config, { name: 'EcommerceApp' })
        console.log('Response on app initialization: ', r)
      }
      // if products is empty, fetch products from firebase
      if (originalProducts.length === 0) {
        const reference = database(firebase.app('EcommerceApp')).ref('products')
        reference.on('value', snapshot => {
          const fetchedProducts = []
          snapshot.forEach(childSnapshot => {
            const childData = childSnapshot.val()
            fetchedProducts.push(childData)
          })
          setOriginalProducts(fetchedProducts)
          setProducts(fetchedProducts)
        })
      }
    }
    fetchProducts()
  }, [originalProducts])

  return (
    <View style={styles.container}>
      <Header handleTextChange={handleTextChange} cart={cart} />
      <Brands addFilter={addFilter} />
      <SalesVew />
      <ScrollView>
        <View style={styles.productsContainer}>
          {products.map(product => {
            return (
              <ProductCard
                key={product.productID}
                productPrice={product.productPrice}
                productImageUrl={product.productImageUrl}
                prodcutName={product.productName}
                productDescription={product.productDescription}
                availableSizes={product.availableSizes}
                addToCart={() => {
                  addToCart(product)
                }}
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
