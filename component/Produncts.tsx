import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Produncts({product, deleteProduct} : {product : {key : string, name : string}, deleteProduct : (id:string)=>void}) {
  return (
    <Pressable onPress={()=> deleteProduct(product.key)} style={styles.element}>
      <Text style={styles.text}>{product.name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text : {
    fontWeight : "semibold",
    color : "#fff",
    fontSize : 18,
  },
  element : {
    width : "100%",
    backgroundColor : "#61b8ff",
    paddingHorizontal : 14,
    paddingVertical : 8,
    marginVertical : 8,
    borderRadius : 8,
  }
});