import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-5 mx-24 '>
            <Link href={'/'} className='font-bold text-2xl'>Sazid CodeNinja</Link>
            <ul className='flex items-center gap-x-8'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Resources</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/'}>Travel</Link>
                <Link href={'/'}>About</Link>
                
            </ul>
             <button className='bg-blue-400 px-5 py-2 rounded-lg text-white font-bold'>Subscribe</button>
        </nav>
    );
};

export default Navbar;