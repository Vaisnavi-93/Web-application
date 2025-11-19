import dbConnect from '../../../lib/mongoose';
import Note from '../../../models/Note';
import { verifyToken } from '../../../utils/auth';
export default async function handler(req,res){
  await dbConnect();
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
  const userId = decoded.id;
  if (req.method === 'GET') return res.json(await Note.find({ userId }).sort({ createdAt:-1 }));
  if (req.method === 'POST') return res.status(201).json(await Note.create({ userId, ...req.body }));
  res.status(405).end();
}
