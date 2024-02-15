// import { AuthorModel } from "../models/authorModel";
// import { check, validationResult } from "express-validator";

// export const validateUserInput = [
//     check("username").notEmpty().isString(),
//     check("password").notEmpty().isString(),
//   ];

// const authMiddleware = (req,res,next) => {
//     const {username,password} = req.body;
//     if(!username || !password){
//         return res.status(400).json({message:"Username and password required."});
//     }
//     next();
// }
 
// export default authMiddleware;