import './App.css'
import '@mantine/core/styles.css';

import { AddItemForm } from './app/view/component/AppItemForm/AddItemForm'
import { ShoppingList } from './app/view/component/List/ShoppingList/ShoppingList'
import { Layout } from './app/view/template/layout/Layout';
import { useState } from 'react';
import { launchConfetti } from "./app/utils/confetti";

export interface ListItem {
  id: number;
  name: string;
}

export interface SwitchProps {
  confetti: boolean;
  setConfetti: (value: boolean) => void;
}

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const itemsList: ListItem[] = items.map((item, index) => ({
    id: index,
    name: item
  }));

  const [confetti, setConfetti] = useState(true);

  const addItem = (item: string) => {
    setItems([...items, item]);
    if (confetti) {
      launchConfetti();
    }
  }

  return (
    <>
      <Layout confetti={confetti} setConfetti={setConfetti} />
      <div className="flex-div">
        <h1>Afegeix elements a la llista</h1>
        <AddItemForm onAdd={addItem}/> 

        <ShoppingList itemsList={itemsList} /> 
      </div>
    </>
  )
};


export default App
