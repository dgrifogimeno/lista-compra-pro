import { Button, Input } from "@mantine/core"
// import { motion } from "motion/react"
import './AppItemForm.css';

interface AddItemFormProps {
  onAdd: (item: string) => void;
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const itemName = formData.get('item') as string;
    if (itemName.trim()) {
      onAdd(itemName);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="input-label">Nombre</label>
        <div className="input-button-group">
          <Input 
            placeholder="Per exemple, pa, llet, ous" 
            className="my-input"
            name="item"
            required
          />
          <Button className="my-button" type="submit">
            + Afegir producte
          </Button>
        </div>
      </div>
    </form>
  );
}