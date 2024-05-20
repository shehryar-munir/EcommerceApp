import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native'
import SearchBar from '@/Components/SearchBar'
import * as navigation from '@/Navigators/Root'

const Header = () => {
  const goBack = () => {
    navigation.navigate('SplashScreen')
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
      />

      <View style={styles.profileImageViewStyle}>
        <Image
          style={styles.profileImageStyle}
          source={require('@/Assets/Images/placeholderprofilepic.png')}
        />
      </View>
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
