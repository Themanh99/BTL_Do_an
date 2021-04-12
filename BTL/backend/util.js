import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET || 'somethingsecret',
      {
        expiresIn: '30h',
      }
    );
  };
export const isAuth = (req,res,next) => {
  const authorization = req.headers.authorization;
  if(authorization) {
    const token = authorization.slice(7,authorization.length);
    jwt.verify(token , process.env.JWT_SECRET || 'somethingsecret' , (err , decode) =>{
      if(err){
        res.status(401).send({message: 'Invalid token'});
      }else{
        req.user = decode;
        next();
      }
    })
  }else{
    res.status(401).send({message: 'No token'});
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};

export {
  generateToken
};