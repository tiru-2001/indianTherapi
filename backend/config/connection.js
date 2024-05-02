import mongoose from "mongoose";
import Colors from "colors";
let connected = false;
const connectToDb = async () => {
  try {
    if (!connected) {
      const result = await mongoose.connect(process.env.MONGOOSE_CONNECTION);
      connected = true;
      console.log("connected".bgGreen);
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectToDb;
