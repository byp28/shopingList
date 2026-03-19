import { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Alert} from 'react-native';

export default function AddProduct({submitHandler} : {submitHandler : (prod : string)=>void}) {

    const [produit, setProduit] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)

    const inputHandler = (e:string)=>{
        setProduit(e)
    }

    const handleClick = ()=>{
        submitHandler(produit)
        setProduit('')
    }

    useEffect(()=>{
        if(produit.length > 1){
            setBtnDisabled(false)
        }else{
            setBtnDisabled(true)
        }
    })

  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            onChangeText={(e)=>inputHandler(e)}
            placeholder='Nouveau produit'
            value={produit}
        />
        <Button
            title='Ajouter'
            onPress={()=>handleClick()}
            disabled ={btnDisabled}
        />
    </View>
  )
}



const styles = StyleSheet.create({
  form : {
    flexDirection : "row",
    justifyContent : "center",
    alignContent : "center",
    alignItems : "center",
    marginBottom : 10,
    gap:5
  },
  input : {
    flexGrow : 1,
    borderColor : "#e0e0e0",
    borderWidth : 2,
    borderRadius : 10,
    paddingHorizontal : 12,
  },
  button: {
    textAlign : "center",
    justifyContent : "center",
    alignContent : "center",
    height :"100%",
    borderRadius : 10,
  },
});