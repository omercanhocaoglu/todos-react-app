import React from 'react';

import { useState } from 'react';

import ContentFooter from './ContentFooter';

import { useSelector, useDispatch } from 'react-redux';

import { toggle, destroy, selectTodos, selectActiveFilter } from '../todos/todosSlice';


function Content () {
	
	let dispatch = useDispatch();

	const items = useSelector( selectTodos );

	const activeFilter = useSelector( selectActiveFilter ); 

	let filtered = [];

	filtered = items;

	if (activeFilter !== "all") {
		filtered = items.filter(( item ) => activeFilter === "active" 
		? item.completed === false  
		: item.completed === true  
		)
	};


	// colorBox place
	const colors = [

		"#BFCE33",
		"#E90B0B",
		"#0B17E9",
		"#FFFFFF",
		"#B716C6",
		"#16BAC6",
    	"#EA66B2",
    	"#666FEA",
    	"#000000",
    
		
	
	];  

	const [colorSet, setColorSet] = useState();


	
  
    return (
    
    <>

<div className='container'> {/* this place if for color */}
          
		  {
			  colors.map( (color, index) => 
				  <div key={index}  className='card'> 

					  <div style={{background:color, filter:"brightness(55%)", color: color === "#000000" ? "white" : ""}} 
					  className='box' onClick={ () => setColorSet(color) }> 
						   
						   
					 
					  </div>
					  
				  </div>
			   )
		  } <br/>
	  
	  
	  
	  </div> {/* this place if for color */}

        <section className="main">

		

		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list" style={{background: colorSet, color: colorSet === "#000000" ? "white" : "#000000"}}>
			
			
			{
				filtered.map((item) => (
					<li key={item.id} className={item.completed ? "completed" : "" } >
				<div className="view">
					<input className="toggle" type="checkbox" checked={item.completed}
					onChange={() => dispatch( toggle( { id:item.id } ) )}
					/>
					<label> {item.title} </label>
					<button className="destroy" 
					onClick={()=> dispatch( destroy( item.id ))}></button>
				</div>
			</li>
				))
			}
		</ul>
	</section>

<ContentFooter/>
  
    </>
    
    )
};



export default Content;