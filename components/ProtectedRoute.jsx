import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function ProtectedRoute({ children }){
  const router = useRouter(); const [ok,setOk]=useState(false);
  useEffect(()=>{
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (!token) router.replace('/login'); else setOk(true);
  },[]);
  if (!ok) return null;
  return children;
}
