import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userData from './data/userData.js';
import issueData from './data/issueData.js';
import User from './models/userModel.js';
import Issue from './models/issueModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Issue.deleteMany();

    await User.insertMany(userData);
    await Issue.insertMany(issueData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Issue.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
