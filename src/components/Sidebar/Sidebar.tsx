import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className='bg-gray-800 flex flex-col w-60 h-screen fixed top-0 left-0 z-0 py-5 px-10'>
            <h1 className='pb-10 font-bold text-2xl'>Dashboard</h1>
            <ul className='flex flex-col gap-y-8'>
                <Link href={'/dashboard'}>Home</Link>
                <Link href={'/dashboard/blog'}>Blog</Link>
                <Link href={'/dashboard/login'}>Login</Link>
                <Link href={'/dashboard'}>Travels</Link>
                <Link href={'/dashboard'}>All Resources</Link>
                <Link href={'/dashboard/setting'}>Setting</Link>

            </ul>
        </aside>
    );
};

export default Sidebar;