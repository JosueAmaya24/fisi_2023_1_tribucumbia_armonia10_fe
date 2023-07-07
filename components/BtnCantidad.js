import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const BtnCantidad = () => {
  return (
    <View style={styles.amountContainer}>
          <TouchableOpacity style={styles.amount}>
            <Text style={styles.textAmount}>-</Text>
          </TouchableOpacity >
          <Text style={styles.textAmount}>1</Text>
          <TouchableOpacity style={styles.amount}>
            <Text style={styles.textAmount}>+</Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3,
      },
      amount:{
        borderWidth: 1,
        width: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#ddd',
      },
      textAmount: {
        fontSize: 15,
      }
})

export default BtnCantidad