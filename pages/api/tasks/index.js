import dbConnect from '../../../lib/mongoose';
import Task from '../../../models/Task';
import { verifyToken } from '../../../utils/auth';
export default async function handler(req,res){
  await dbConnect();
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
  const userId = decoded.id;
  if (req.method === 'GET'){
    const items = await Task.find({ userId }).sort({ createdAt:-1 });
    return res.json(items);
  }
  if (req.method === 'POST'){
    const doc = await Task.create({ userId, ...req.body });
    return res.status(201).json(doc);
  }
  res.status(405).end();
}
