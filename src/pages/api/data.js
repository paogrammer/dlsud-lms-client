import { connectToDatabase, disconnectFromDatabase, getCollection } from './db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await connectToDatabase();
      const collection = getCollection('dlsud-lms');
      const data = await collection.find().toArray();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await disconnectFromDatabase();
    }
  }
}
