import React , {useContext, useState}  from 'react'
import BookContext from './Context/Bookcontext'
import { useNavigate } from 'react-router-dom'

const Work = () => {

  const Navigate = useNavigate();

  const context = useContext(BookContext)
  const{addBook} = context;

  const [Book, setBook] = useState({title : "", author:"", description : "", tag : "", image: ""})

  const handleClick = (e)=>{
      e.preventDefault();
          addBook(Book.title, Book.author, Book.description, Book.tag, Book.image);
          setBook({title: "", author:"", description: "", tag:"", image:""});
          Navigate('/profile')
  }

  const onChange = (e)=>{
          setBook({...Book, [e.target.name]: e.target.value})
  }


  return (
    <div>
              <div>
        <h1>Add your Work</h1>
      <div className='container my-3'>
      <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={Book.title} onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Author</label>
      <input type="text" className="form-control" id="author" value={Book.author} name='author' onChange={onChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" value={Book.description} name='description' onChange={onChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Tag</label>
      <input type="text" className="form-control" id="tag" value={Book.tag} name='tag' onChange={onChange} />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Upload Thumbnail Here</label>
      <input type="text" className="form-control" id="tag" value={Book.image} name='tag' onChange={onChange} accept='.jpeg, .png, .jpg' />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Upload Thumbnail Here</label>
      <input type="text" className="form-control" id="tag" value={Book.image} name='tag' onChange={onChange} accept='.jpeg, .png, .jpg' />
    </div>


    <form action="api/book/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="profileImage" />
  <button type="submit">Upload</button>
</form>

  
    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add work</button>
  </form>
  </div>
  
      </div>
      
    </div>
  )
}

export default Work
