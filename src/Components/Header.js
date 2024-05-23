import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import SearchBar from '@/Components/SearchBar'
import * as navigation from '@/Navigators/Root'

const Header = ({ handleTextChange, cart }) => {
  const goBack = () => {
    navigation.navigate('SplashScreen')
  }

  const goToCart = () => {
    navigation.navigate('Cart', { cart })
  }

  return (
    <View style={styles.headerViewStyle}>
      <TouchableOpacity onPress={goBack}>
        <View>
          <Image
            style={styles.blackBackArrowStyle}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADt7e3w8PBGRkY9PT1NTU3y8vJJSUnr6+tCQkJQUFBAQEBLS0tHR0dSUlLExMTd3d2vr6+YmJjMzMxeXl6Dg4MmJiYYGBgbGxsODg6MjIx0dHRZWVnj4+PT09Mx0NsjAAADTElEQVR4nO2d7VbiQBBEM5ElgGAQEFhZ9f3f0o9dXTHFv8npw62+T9B1pirdMxNC0yRJkiRJkiRJ4k2322zWN9FVjEe3PZQ3jvt5dCUj0c7KP4676FpGoV2UL37fR1czAu2kfOMhupz6tL/KGevogmrzU2DZR1dUmXOLvtNHl1SXocCyiq6pKgOL0h417XIosGyjq6qIsGgpj6CG+L3R/+cUXVY9VAZLmXbRdVVDr+Cyja6rGjKDZcnZW8ylRe9AKygFLkACpUUXHItqgROQQGnRGciialTjtwlSBuUK4tsESaC2KF4gJ4N6VJtxzvJ1Bid0i5IEyv0g6SmKH9XkCvLbBEigHNVIFsVnEN8m8AKlRVf4UQ0kEG9R2ehJT1F8BuUKkixKz6De0U9BFsUfWUiLkp6ieIH4DMr9IH5UIx06yUZPsig+g/opShcIyuCFUQ30KleOalfOhTYBEohvE/pMBiQQn0E5bN+CVhCfQWlR0rGhFgjKoLToLX1UW4EE4i3quaMnZVCuYLaJ60FbtAdZFH9kIS1KeoriBeIzKPeD+FGNZFHZ6HuQQHwG8cM2PYP68oVkUfx2SVqUdC4qBWabuB4utAmQQHwG5bBNsig9g91UWpQjsPkDz2DzArdo05zgFm2aJ7GCIIu+MRsIPDxH11QX/hryc8h/lvL7YXNzJyWSVhE/lxrsLQz2hwZ7fI8s0s/aPLJIP/M2uLcwuHsyuD/0aBr0e3yPLNLfp/HIooFRDSTS3y81ziLoPW+Dd/UtNlMOY7hBFum/XfPIooFR6b8DNvgtt8Hv8Q2+qWDwXQyPLNK/T+ORRfp3ogy+9WXwvTaDb+45Nw2URIMs0r9B65FFg+nGQKLtAEeSiP9vhNz1M7Ad4ByaBmpLnNc2APLahoDttQ0ri/q9G9QT1eAFMdcBjiWRf6eRv7Yh4CDRwKiuP5dmGVWuIqppOGTR4LfEBhL5RrUd4FhGlftF1jmqNOpDdFk10at4ii6rJjKLj/fRZdVEDnDb6KqqorKISqI06iq6psoMJfbRJdVmYNR9dEXV+SlxHV1Qfc6NCnvQ/OWs9b9EVzMKbf+p7wj06Afd9vChbz+PrmQ8ut1msybdmCZJkiRJkiQJmFfv7iMu226OeQAAAABJRU5ErkJggg==',
            }}
          />
        </View>
      </TouchableOpacity>

      <SearchBar
        navigation={navigation}
        placeholderText={'Search by brand,type, etc...'}
        handleTextChange={handleTextChange}
      />

      <TouchableOpacity onPress={goToCart}>
        <View style={styles.profileImageViewStyle}>
          <Image
            style={styles.profileImageStyle}
            source={{
              uri:
                'data:image/png;base64,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',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  blackBackArrowStyle: {
    height: 40,
    width: 40,
    marginTop: '10%',
    marginRight: 10,
  },

  headerViewStyle: {
    display: 'flex',
    flexDirection: 'row',
  },

  profileImageViewStyle: {
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
    padding: 2,
    borderColor: '#272829',
  },

  profileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
})
