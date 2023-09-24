import React from 'react'
import { useNavigate } from 'react-router-dom';

const Bookitem = (props) => {

    const Navigate = useNavigate();
    const {book} = props;
    
const onclick = ()=>{
      Navigate('/bookitem', {state : {id: book.id}})
}

  return (
    <div >
        <div className='d-flex flex-column align-items-center mt-5' >
      <div className="card mt-3 w-50"  style={{"cursor":"pointer"}} onClick={onclick}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
         <p className="card-text"><small className="text-muted">by {book.author}</small></p> 
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Bookitem
