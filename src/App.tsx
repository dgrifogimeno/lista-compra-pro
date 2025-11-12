import './App.css'
import '@mantine/core/styles.css';

import { AddItemForm } from './AddItemForm'
import { ShoppingList } from './ShoppingList'

function App() {

  return (
    <>
      <div className="flex-div">
        <h1>Llista de la compra 🛒</h1>
        <div className="add-item-form">
          <AddItemForm /> 
        </div>
        <div className="shopping-list">
          <ShoppingList /> 
        </div>
      </div>
    </>
  )
}

export default App
