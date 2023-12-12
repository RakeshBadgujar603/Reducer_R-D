import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { ADD_TO_CART } from '../redux/constantes'
import { useDispatch } from 'react-redux'

const Product = (props) => {
    const item = props.item
    const dispatch=useDispatch

    const onPressAddToCart=()=>{
         dispatch(ADD_TO_CART(item))
    }
    return (
        <View style={{alignItems:"center",borderBottomWidth:2,borderColor:"red",paddingBottom:10}}>
            <Text>{item.name}</Text>
            <Text>{item.color}</Text>
            <Text>{item.price}</Text>
            <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: item.image }}
            />

            <View style={{ marginTop: 10 }}>
                <Button
                    title='Add to Cart'
                    onPress={onPressAddToCart}
                />
            </View>

        </View>
    )
}

export default Product

const styles = StyleSheet.create({})