import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  title:String,
  content:String,
  createdAt:{type:Date,default:Date.now}
});
export default mongoose.models.Post || mongoose.model('Post', PostSchema);
