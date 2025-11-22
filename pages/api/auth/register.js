import dbConnect from '../../../lib/mongoose.js';
import User from '../../../models/User.js';
import { hashPassword, signToken } from '../../../utils/auth.js';

export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  try {
    const { name,email,password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: 'Missing fields' });

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: 'User exists' });

    const hashed = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashed
    });

    const token = signToken({ id: user._id });

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch(err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}
