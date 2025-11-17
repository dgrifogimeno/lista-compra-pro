import './App.css'
import '@mantine/core/styles.css';
import { createClient } from '@supabase/supabase-js';

import { AddItemForm } from './app/view/component/AppItemForm/AddItemForm'
import { ShoppingList } from './app/view/component/List/ShoppingList/ShoppingList'
import { Layout } from './app/view/template/layout/Layout';
import { useState, useEffect } from 'react';
import { launchConfetti } from "./app/utils/confetti";
import supabase from './app/utils/supabase';

export interface ListItem {
  id: number;
  name: string;
}

export interface SwitchProps {
  confetti: boolean;
  setConfetti: (value: boolean) => void;
}

const App = () => {
  registerUser("hola@hola.com", "holahola");

  async function registerUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error al registrar:', error.message);
    } else {
      console.log('Usuario registrado:', data);
    }
  }

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

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

  const deleteItem = (id: number) => {
    setItems(items.filter((_, index) => index !== id));
  }

  const editItem = (id: number, newName: string) => {
    setItems((prev) =>
      prev.map((item, index) => (index === id ? newName : item))
    );
  };
  
  const userData = data?.user?.email || "Usuari/ària";
  console.log("User data:", userData);
  return (
    <>
      <Layout confetti={confetti} setConfetti={setConfetti} />
      <div className="flex-div">
        <h1>Benvingut/da a la teva llista de la compra {userData}!</h1>
        <h1>Afegeix elements a la llista</h1>
        <AddItemForm onAdd={addItem}/> 

        <ShoppingList itemsList={itemsList} onDelete={deleteItem} onEdit={editItem} />
      </div>
    </>
  )
};

export default App
