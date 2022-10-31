import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillHeart } from 'react-icons/ai';

export default function Contact() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>

        <Head>
            <title>Johannas Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="" />
        </Head>

            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
                
                <nav className='py-10 mb-12 flex justify-between sticky top-0 z-10'>
                    <h1 className='text-teal-600 font-bold text-xl dark:text-white'>Johanna Fogel</h1>
                    <ul className='flex items-center'>
                        <li>
                            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
                        </li>
                        <li>
                            <Link className='bg-gradient-to-r from-teal-600 to-teal-900 text-white px-4 py-2 rounded-md ml-8 cursor-pointer' href='/'>Back</Link>
                        </li>
                    </ul>
                </nav>
                
                <section className='min-h-screen'>

                    <div className='text-center p-10'>
                        <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Wanna get in touch?</h2>
                        <h3 className='text-2xl py-2 md:text-3xl'>Got a few options to contact me!</h3>
                        <p className='text-md py-5 leading-6 text-gray-800 md:text-xl mx-auto dark:text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis risus, iaculis pellentesque accumsan ut, ultrices tempor urna. 
                        </p>
                    </div>

                    <div className='text-5xl flex justify-center gap-16 py-3 text-teal-900 '>
                        <Link href="https://www.linkedin.com/in/johanna-fogel-47209670/"><AiFillLinkedin /></Link>
                        <Link href="https://github.com/Vitoleander"><AiFillGithub /></Link>
                        <Link href="#"><AiFillHeart /></Link>
                    </div>

                    <footer className='p-10 flex justify-between'>
                        <h1 className='text-xl dark:text-white'>Lorem ipsum © 2022</h1>
                        <ul className='flex items-center dark:text-teal-600'>
                            <li>
                                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
                            </li>
                            <li className='pl-5'>
                                <AiFillHeart className='cursor-pointer text-2xl'/>
                            </li>
                        </ul>
                    </footer>

                </section>
            </main>
        </div>
    )
}