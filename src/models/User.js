import mongoose, { Schema } from "mongoose";

///todo complete schema 's parameters likes required
const userSchema = new Schema({
    email: String,
    password: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;