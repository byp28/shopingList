import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import Produncts from './component/Produncts';
import AddProduct from './component/AddProduct';

function App() {
  

  const [myProduct, setMyProduct] = useState<{key : string, name : string}[]>([])


  const submitHandler = (prod : string)=>{
    const id = Date.now().toString()
    setMyProduct(currentMyProduct => [...currentMyProduct, {key : id, name : prod}])
  }

  const deleteProduct = (id:string)=>{
    setMyProduct(currentMyProduit => currentMyProduit.filter(product => product.key !== id))
  }



  return (
    <View style={styles.container}>
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
});

export default App;
