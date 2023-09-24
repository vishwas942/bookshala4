
import BookContext from './Bookcontext'
import { useState } from 'react'

const BookState = (props) =>{
   const host = "http://localhost:4000"
    const InitialBook = []
      const[Book, setBook] = useState(InitialBook)


      // To do API calls

//    To get all books

      const getallBook =  async ()=>{
        const response = await fetch(`${host}/api/book/fetchallbooks`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
          }, 

        });
        const json = await response.json()
        console.log(json)
        setBook(json);
      }
      
//    To get user books 

      const getBook = async ()=>{
        const response = await fetch(`${host}/api/book/Fetchbooks`, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem('token'),
          }, 

        });
        const json = await response.json()
        console.log(json)
        setBook(json);
      }


 

      // To add Book
      const addBook = async (title, author, description, tag, image)=>{
        
        const response = await fetch(`${host}/api/book/addBook`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" :localStorage.getItem('token'),
          },
          body: JSON.stringify({title, author, description, tag, image}), 
        });
        const book = await response.json();
        setBook(Book.concat(book))
      }
      // eslint-disable-next-line
      let newBook =  JSON.parse(JSON.stringify(Book))
      
      
      
    //   // To edit note
    //  const EditBook = async (id, title, description, tag)=>{

    //   const response = await fetch(`${host}/api/book/updatenote/${id}`, {
    //     method: "PUT", 
    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token" :localStorage.getItem('token'),
    //     },
    //     body: JSON.stringify({title, description, tag}), 
    //   });
    //   const json = response.json();
    //   console.log(json)
    //     for (let index = 0; index < newBook.length; index++) {
    //       const element = newBook[index];
    //       if(element._id === id){
    //         newBook[index].title = title;
    //         newBook[index].description = description;
    //         newBook[index].tag = tag;
    //         break;
    //       }
    //     }  
    //     setBook(newBook)
    //   }





      // to delete book
      const deleteBook = async (id)=>{
        const response = await fetch(`${host}/api/book/deleteBook/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" :localStorage.getItem('token'),
          },
        });
        const json = await response.json()
        console.log(json)

        console.log("Delete note with id " + id)
        const newBook = Book.filter((book)=>{
           return book._id!==id;
        })
        setBook(newBook);
      }


      // Fetching single book details
      // const fetchBook = async (id)=>{
      //   const response = await fetch(`${host}/api/book/fetchBook/${id}`, {
      //     method: "GET", 
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const json = await response.json()
      //   console.log(json)
      //   setBook(json);
      // }

    return(
        <BookContext.Provider value = {{Book, addBook,
          //  fetchBook,
        // EditBook,
         deleteBook, getBook, getallBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookState;