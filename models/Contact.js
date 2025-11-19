import mongoose from 'mongoose';
const ContactSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  name:String,
  email:String,
  phone:String,
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
