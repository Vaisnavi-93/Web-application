import { useRouter } from 'next/router';
export default function Navbar(){
  const router = useRouter();
  function logout(){ localStorage.removeItem('token'); router.push('/login'); }
  function toggleTheme(){
    if (typeof window === 'undefined') return;
    const is = document.body.classList.toggle('theme-colorful');
    localStorage.setItem('theme', is ? 'colorful' : 'minimal');
  }
  return (
    <header className='w-full flex items-center justify-between p-4'>
      <div className='flex items-center gap-3'>
        <div className='text-xl font-bold'>MyApp</div>
        <nav className='hidden md:flex gap-2 text-sm text-gray-600'>
          <a href='/dashboard/tasks'>Tasks</a>
          <a href='/dashboard/notes'>Notes</a>
          <a href='/dashboard/posts'>Posts</a>
          <a href='/dashboard/contacts'>Contacts</a>
        </nav>
      </div>
      <div className='flex items-center gap-3'>
        <button onClick={toggleTheme} className='px-3 py-1 border rounded'>Theme</button>
        <button onClick={logout} className='px-3 py-1 bg-red-50 rounded'>Logout</button>
      </div>
    </header>
  );
}
