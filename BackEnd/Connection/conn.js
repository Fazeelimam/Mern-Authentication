// import mongoose from "mongoose";

// const ConnectDB= async()=>{
//     try {
//         mongoose.connect('mongodb://127.0.0.1:27017/Auththentication');
//         console.log("MongoDB Connected")
//     } catch (error) {
//         console.error("Connection Error in MongoDB",error.message);
//         throw error;   
//     }
// }
// export default ConnectDB;


import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const ConnectDB = async () => {
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }

    if (!cached.promise) {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined');
        }

        console.log('🔄 Connecting to MongoDB...');

        cached.promise = mongoose.connect(mongoURI, {
            // Removed bufferCommands: false - this was causing the issue
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        }).then((mongoose) => {
            console.log('✅ MongoDB connected!');
            return mongoose;
        }).catch((err) => {
            console.error('❌ Connection failed:', err.message);
            cached.promise = null; // Reset on failure
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

export default ConnectDB;