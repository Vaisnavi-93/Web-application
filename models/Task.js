import mongoose from 'mongoose';
const TaskSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  title:String,
  description:String,
  status:{type:String,default:'todo'},
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
