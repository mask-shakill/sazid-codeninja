import mongoose from "mongoose";

interface Content {
  title: string;
  desc?: string; // Optional property
}

const contentSchema = new mongoose.Schema<Content>({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
});

const Test = mongoose.models.Test || mongoose.model("Test",contentSchema)
export default Test
