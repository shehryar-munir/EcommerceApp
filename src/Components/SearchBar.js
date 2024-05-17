import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'

const SearchBar = ({ navigation, placeholderText }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchIconImageStyle}
        source={require('@/Assets/Images/searchicon.png')}
      />
      <TextInput
        style={styles.searchBarTextInputStyle}
        placeholder={placeholderText}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    width: '70%',
    borderColor: '#272829',
  },
  searchBarTextInputStyle: {
    color: '#272829',
    marginLeft: 10,
  },

  searchIconImageStyle: {
    height: 25,
    width: 25,
    marginLeft: 5,
  },
})
