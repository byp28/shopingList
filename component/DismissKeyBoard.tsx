import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const DismissKeyBoard = ({children} : {children : React.ReactNode}) => {
  return (
    <TouchableWithoutFeedback
     onPress={()=>{
        Keyboard.dismiss()
     }}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyBoard