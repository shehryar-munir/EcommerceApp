import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const SplashScreen = ({ navigation }) => {
  const handleGetStartedClick = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.splashScreenImageContainerStyle}>
        <Image
          style={styles.splashScreenImageStyle}
          source={require('@/Assets/Images/splashsreen_shoes.png')}
        />
      </View>

      <View>
        <View style={styles.shoesHubViewStyle}>
          <Text style={styles.shoesTextStyle}>Shoes</Text>
          <Text style={styles.hubTextStyle}>Hub</Text>
        </View>

        <View style={styles.pickUpLineViewStyle}>
          <Text style={styles.pickUpLineTextStyle}>
            Style that walks with you,
          </Text>
          <Text style={styles.pickUpLineTextStyle}>
            Comfort that carries you,
          </Text>
          <Text style={styles.pickUpLineTextStyle}>Shoes for every step.</Text>
        </View>

        <TouchableOpacity onPress={handleGetStartedClick}>
          <View style={styles.getStartedViewStyle}>
            <Text style={styles.getStartedTextStyle}>Get Started</Text>
            <Image
              style={styles.getStartedNextIconStyle}
              source={require('@/Assets/Images/white_arrow_right.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    paddingBottom: 100,
  },
  shoesTextStyle: {
    color: 'grey',
    fontSize: 50,
    fontWeight: 'bold',
  },
  hubTextStyle: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  shoesHubViewStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  pickUpLineTextStyle: {
    color: 'grey',
    fontSize: 18,
    lineHeight: 25,
  },
  pickUpLineViewStyle: {
    width: '70%',
    marginTop: 10,
  },
  getStartedViewStyle: {
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
  },
  getStartedTextStyle: {
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: '5%',
    marginLeft: '7%',
    fontWeight: 'bold',
  },
  getStartedNextIconStyle: {
    height: 25,
    width: 25,
    marginTop: '3%',
    marginRight: '7%',
  },
  splashScreenImageStyle: {
    height: '60%',
    width: '100%',
  },
  splashScreenImageContainerStyle: {
    justifyContent: 'center',
  },
})
