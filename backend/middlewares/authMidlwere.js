import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {

 

    let token = req.cookies.jwt;
    if (token) {



        try {
            const decoded = jwt.verify(token, "xaaaan");
         

            // Assuming you want to get the entire user object
            const user = await User.findById(decoded.userId);

            // Set user information in req object
            req.user = user;

            next();
        } catch (e) {
            console.log(e);
            res.status(402).send('Not authorized, token failed');
        }
    } else {
        res.status(401).send('Not authorized, no token');
    }


};

export const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send('Not authorized, admin access required');
    }
};
