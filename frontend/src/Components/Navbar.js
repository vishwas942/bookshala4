import {React, useEffect} from 'react'
import {
    Link,
    useLocation,
    useNavigate,
  } from 'react-router-dom';


const Navbar = () => {
  let location = useLocation();
  const Navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    Navigate('/')
  }

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">BookShala</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse me-5" id="navbarSupportedContent">
      {!localStorage.getItem('token') ? <form className="d-flex" role="search">
        <Link to="/login" className="btn btn-success mx-2 " role="button">Login</Link>
        <Link to="/signup" className="btn btn-primary mx-2" role="button">Sign up</Link>
      </form> : <button 
      onClick={handleLogout}
       className='btn btn-primary'>Logout</button>}
    </div>
 </div>
</nav>
    </>
  )
}

export default Navbar;
