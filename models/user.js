const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    date: {
            type: Date,
            default: Date.now
          },
    books: [
        {
          type: Schema.Types.ObjectId,
          ref: "Library"
        }
      ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
