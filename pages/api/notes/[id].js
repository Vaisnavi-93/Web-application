import dbConnect from '../../../../lib/mongoose';
import Note from '../../../../models/Note';
import { verifyToken } from '../../../../utils/auth';
export default async function handler(req,res){
  await dbConnect();
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
  const userId = decoded.id; const { id } = req.query;
  if (req.method === 'PUT') return res.json(await Note.findOneAndUpdate({ _id:id, userId }, req.body, { new:true }));
  if (req.method === 'DELETE') { await Note.findOneAndDelete({ _id:id, userId }); return res.json({ success:true }); }
  if (req.method === 'GET') return res.json(await Note.findOne({ _id:id, userId }));
  res.status(405).end();
}
