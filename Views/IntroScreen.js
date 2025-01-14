import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import logo from '../assets/logo.png'

const IntroScreen = () => {

  return (
    <View style={styles.container}>
          <View style={styles.inner}>
              <Image source={logo} style={styles.innerImg} />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5757'
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    innerImg: {
        width: "60%",
        borderRadius: 20
    }
})

export default IntroScreen