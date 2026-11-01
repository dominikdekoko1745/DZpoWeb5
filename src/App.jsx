import React, { useState } from 'react';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Молоко', price: 85 },
    { id: 2, name: 'Хлеб', price: 35 },
  ]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-container">
      <h1>Список покупок</h1>
      <ItemForm onAdd={handleAddItem} />
      {items.length === 0 ? (
        <p className="empty-text">Список пуст</p>
      ) : (
        <ul className="items-list">
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={handleDeleteItem} />
          ))}
        </ul>
      )}
      <div className="total-container">
        <h3>Общая стоимость: <span>{totalPrice} сом</span></h3>
      </div>
    </div>
  );
}

export default App;
