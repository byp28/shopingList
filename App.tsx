import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Alert, Text,Modal, Pressable, Button, ImageBackground  } from 'react-native';
import Error from './component/Error'
import Produncts from './component/Produncts';
import AddProduct from './component/AddProduct';
import DismissKeyBoard from './component/DismissKeyBoard';
import ButtonComponent from './component/ButtonComponent';


function App() {
  

  const [myProduct, setMyProduct] = useState<{key : string, name : string}[]>([])
  const [showModal, setShowModal] = useState(false)
  const [showAddProduct, setAddProduct] = useState(false)

  const submitHandler = (prod : string)=>{
    const id = Date.now().toString()
    if(prod.length > 1){
      setMyProduct(currentMyProduct => [...currentMyProduct, {key : id, name : prod}])
      setAddProduct(false)
    }else{
      setShowModal(true)
    }
    
  }

  const deleteProduct = (id:string)=>{
    setMyProduct(currentMyProduit => currentMyProduit.filter(product => product.key !== id))
  }



  return (
    <DismissKeyBoard>
      <ImageBackground source={{uri : "https://i.pinimg.com/736x/3a/be/4a/3abe4a10372e2a06478370d364ba087d.jpg"}} style={styles.container}>
        <Error showModal={showModal} setShowModal={setShowModal}/>
        <ButtonComponent style={styles.addBtn} onPressHandler={()=>setAddProduct(true)}>Nouveau Produit</ButtonComponent>
        <AddProduct show={showAddProduct} cancelProduct={()=> setAddProduct(false)} submitHandler={submitHandler}/>
        <FlatList
          data={myProduct}
          renderItem={({item})=> <Produncts product={item} deleteProduct={deleteProduct} />}
          keyExtractor={item => item.key}
        />    
      </ImageBackground >
    </DismissKeyBoard>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingHorizontal : 20,
    paddingVertical : 40,
    gap : 20
  },
  modal : {
    flex : 1,
    flexGrow : 1,
    justifyContent : "center",
    alignContent  :"center",
    alignItems : "center",
    backgroundColor : "#0000002a"
  },
  addBtn : {
    backgroundColor : "#4ea1ff"
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
