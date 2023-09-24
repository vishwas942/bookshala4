import React, {useContext, useEffect} from 'react'
import BookContext from './Context/Bookcontext';
import Request from './Request';

const Useritemlist = () => {
    const context = useContext(BookContext);
  const { Book, getBook } = context;


  useEffect(() => {
      getBook();


    // eslint-disable-next-line
  }, []);


  return (
    <>
      
      <div className="row my-3">
        
        {Book.map((book) => {
          return (
            <Request book = {book} />
          );
        })}
      </div>
    </>
  );
};

export default Useritemlist
