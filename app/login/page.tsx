'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useritems } from '@/data/user';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleSubmit = () => {
    const user = useritems.find((user) => user.username === name && user.password === password);
    if(user) {
      router.replace('/');
     } else {
      alert('Invalid name or password');
    }
  }

  return (
  <div className="bg-home2 bg-cover bg-center min-h-screen w-full flex flex-col justify-center ">
     <div className=" md:w-100 w-full mx-auto bg-white border border-gray-500  rounded-lg shadow-lg text-black flex flex-col gap-2 items-center p-4 mt-30 relative pt-30"> 
    <div className="rounded-full overflow-hidden w-50 h-50 absolute -top-25 ">
      <Image src="https://i.pinimg.com/736x/53/95/fb/5395fb63f3609044048a4441e8b01d9a.jpg"
      loading="eager"
      alt="Logo"
       width={100} height={100} className="w-full"/>
    </div>
     <h1 className="text-xl font-bold text-center">KyStore</h1>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border border-gray-300 rounded mb-2 w-full"/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border border-gray-300 rounded mb-2 w-full"/>
    <button onClick={handleSubmit} className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full">Login</button>
        </div>
  </div>
  );
}
export default LoginPage;