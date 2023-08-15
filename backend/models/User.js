import mongoose from "mongoose";

const userSchema = new mongoose.Schema(  //defines the structure inside user
  {
    username: {
      type: String,
      required: true,  // req:true means the info is required in order for the doc to be valid
      unique: true,    //need to be unique
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
