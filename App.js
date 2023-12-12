import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {

  const products = [
    {
      name: "samsung mobile",
      color: "white",
      price: 30000,
      image: "https://tse3.mm.bing.net/th?id=OIP.MGIvi9pCYV5dFslbTFmxcwHaLu&pid=Api&P=0&h=180"
    },

    {
      name: "Apple mobile",
      color: "green",
      price: 80000,
      image: "https://tse3.mm.bing.net/th?id=OIP.MGIvi9pCYV5dFslbTFmxcwHaLu&pid=Api&P=0&h=180"
    },

    {
      name: "Vivo mobile",
      color: "Black",
      price: 20000,
      image: "https://tse3.mm.bing.net/th?id=OIP.MGIvi9pCYV5dFslbTFmxcwHaLu&pid=Api&P=0&h=180"
    }
  ]

  return (
    <View>

      <Header />
      <ScrollView>
        {products.map((item) =><Product item={item} />)}
      </ScrollView>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})