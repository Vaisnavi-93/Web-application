import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function PostsPage(){
  const [items,setItems]=useState([]); const [title,setTitle]=useState(''); const [content,setContent]=useState(''); const token = typeof window !== 'undefined' && localStorage.getItem('token');
  useEffect(()=>{ fetchItems(); },[]);
  async function fetchItems(){ try{ const res = await axios.get('/api/posts',{ headers:{ Authorization:`Bearer ${token}` }}); setItems(res.data);}catch(e){console.error(e);} }
  async function add(){ try{ const res = await axios.post('/api/posts',{ title, content },{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>[res.data,...prev]); setTitle(''); setContent(''); }catch(e){console.error(e);} }
  async function remove(id){ try{ await axios.delete(`/api/posts/${id}`,{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>prev.filter(i=>i._id!==id)); }catch(e){console.error(e);} }
  return (
    <ProtectedRoute>
      <Navbar />
      <div className='p-6'>
        <div className='card p-4 mb-4'>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Title' className='mb-2 p-2 border rounded w-full' />
          <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder='Content' className='p-2 border rounded w-full' />
          <button onClick={add} className='mt-2 p-2 bg-accent rounded text-white'>Add Post</button>
        </div>
        <div className='grid gap-4'>
          {items.map(t=>(
            <div key={t._id} className='card p-4'>
              <h3 className='font-semibold'>{t.title}</h3>
              <p className='text-sm text-gray-500'>{t.content}</p>
              <div className='mt-2 flex gap-2'>
                <button onClick={()=>remove(t._id)} className='p-2 text-red-500'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
