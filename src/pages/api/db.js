// import { MongoClient } from 'mongodb';

// const uri = 'mongodb+srv://pawyyyk:123abc123@mern.mrpenjn.mongodb.net/'; 
// const dbName = 'dlsud-lms'; 

// let cachedClient = null;

// export async function connectToDatabase() {
//   if (cachedClient && cachedClient.isConnected()) {
//     return cachedClient;
//   }

//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   await client.connect();
//   cachedClient = client;
//   return client;
// }

// export async function disconnectFromDatabase() {
//   if (cachedClient && cachedClient.isConnected()) {
//     await cachedClient.close();
//     cachedClient = null;
//   }
// }

// export function getCollection(collectionName) {
//   const client = cachedClient || new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   const database = client.db(dbName);
//   return database.collection(collectionName);
// }
