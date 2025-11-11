import './App.css'
import '@mantine/core/styles.css';

import { AddItemForm } from './AddItemForm'
import { ShoppingList } from './ShoppingList'
import { Text } from '@mantine/core';

function App() {

  return (
    <>
      <Text>Llista de la compra 🛒</Text>
      <AddItemForm> 

      </AddItemForm>
      <ShoppingList>  

      </ShoppingList>
    </>
  )
}

export default App
