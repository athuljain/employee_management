
const bcrypt=require('bcrypt')
const {HR} = require('../model/models')


const hrLogin= async (req, res) => {
    
  
    try {

        const email = req.body.email;
        const password = req.body.password;
        if (email !== "hr@gmail.com" || password !== "hr@123") {
          throw new Error("Invalid Email or Password");
        }


  
      res.status(200).json({ message: 'Login successful', hr });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  
}

  module.exports={
    hrLogin
  }