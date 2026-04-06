import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = ({onPressHandler, children, style} : {onPressHandler : ()=>void, children : React.ReactNode, style : any}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=> onPressHandler()}>
        <View  style={{...styles.btn, ...style}}>
            <Text style={styles.btnText}>{children}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btn : {
        backgroundColor : "grey",
        padding : 10,
        borderRadius : 10
    },
    btnText : {
        color : "#fff",
        fontSize : 17,
        textAlign : "center"
    }
})