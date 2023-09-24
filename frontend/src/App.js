import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Userprofile from './Userprofile';
import Signup from './Signup';
import Work from './Work';
import BookState from './Context/BookState';
import Bookdesc from './Bookdesc';

function App() {
  return (
    <BookState>
    <Router>
        <Navbar/>
        <div className='container'>
        <Routes>
          <Route exact path = '/' element={<Home/>}> </Route>
          <Route exact path = "/login"  element={<Login/>}>  </Route>
          <Route exact path = '/Bookitem' element={<Bookdesc  />}></Route>
          <Route exact path = "/signup"  element={<Signup/>}>  </Route>
          <Route exact path = '/profile' element={<Userprofile/>}> </Route>
          <Route exact path = '/uploadwork' element={<Work/>}> </Route>
          </Routes>
          </div>
          </Router>
          </BookState>
  );
}

export default App;
