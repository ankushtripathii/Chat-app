import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    //created token with sign fucntion
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,  //prevent xss attacks->cross-site scripting attacks
        sameSite: "strict", //CSRP attack cross-site request forgery attack 
        secure: process.env.NODE_ENV !== "development"

    })
}


export default generateTokenAndSetCookie;

