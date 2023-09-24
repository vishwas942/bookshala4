
import React, {useEffect, useState} from 'react'
import {
  useNavigate,
} from 'react-router-dom';
import Useritemlist from './Useritemlist';


const Userprofile = () => {

  const Navigate = useNavigate()

const handleClick = (e)=>{
    e.preventDefault();
    Navigate('/uploadwork')

}

  const InitialUser = []
  const[user, setuser] = useState(InitialUser)

  const getuser = async ()=>{

    const response = await fetch(`http://localhost:4000/api/auth/getuser`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }, 
    });
    const json = await response.json()
    console.log(json)
    setuser(json)
  }
  useEffect(() => {
    if(localStorage.getItem('token')){
      getuser();
    }
    // eslint-disable-next-line
  }, []);

  return (
 
 <>
    
      <h1>This is user profile interface</h1>


      <p>Name : {user.Name}</p>
      <p>Email : {user.Email}</p>
      <p>Date of birth : {user.DOB}</p>

      <button type="button"  className="btn btn-primary mb-5 " onClick={handleClick} >Add your Work</button>

      <h3>Your uploads</h3>
      <Useritemlist/>
 </>


  )
}

export default Userprofile;
