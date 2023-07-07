import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imagenCarrito from '../assets/categorias/menu.png'
import Trash from 'react-native-vector-icons/EvilIcons'
import BtnCantidad from './BtnCantidad'

const ItemCarrito = () => {
  return (
        <View style={styles.cartContainer}>
            <View style={styles.itemCart}>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Image source={imagenCarrito} style={styles.imgItem}/>
                    <View style={{maxWidth: 120}}>
                        <Text style={{fontSize: 12}}>Fetuccini al Pesto</Text>
                        <Text style={{fontSize: 12}}>S./ 20.00</Text>
                    </View>
                </View>
                <BtnCantidad />
                <TouchableOpacity>
                    <Trash name="trash" size={25} color="red"/>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    cartContainer: {
        paddingVertical: 10, 
    },
    imgItem: {
        width: 45,
        height: 45,
    },
    itemCart: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
    },
})

export default ItemCarrito