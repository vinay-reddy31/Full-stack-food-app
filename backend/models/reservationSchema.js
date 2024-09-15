import mongoose from "mongoose";
import validator from 'validator';

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name mush contain atleast 3 characters!"],
        maxLength:[30, "First name cannot exceed 30 charcters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name mush contain atleast 3 characters!"],
        maxLength:[30, "Last name cannot exceed 30 charcters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "provide a valid email"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10, "Phone number must contain only 10 digits"],
        maxLength:[10, "Phone number must contain only 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
});

export const Reservation=mongoose.model('Reservation',reservationSchema);