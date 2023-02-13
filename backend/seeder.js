import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
// Data Seeder file
import teckPerson from "./data/techPerson.js";
import Customer from "./models/customerModel.js";
import TechPerson from "./models/techPersonModel.js";
import Ticket from "./models/ticketModel.js";
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Customer.deleteMany();
        await TechPerson.deleteMany();
        await Ticket.deleteMany();


        await TechPerson.insertMany(teckPerson);
        
        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Customer.deleteMany();
        await TechPerson.deleteMany();
        await Ticket.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}