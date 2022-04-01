import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);
  // const handleAdd = () => {
  //   // setCategories ([...categories,'nuevaseries']);
  //   // setCategories (categories=>[...categories,'nuevaseries']);
  //   // 
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      
        <AddCategory setCategories={setCategories} />
      
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(category => {
            // return <li key={category}>{category}</li>
           return ( <GifGrid 
              key = {category}
              category ={category}
            />)
          })
        }
      </ol>
    </div>
  )
}

export default GifExpertApp;

