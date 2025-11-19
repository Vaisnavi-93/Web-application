import Link from 'next/link';
export default function Home(){
  return (
    <div className='min-h-screen flex items-center justify-center p-6'>
      <div className='card p-8 max-w-xl w-full text-center'>
        <h1 className='text-3xl font-bold mb-2'>Next.js CRUD Starter</h1>
        <p className='text-sm text-gray-600 mb-4'>Auth + Tasks/Notes/Posts/Contacts — ready to run</p>
        <div className='flex gap-3 justify-center'>
          <Link href='/register' className='px-4 py-2 rounded bg-accent text-white'>Register</Link>
          <Link href='/login' className='px-4 py-2 rounded border'>Login</Link>
        </div>
      </div>
    </div>
  );
}
