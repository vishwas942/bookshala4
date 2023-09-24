import React from 'react'
import userlogo from './userlogo.jpg'
import {
    useNavigate,
  } from 'react-router-dom';
import Booklist from './Booklist';

const Home = () => {

  
  const Navigate = useNavigate();

    const onclick = ()=>{
        if(localStorage.getItem('token')){
            Navigate('/profile');
        }
        else{
          alert("You are not logged in. Click to go to login page!!")
            Navigate('/login')
        }
    }

  return (
    <div className='mt-5'>
      

    <div className='d-flex align-items-center justify-content-center w-auto'>
        <span className='me-5' style={{"width":"50px", "height":"40px", "borderWidth":"5px", "cursor":"pointer", "borderRadius":"50%"}}>
            <img onClick={onclick} src={userlogo} alt='userlogo' style={{"width":"50px", "height":"40px"}} />
        </span>

      <form className="d-flex w-75" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      </div>

      <Booklist/>
  
    </div>
  )
}

export default Home
