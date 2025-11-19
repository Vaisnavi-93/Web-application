import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const router = useRouter();
  async function handle(e){
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login',{ email,password });
      if (data?.token) localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch(err){
      alert(err.response?.data?.message || 'Invalid credentials');
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <form onSubmit={handle} className='card p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-4'>Sign in</h2>
        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' className='mb-3 p-3 border rounded w-full' />
        <input required type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' className='mb-4 p-3 border rounded w-full' />
        <button className='w-full p-3 rounded bg-accent text-white'>Login</button>
      </form>
    </div>
  );
}
