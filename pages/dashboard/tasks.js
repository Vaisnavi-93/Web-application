import ProtectedRoute from '../../components/ProtectedRoute';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function TasksPage(){
  const [items,setItems]=useState([]); const [title,setTitle]=useState(''); const token = typeof window !== 'undefined' && localStorage.getItem('token');
  useEffect(()=>{ fetchItems(); },[]);
  async function fetchItems(){ try{ const res = await axios.get('/api/tasks',{ headers:{ Authorization:`Bearer ${token}` }}); setItems(res.data);}catch(e){console.error(e);} }
  async function add(){ try{ const res = await axios.post('/api/tasks',{ title, description:'' },{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>[res.data,...prev]); setTitle(''); }catch(e){console.error(e);} }
  async function remove(id){ try{ await axios.delete(`/api/tasks/${id}`,{ headers:{ Authorization:`Bearer ${token}` }}); setItems(prev=>prev.filter(i=>i._id!==id)); }catch(e){console.error(e);} }
  return (
    <ProtectedRoute>
      <Navbar />
      <div className='p-6'>
        <div className='card p-4 mb-4'>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='New task' className='p-2 border rounded w-full' />
          <button onClick={add} className='mt-2 p-2 bg-accent rounded text-white'>Add</button>
        </div>
        <div className='grid gap-4'>
          {items.map(t=>(
            <div key={t._id} className='card p-4 flex justify-between items-center'>
              <div>
                <h3 className='font-semibold'>{t.title}</h3>
                <p className='text-sm text-gray-500'>{new Date(t.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <button onClick={()=>remove(t._id)} className='p-2 text-red-500'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
