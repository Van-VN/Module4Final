import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  name: String,
  class: String,
  practice: Number,
  theory: Number,
  rate: String,
  des: String,
});

const Student = model("Student Management", StudentSchema);

export default Student;
