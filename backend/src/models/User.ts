import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = model("users", UserSchema);

export default User;
