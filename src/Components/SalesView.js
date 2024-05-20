import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import Button from '@/Components/Button'

const SalesVew = () => {
  return (
    <View style={styles.saleViewStyle}>
      <View style={styles.saleViewTextViewStyle}>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: '5%',
            marginLeft: '5%',
            fontSize: 20,
            color: '#272829',
          }}
        >
          Year-End Sale
        </Text>
        <Text style={{ marginLeft: '5%', marginTop: '1%', color: '#272829' }}>
          Get upto 90% off
        </Text>
        <Button text={'Shop Now'} />
      </View>

      <View style={styles.runningManViewStyle}>
        <Image
          style={styles.runningManImageStyle}
          source={require('@/Assets/Images/running_man.png')}
        />
      </View>
    </View>
  )
}

export default SalesVew

const styles = StyleSheet.create({
  saleViewStyle: {
    borderRadius: 40,
    margin: '5%',
    backgroundColor: '#61677A',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },

  saleViewTextViewStyle: {
    margin: '3%',
    marginTop: '5%',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  runningManImageStyle: {
    height: 200,
    width: 200,
  },
  runningManViewStyle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
