// import { connectToDatabase } from './db';
// import User from '../../models/user'; // Import the user schema

// // Connect to MongoDB
// connectToDatabase();

// // API route for user registration
// export default async function registerUser(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { email, password, name } = req.body;

//       // Create a new user using the schema
//       const user = new User({ email, password, name });

//       // Save the user to the database
//       await user.save();

//       res.status(201).json({ message: 'User registered successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
