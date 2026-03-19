import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';
import Produncts from './component/Produncts';
import AddProduct from './component/AddProduct';

function App() {
  

  const [myProduct, setMyProduct] = useState<{key : string, name : string}[]>([])
  const [count, setCount] = useState(0)


  const submitHandler = (prod : string)=>{
    const id = Date.now().toString()
    if(prod.length > 1){

       setMyProduct(currentMyProduct => [...currentMyProduct, {key : id, name : prod}])
      setCount(0)
    }else{
      Alert.alert("Désolé", "Le nombre de caractère doit être superieur à 1",[
        {
          text : "Compris",
          onPress : ()=> setCount(count + 1 )
        }
      ],
      {
        cancelable : true,
        onDismiss : ()=> setCount(count + 1 )
        }
      )
    }
  }

  const deleteProduct = (id:string)=>{
    setMyProduct(currentMyProduit => currentMyProduit.filter(product => product.key !== id))
  }

  useEffect(()=>{
    if(count > 3){
      setMyProduct([])
    }
  },[count])

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
