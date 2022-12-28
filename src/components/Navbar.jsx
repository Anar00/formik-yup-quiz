import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='contanier'>
        <div className='nav'> 
        <div className='logo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2N-SsREtZdqq6HO9qhNoon773HaE-0yZ7A&usqp=CAU'/></div>
            <div className='right'>
            <ul>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/add">Add</Link>
            </li>
    
          </ul>
            </div>
               
        </div>
    </div>
  )
}

export default Navbar