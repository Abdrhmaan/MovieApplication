import { User } from "../Models/userModel.js"
import bcrypt from "bcrypt"
import generateToken from "../Util/token.js";
 

  export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      throw new Error("Please fill all the fields");
    }
  
    const userExists = await User.findOne({ email });
    
    if (userExists) return res.status(400).send("User already exists");
  
    // Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
  
    try {
      await newUser.save();
      generateToken(res , newUser._id)
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      });
    } catch (error) {
      res.status(400);
    
    }
  };



export const login = async (req,res ) => {


    const {email , password} = req.body


        if(!email ||!password) {
        res.status(401).send("plese Fill al the fields ")
    }
   

     const existingUser   = await User.findOne({email})

     if(existingUser){

        const comprePsswod  = await  bcrypt.compare(password ,existingUser.password)

        if(comprePsswod){
          generateToken(res , existingUser._id)
          res.status(201).json({
            _id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
            isAdmin: existingUser.isAdmin,
          });
        }  else {
            return res.status(401).send("Ivalid Pssword ")
         }
    
     } else {
        return  res.status(401).send("Email is not registered")
     }




}




export const logout =async (re,res) => {

    res.clearCookie("jwt")
    res.status(200).json({message: "logout succefuly"})

}


export const updteProfile = async (req,res) => {


  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }



 

 






}


export const getusers = async(req,res) => {

    const users = await User.find()
    res.status(200).json(users)







}


export const getProfile  = async(req,res) => {


    const user   = await User.find(req.user._id)


    if(user) {

        res.status(401).send(user)

    }
}