const jwt=require('jsonwebtoken');
exports.protect=async(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        res.status(401).send("Not authorized,no token");
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;   // store user data in request
    // console.log(decoded);
    
    next();               //move to next middleware/route
} catch (err) {
    res.send("invalid token");  //stop here if token is wrong
}
}