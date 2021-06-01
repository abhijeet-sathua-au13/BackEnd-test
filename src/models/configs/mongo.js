import mongoose from "mongoose";

const mongoUri = `mongodb+srv://Abhijeet-Sathua:8797218788Aa@cluster0.ka2fe.mongodb.net/mediaUsers?retryWrites=true&w=majority`;

async function mongoInit() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connect succesfully");
  } catch (error) {
    console.log(error.message);
  }
}

export default mongoInit;
