import { Button, Input } from "@mantine/core"
import { motion } from "motion/react"
import './AppItemForm.css';

const MotionButton = motion.create(Button as any);

export function AddItemForm() {
  return (
    <form>
      <div className="input-group">
        <label className="input-label">Nombre</label>
        <div className="input-button-group">
          <Input placeholder="Per exemple, pa, llet, ous" className="my-input" />
          <MotionButton
            animate={{ scale: 1, transition: { duration: 0.01 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="my-button"
            type="submit"
          >
            + Afegir producte
          </MotionButton>
        </div>
      </div>
    </form>
  );
}