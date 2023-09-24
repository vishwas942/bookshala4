import React ,{useRef, useContext} from 'react'
import sample from './samplebook.jpg';
import emailjs from 'emailjs-com'
import BookContext from './Context/Bookcontext';





const Request = (props) => {
 
  const context = useContext(BookContext)
  const{deleteBook} = context;
  
    const {book} = props
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_njyrtpg', 'template_i3mnf7p',
         form.current, 'fnv-NZBpdWY0UWUE0')
        .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
    
          
      };

  return (
    <div>
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <img src={sample} className="img-fluid" alt="book" style={{"width":"27%", "height":"90%"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
        <i className="fa-solid fa-trash" onClick={()=>{deleteBook(book._id)}}></i>
        <form ref={form} >
        <button ref={form} type="button" onClick={sendEmail} className="btn btn-danger">Review Request</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Request
