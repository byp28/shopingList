import { View, Text, Modal, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Error({showModal, setShowModal} : {showModal : boolean, setShowModal : (val:boolean)=>void}) {
  return (
   <Modal 
        visible={showModal}
        onRequestClose={()=> setShowModal(false)}
        animationType='slide'
        hardwareAccelerated
        transparent
    >
        <View style={styles.modal}>
            <View style={styles.modalContent}>
               <Text style={styles.modalTitle}>OUPPS</Text>
               <Image style={styles.img} source={require("../assets/mcross.png")} />
               <Text style={styles.modalText}>Merci d'indiquer plus d'un caractère</Text>
               <Pressable onPress={()=>{
                 setShowModal(false)
               }} style={styles.modalButton}><Text style={[styles.modalText, styles.modalButtonText]}>OK</Text></Pressable>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal : {
    flex : 1,
    flexGrow : 1,
    justifyContent : "center",
    alignContent  :"center",
    alignItems : "center",
    backgroundColor : "#0000002a"
  },
  modalContent : {
    width : "90%",
    height : 300,
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "space-between",
    borderRadius : 18,
    backgroundColor : "#fff",
  },
  modalTitle : {
    width : "100%",
    fontSize : 20,
    paddingVertical : 15,
    borderTopLeftRadius : 18,
    textAlign : "center",
    borderTopRightRadius : 18,
    borderBottomColor : "#a6a6a6",
    borderBottomWidth : 1
  },
  modalText : {
    textAlign : "center"
  },
  modalButton : {
    width : "100%",
    paddingVertical : 15,
    borderBottomLeftRadius : 18,
    borderBottomRightRadius : 18,
    backgroundColor : "#35f083"
  },
  modalButtonText : {
    fontSize : 20,
    color : "#fff",
  },
  img : {
    width : 80,
    height : 80
  }
});
