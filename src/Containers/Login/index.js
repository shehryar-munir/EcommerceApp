import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AuthenticationWithGoogle from '@/Components/AuthenticationWithGoogle'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

const Login = () => {
  const [user, setUser] = useState(null)

  GoogleSignin.configure({
    webClientId:
      '818389047636-1tjjnsa5h25tg20vm36e11e3jlebjorp.apps.googleusercontent.com',
  })

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    // Get the users ID token
    const userInfo = await GoogleSignin.signIn()

    setUser(userInfo)

    console.log(userInfo)

    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential)
  }

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      >
        <AuthenticationWithGoogle />
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
