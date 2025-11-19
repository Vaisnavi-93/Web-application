import dbConnect from '../../../../lib/mongoose';
import Task from '../../../../models/Task';
import { verifyToken } from '../../../../utils/auth';
export default async function handler(req,res){
  await dbConnect();
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
  const userId = decoded.id;
  const { id } = req.query;
  if (req.method === 'GET'){
    const item = await Task.findOne({ _id:id, userId });
    return res.json(item);
  }
  if (req.method === 'PUT'){
    const updated = await Task.findOneAndUpdate({ _id:id, userId }, req.body, { new:true });
    return res.json(updated);
  }
  if (req.method === 'DELETE'){
    await Task.findOneAndDelete({ _id:id, userId });
    return res.json({ success:true });
  }
  res.status(405).end();
}
