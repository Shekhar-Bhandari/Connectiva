import jwt from 'jsonwebtoken';

export default async function authMiddleware(req, res, next) {
  try {
    // Getting token from Authorization header 
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Please provide Auth token',
      });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Un-Authorized user',
        });
      } else {
req.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: 'Auth middleware error',
      error: error.message,
    });
  }
}
