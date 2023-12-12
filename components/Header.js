import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{height:50,width:"100%",backgroundColor:"orange"}}>
      <Text style={{textAlign:"center",marginTop:5,color:"white",fontSize:33}}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})