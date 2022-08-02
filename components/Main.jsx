import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let us build something epic together!</p>
                    <h1 className='py-4 text-gray-700'>
                        Hello! I am <span className='text-[#5651e5]'>Melvin</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Software Engineer and an Architect
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        My role includes developing, designing, and maintaining applications. I am curious about solving technology problems through designing, developing, and maintaining software products or systems that enable client strategies. I enjoy working in challenging and dynamic environments, and I am versatile in creating and supporting technology solutions that meet requirements from discovery to implementation. I have deep experience in implementing new products and offerings in the Retail and Health industries. 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursoer-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursoer-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursoer-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursoer-pointer hover:scale-105 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;