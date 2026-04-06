import { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal} from 'react-native';
import ButtonComponent from './ButtonComponent';

export default function AddProduct({submitHandler, show, cancelProduct} : {submitHandler : (prod : string)=>void , show : boolean, cancelProduct : ()=>void}) {

    const [produit, setProduit] = useState('')


    const inputHandler = (e:string)=>{
        setProduit(e)
    }

    const handleClick = ()=>{
        submitHandler(produit)
        setProduit('')
    }


  return (
    <Modal
      visible={show}
      animationType='slide'
    >
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              onChangeText={(e)=>inputHandler(e)}
              placeholder='Nouveau produit'
              value={produit}
          />
          <View style={styles.btnContainer}>
            <ButtonComponent
              style={ styles.button}
              onPressHandler={()=>handleClick()}
            >
              Ajouter
            </ButtonComponent>

            
             <ButtonComponent
              style={ styles.buttonCancel}
              onPressHandler={()=>cancelProduct()}
            >
              Annuler
            </ButtonComponent>
          </View>
          
      </View>
    </Modal>
  )
}



const styles = StyleSheet.create({
  form : {
    flex : 1,
    justifyContent : "center",
    padding : 25,
    gap:14
  },
  input : {
    width : "100%",
    borderColor : "#e0e0e0",
    borderWidth : 2,
    borderRadius : 10,
    paddingHorizontal : 12,
  },
  button: {
    width : 150,
    backgroundColor : "#4ea1ff"
  },
  buttonCancel: {
    width : 150,
    backgroundColor : "#ff4e4e"
  },
  btnContainer : {
    flexDirection : "row",
    justifyContent : "space-between"
  }
});