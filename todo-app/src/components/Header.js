import  { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addTodo } from '../todos/todosSlice';

import { nanoid } from '@reduxjs/toolkit';

function  Header () {
  
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();
  
    const HandleSubmit = (event) => {
        event.preventDefault();

        if (!title) return;

        dispatch(addTodo( { id: nanoid(), title, completed: false } ));

        setTitle("");
        

       

        };

       


  

  
    return (
    
    
    
    <header className='header'>

        <h1> Todos </h1>

        <form onSubmit={HandleSubmit}>

        <input className='new-todo' placeholder='What needs to be done?' autoFocus
        value={title}
        onChange={ (event) => setTitle( event.target.value ) } 
         /> 

        </form>


    </header>
  
  
  
  
    )
};

export default Header;