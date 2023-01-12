import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className={'flex items-center justify-between space-x-2 font-bold- px-10 py-5'}>
            <div className={'flex items-center space-x-2'}>
                <Link href={'/'}>
                    <Image src={'https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg'} alt={'logo'} width={50} height={50} className={'rounded-full'}/>
                </Link>
                <h1>BLOG</h1>
            </div>
            <div>
                <Link href={'/'} className={'px-5 text-sm md:text-base bg-gray-900 text-amber-400 flex items-center rounded-full text-center'}>
                    Some link here
                </Link>
            </div>
        </header>
    );
};

export default Header;