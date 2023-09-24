const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    // img: {
    //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
    //     contentType: 'image/png',
    //     required:true
    // }
});

module.exports = mongoose.model('book', BookSchema);     //here notes is the module we are using and Notesschema is the schema we are using from this module.
