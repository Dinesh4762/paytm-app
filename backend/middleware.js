const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next){
    const tokenString = req.headers.authorization;
    if(!tokenString || !tokenString.startsWith("Bearer ")){
      return res.status(403).json({msg: "wrong authorization headers!"})
    }
    const token = tokenString.split(" ")[1];
   try {
     const encoded = jwt.verify(token,process.env.JWT_SECRET);
     req.userId = encoded.userId;
     next();
   } catch (error) {
    console.log(error);
    res.status(403).json({
      authenticated: "false",
      msg:"Authorization failed! Sign in again."})
   }
    
}
module.exports = authMiddleware;
