import React from 'react'
import RecipeList from './RecipeList'
import { useState } from 'react';

export default function RecipeSearch() {
    const [searchTerm,setSearchTerm]= useState('')
  return (
  <div>
      <input type="text" placeholder='search' onChange={event => {setSearchTerm(event.target.value)}}/>
  {RecipeList.filter((val)=>{
if (searchTerm === '') {
    return val}
    else if (val.reccipe.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
}) 
.map ((val,key)=>{
    return <div className='user' key={key}> {val.recipe}</div>
})}
</div>
  );

}