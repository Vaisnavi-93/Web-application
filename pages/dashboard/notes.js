import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function NotesPage(){
  const [items,setItems]=useState([]); const [title,setTitle]=useState(''); const [body,setBody]=useState(''); const token = typeof window !== 'undefined' && localStorage.getItem('token');
  useEffect(()=>{ fetchItems(); },[]);
  async function fetchItems(){ try{ const res = await axios.get('/api/notes',{ headers:{ Authorization:`Bearer ${token}` }}); setItems(res.data);}catch(e){console.error(e);} }
  async function add(){ try{ const res = await axios.post('/api/notes',{ title, body },{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>[res.data,...prev]); setTitle(''); setBody(''); }catch(e){console.error(e);} }
  async function remove(id){ try{ await axios.delete(`/api/notes/${id}`,{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>prev.filter(i=>i._id!==id)); }catch(e){console.error(e);} }
  return (
    <ProtectedRoute>
      <Navbar />
      <div className='p-6'>
        <div className='card p-4 mb-4'>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Title' className='mb-2 p-2 border rounded w-full' />
          <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder='Body' className='p-2 border rounded w-full' />
          <button onClick={add} className='mt-2 p-2 bg-accent rounded text-white'>Add Note</button>
        </div>
        <div className='grid gap-4'>
          {items.map(t=>(
            <div key={t._id} className='card p-4'>
              <h3 className='font-semibold'>{t.title}</h3>
              <p className='text-sm text-gray-500'>{t.body}</p>
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
