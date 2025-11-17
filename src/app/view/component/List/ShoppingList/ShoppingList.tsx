import { List, ThemeIcon, Modal, TextInput, Button } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import type { ListItem } from '../../../../../App';
import { EmptyList } from '../EmptyList/EmptyList';
import { useState } from "react";
import './ShoppingList.css';

export interface ShoppingListProps {
  itemsList: ListItem[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newName: string) => void;
}

export function ShoppingList({ itemsList, onDelete, onEdit }: ShoppingListProps) {
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [hoveringDeleteId, setHoveringDeleteId] = useState<string | null>(null);
  const [hoveringEditId, setHoveringEditId] = useState<string | null>(null);

  const [modalOpened, setModalOpened] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  
  const openEditModal = (item: { id: number; name: string }) => {
    setEditingId(item.id);
    setModalValue(item.name);
    setModalOpened(true);
  };

  const saveModalEdit = () => {
    if (editingId !== null && modalValue.trim() !== "") {
      onEdit(editingId, modalValue.trim());
      setModalOpened(false);
      setEditingId(null);
    }
  };

  if (itemsList.length === 0) return <EmptyList />;

  const handleDelete = (id: number) => {
    setRemovingId(id.toString());

    setTimeout(() => {
      onDelete(id);
      setRemovingId(null);
    }, 300);
  };

  return (
    <>
      <h1>Llista de la compra</h1>

      <List spacing="xs" size="md" center className="list-container">
        {itemsList.map((item) => (
          <div key={item.id} className={`list-item ${removingId === item.id.toString() ? "removing" : ""} ${hoveringDeleteId === item.id.toString() ? "hover-delete" : ""} ${hoveringEditId === item.id.toString() ? "hover-edit" : ""}`}>
            
            <span className="item-text">{item.name}</span>

            <div className='div-buttons'>
              <ThemeIcon
                className="edit-button"
                onClick={() => openEditModal(item)}
                onMouseEnter={() => setHoveringEditId(item.id.toString())}
                onMouseLeave={() => setHoveringEditId(null)}
                color='var(--color-muted)'
                size="lg"
              >
                <IconEdit size={18} />
              </ThemeIcon>

              <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Editar element" centered>
                <TextInput
                  value={modalValue}
                  onChange={(e) => setModalValue(e.currentTarget.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveModalEdit()}
                  autoFocus
                  className='my-input'
                />
                <Button mt="sm" className='save-button' fullWidth onClick={saveModalEdit}>Guardar</Button>
              </Modal>

              <ThemeIcon
                className="delete-button"
                onClick={() => handleDelete(item.id)}
                onMouseEnter={() => setHoveringDeleteId(item.id.toString())}
                onMouseLeave={() => setHoveringDeleteId(null)}
                color='red'
                size="lg"
              >
                <IconTrash size={18} />
              </ThemeIcon>
            </div>
          </div>
        ))}
      </List>
    </>
  );
}