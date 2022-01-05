import React from 'react'
import { StyleSheet , Text , TouchableOpacity} from 'react-native'

function ToDoItem({item}) {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>
        {item.text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text:{
    padding:15 ,
    borderColor:'#bbb',
    borderWidth:1 ,
    marginTop:'10' ,
    borderStyle:'dashed'
  }
})


export default ToDoItem
