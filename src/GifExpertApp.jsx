import { useState } from 'react';
import { GifGrid, AddCategory } from './components';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Marvel', 'DC Comics']);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>   
  );
};
