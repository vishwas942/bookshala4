const express = require('express')
const app = express();
const cors = require('cors')
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser')
const Books = require('../Models/Books');
const { body, validationResult } = require("express-validator");
var bodyParser = require('body-parser');
var path = require('path');
const multer= require('multer');

const upload = multer({ dest: "uploads/"});
// app.set("view engine", "ejs");
// ROUTE 1
// Get all the notes of a logged in user using GET (/api/notes/FetchAllNotes). Login required
//yeh wala alag se hai
// app.use(cors());
// app.use(express.json());
// app.post("/uploads", async(req,res)=>{
//   const body= req.body;
//   try{
//     const newImage = await this.post.create(body);
//     newImage.save();
//     res.status(201).json({msg: "new Image Uploaded"});
//   }catch(error){
//     res.status(409).json({message: error.message})
//   }
// })
//yaha tak hai


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//
app.post('/upload',upload.single('profileImage'), (req,res)=>{
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
})


//for fetching all books

router.get('/fetchallbooks', async (req,res)=>{
    try {
    const booklist = await Books.find()
    res.json(booklist);   
} catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
}
})

//finished

//ROUTE 2 
// To add note in a logged in user account using POST (/api/book/addBook).  Login required

router.post('/addBook', fetchuser, body('title', "Can't be left blank").isLength({ min:1 }),
                body('description', "Can't be left blank").isLength({ min:1 }), 
                body('author',  "Can't be left blank").isLength({ min:1 }),
                body('tag', "Can't be left blank").isLength({min:1}),
                async (req,res)=> {

                    try {
                    const {title, author, description, tag} = req.body
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                      return res.status(400).json({errors: errors.array() });
                      }
                      const book = new Books({
                        title, author, description, tag, user: req.user.id
                      })
                      const SaveBook = await book.save()
                      res.json(SaveBook)
                    } catch (error) {
                        console.log(error.message);
                        res.status(500).send("Some error occured");
                    }
                })

  // ROUTE 3
  // Update an existing note  using PUT (/api/notes/updatenote).  Login required
  router.put('/updateBook/:id', fetchuser, async (req,res)=> {
        const {title, author, description, tag} = req.body;
        // create  a newNote object
        try {
        const newBook = {}
        if(title){newBook.title = title}
        if(description){newBook.description = description}
        if(author){newBook.author = author}
        if(tag){newBook.tag = tag}
  
// Find the note to be updated and update it
        let book = await Books.findById(req.params.id)
        if(!book){return res.status(404).send({error : "Not found"})}
        if(book.user.toString() !== req.user.id ){
          return res.status(401).send({Warning : "Not allowed"})
        }

        book = await Books.findByIdAndUpdate(req.params.id, {$set: newBook}, {new:true})
        res.json({book});
       } catch (error) {
          console.log(error.message);
          res.status(500).send("Some error occured");
      }
        
  })


  // ROUTE 4
  // Delete a note using DELETE (api/notes/deletenote).   Login required
  router.delete('/deleteBook/:id', fetchuser, async (req,res)=> {
       
    try {
// Find the note to be deleted and delete it
    let book = await Books.findById(req.params.id)
    if(!book){return res.status(404).send({error : "Not found"})}

    // Allow deletion only if user owns this note
    if(book.user.toString() !== req.user.id ){
      return res.status(401).send({Warning : "Not allowed"})
    }

    book = await Books.findByIdAndDelete(req.params.id)
    res.json({"Success" : "Book has been deleted"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
}
})

// To fetch specific books only of user

router.get('/Fetchbooks', fetchuser, async (req,res)=>{
    try {
    const books = await Books.find({user: req.user.id})
    res.json(books);   
} catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
}
})

module.exports = router;