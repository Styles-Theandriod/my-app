import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
const ourImage = require('./Group3.png')
const Splashscreen = () => {
  return (
    <View style={styles.buttonContainer}>
      <Image source={ourImage}  style={styles.image}/>
      <TouchableOpacity style={styles.Button}>
        <Text>Lets Go</Text>
      </TouchableOpacity>

      
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    image:{
        height: '100%',
        width: 100,
    },
    Button:{
        borderRadius:10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonContainer:{
        width: 320,
        height:68,
        padding:3,
        justifyContent:'center',
        alignItems: 'center',
        marginHorizontal:20
    }
})