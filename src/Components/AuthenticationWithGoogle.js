import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const AuthenticationWithGoogle = () => {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={{
          uri:
            'data:image/png;base64,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',
        }}
        style={styles.imgStyle}
      />
      <Text style={styles.textStyle}>Sign up with Google</Text>
    </View>
  )
}

export default AuthenticationWithGoogle

const styles = StyleSheet.create({
  imgStyle: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    height: 70,
    margin: 10,
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  textStyle: {
    marginTop: '9%',
    color: 'white',
  },
})
