import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Cart from 'react-native-vector-icons/AntDesign';

const Carrito = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Mi Carrito')}>
        <Cart name="shoppingcart" size={30} color="black" />
        <View style={styles.circulo}>
                <Text style={{color: '#fff', fontSize: 10}}>0</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    circulo: {
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 0,
        right: -7,
        borderRadius: 10,
        height: 18,
        width: 18,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Carrito