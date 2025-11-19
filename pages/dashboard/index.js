import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Dashboard(){
  return (
    <ProtectedRoute>
      <div>
        <Navbar />
        <main className='p-6 space-y-6'>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className='card p-6'>
            <h1 className='text-2xl font-semibold'>Welcome to your Dashboard</h1>
            <p className='text-sm text-gray-500'>Quick links</p>
            <div className='mt-4 flex gap-4'>
              <Link href='/dashboard/tasks' className='p-3 bg-slate-50 rounded'>Tasks</Link>
              <Link href='/dashboard/notes' className='p-3 bg-slate-50 rounded'>Notes</Link>
              <Link href='/dashboard/posts' className='p-3 bg-slate-50 rounded'>Posts</Link>
              <Link href='/dashboard/contacts' className='p-3 bg-slate-50 rounded'>Contacts</Link>
            </div>
          </motion.div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
