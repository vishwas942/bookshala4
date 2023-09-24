import React, { useContext, useEffect} from "react";
import BookContext from "./Context/Bookcontext";
import Bookitem from "./Bookitem";


const Booklist= () => {
  const context = useContext(BookContext);
  const { Book, getallBook } = context;


  useEffect(() => {
      getallBook();


    // eslint-disable-next-line
  }, []);


  return (
    <>
      
      <div className="row my-3">
        
        {Book.map((book) => {
          return (
            <Bookitem book = {book} />
          );
        })}
      </div>
    </>
  );
};

export default Booklist;
