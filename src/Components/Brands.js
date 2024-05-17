import React from 'react'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native'

const brandsLogoImages = [
  {
    brandName: 'Addidas',
    brandLogoUri: require('@/Assets/Images/addidas.png'),
  },
  {
    brandName: 'Lama',
    brandLogoUri: require('@/Assets/Images/lama.png'),
  },
  {
    brandName: 'Nike',
    brandLogoUri: require('@/Assets/Images/nike.png'),
  },
  {
    brandName: 'Outfitters',
    brandLogoUri: require('@/Assets/Images/outfitters.png'),
  },
  {
    brandName: 'Vans',
    brandLogoUri: require('@/Assets/Images/vans.png'),
  },
]

const Brands = () => {
  return (
    <View style={styles.brandsFilterViewStyle}>
      <Text style={{ color: '#272829' }}>Brand</Text>

      <ScrollView style={styles.brandImagesStyle}>
        <View style={styles.brandImagesStyle}>
          {brandsLogoImages.map(item => (
            <View key={item.brandName} style={styles.brandImageViewStyle}>
              <Image
                style={styles.brandImageStyle}
                source={item.brandLogoUri}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Brands

const styles = StyleSheet.create({
  brandsFilterViewStyle: {
    margin: '5%',
  },
  brandImageStyle: {
    height: 50,
    width: 50,
  },

  brandImagesStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  brandImageViewStyle: {
    borderRadius: 50,
    padding: 10,
    margin: 10,
    backgroundColor: '#D8D9DA',
  },
})
