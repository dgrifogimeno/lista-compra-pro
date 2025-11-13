import { List } from '@mantine/core';
// import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import type { ListItem } from '../../../../App';
import './ShoppingList.css';

type ShoppingListProps = {
  itemsList: ListItem[];
};

export function ShoppingList({ itemsList }: ShoppingListProps) {
  return (
    <>
      {itemsList.length === 0 ? (
        <>
        <h4>La llista està buida!</h4>
        <h5>Afegeix algun element a la llista</h5>
        </>
      ) : (
        <><h1>Llista de la compra</h1>
        <List spacing="xs" size="md" center className='list-items'>
            {itemsList.map((item) => (
              <List.Item key={item.id} className='list-item'>
                {item.name}
              </List.Item>
            ))}
          </List></>
      )}
    </>
  );
}