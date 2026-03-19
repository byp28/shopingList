import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Alert, Text,Modal, Pressable  } from 'react-native';
import Produncts from './component/Produncts';
import AddProduct from './component/AddProduct';


function App() {
  

  const [myProduct, setMyProduct] = useState<{key : string, name : string}[]>([])
  const [showModal, setShowModal] = useState(true)

  const submitHandler = (prod : string)=>{
    const id = Date.now().toString()
    if(prod.length > 1){
      setMyProduct(currentMyProduct => [...currentMyProduct, {key : id, name : prod}])
    }else{
      setShowModal(true)
    }
    
  }

  const deleteProduct = (id:string)=>{
    setMyProduct(currentMyProduit => currentMyProduit.filter(product => product.key !== id))
  }



  return (
    <View style={styles.container}>
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
            <Text style={styles.modalText}>Merci d'indiquer plus d'un caractère</Text>
            <Pressable onPress={()=>{
              setShowModal(false)
              console.warn(showModal)
            }} style={styles.modalButton}><Text style={[styles.modalText, styles.modalButtonText]}>OK</Text></Pressable>
          </View>
        </View>
      </Modal>

      <AddProduct submitHandler={submitHandler}/>
      <FlatList
        data={myProduct}
        renderItem={({item})=> <Produncts product={item} deleteProduct={deleteProduct} />}
        keyExtractor={item => item.key}
      />    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight : "100%",
    paddingHorizontal : 20,
    paddingVertical : 40,
  },
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
    height : 250,
    flexDirection : "column",
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
  }
});

export default App;
