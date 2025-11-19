import dbConnect from '../../../lib/mongoose';
import User from '../../../models/User';
import { comparePasswords, signToken } from '../../../utils/auth';
export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end();
  await dbConnect();
  try {
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await comparePasswords(password, user.password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    const token = signToken({ id: user._id });
    res.json({ token, user:{ id:user._id, name:user.name, email:user.email }});
  } catch(err){
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}
