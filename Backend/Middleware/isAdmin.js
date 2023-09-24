const User = require('../Models/User')

const isAdmin = async(req, res, next) =>{
    try {
       const user = await User.findById(req.user.id)
       console.log(user);
        if(user.role !== 1){
            return res.send({
                message: "Unauthorized access"
            })
            
        }
        else{
            next()
        }
    }  catch (error) {
        console.log(error.message);
          res.status(500).send("Some error occured");
      }
}

module.exports = isAdmin