// Assuming you have the necessary imports and setup
import jwt from "jsonwebtoken"
import dotev from 'dotenv'
dotev.config()
export const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization'); // Assuming you are passing the token in the Authorization header

    if (!token) {
      // Token not found, user is not authenticated
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.secret_key); // Replace 'your_secret_key' with your actual secret key

    // Find the user based on the decoded token
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      // User not found, token is invalid or expired
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    // Attach the user and token to the request object for further use
    req.user = user;
    req.token = token;

    next(); // Move to the next middleware or route handler
  } catch (error) {
    // Error while verifying the token
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
