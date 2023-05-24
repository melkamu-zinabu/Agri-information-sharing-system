//for now here is the model for user it will be updated latter on

import mongoose from "mongoose";
 const usermodel = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true
      }
});
    
export default mongoose.model('usermodel', usermodel);