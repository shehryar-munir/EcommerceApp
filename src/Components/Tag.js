import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Tag = ({ tagText }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#61677A', fontWeight: 'bold' }}>{tagText}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#61677A',
    padding: 10,
  },
})
