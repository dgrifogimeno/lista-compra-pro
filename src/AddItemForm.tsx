import { Button, Input } from "@mantine/core"
import { motion } from "motion/react"

const MotionButton = motion(Button as any);

export function AddItemForm() {
  return (
    <form>
      <Input placeholder="Nou article amb Mantine" />

      <MotionButton
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Afegeix amb Mantine
      </MotionButton>
    </form>
  );
}