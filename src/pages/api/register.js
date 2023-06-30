// import { connectToDatabase } from '../../lib/db';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, password } = req.body;

//     if (password !== req.body.re_password) {
//       return res.status(400).json({ error: 'Passwords do not match' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ error: 'Password must be at least 6 characters' });
//     }

//     try {
//       const client = await connectToDatabase();
//       const db = client.db();

//       const result = await db.collection('users').insertOne({
//         name: name,
//         email: email,
//         password: password,
//       });

//       console.log(result);

//       return res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'An error occurred during registration' });
//     }
//   } else {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }
// }
