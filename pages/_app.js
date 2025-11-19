import '../styles/globals.css';
import { useEffect } from 'react';
export default function App({ Component, pageProps }){
  useEffect(()=>{
    const t = typeof window !== 'undefined' && localStorage.getItem('theme');
    if (t === 'colorful') document.body.classList.add('theme-colorful');
  },[]);
  return <Component {...pageProps} />;
}
