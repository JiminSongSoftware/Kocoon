import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { max } from 'react-native-reanimated'

export default function Wave() {
  return [
    <Image source={require('../assets/wave1.png')} style={styles.image} />,
    <Image source={require('../assets/wave2.png')} style={styles.image1} />,
    <Image source={require('../assets/wave3.png')} style={styles.image2} />,
    <Image source={require('../assets/wave4.png')} style={styles.image3} />,
    //create a new component that will render an image
    //pass in the source of the image as a prop
  ]
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 375,
    height: 231,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    //remove empty space on left
    marginLeft: -20,
    //remove margin from left and right
  },
  image1: {
    resizeMode: 'contain',
    width: 375,
    height: 151.2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    marginLeft: -20,
  },
  image2: {
    resizeMode: 'contain',
    width: 246,
    height: 222,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    marginLeft: -20,
  },
  image3: {
    resizeMode: 'contain',
    width: 375,
    height: 270,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    marginLeft: -20,
  },
})
