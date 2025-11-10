import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../lotties/logo.json';


const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <div className={`hidden shadow-lg fixed top-0 left-0 w-full h-[60px] sm:flex md:flex items-center justify-between px-4 text-[24px] bg-transparent z-20 transition-opacity duration-300 ease-in-out ${isScrolling ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none ">
                <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </div>

            <div className="flex items-center z-10 w-full justify-between">
                <GiHamburgerMenu onClick={handleOpen} className="z-30 cursor-pointer text-white" />
                <img src={'../logo.png'} alt="logo" className="w-[50px] h-[50px] cursor-pointer" onClick={() => handleClick('/')} />
            </div>

            <div
                className={`absolute top-[60px] left-0 flex flex-col items-center w-full bg-black text-white border-b-2 border-gray-300 transition-all text-[20px] duration-300 ease-in-out transform z-40 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleClick('/blogs')}>Blog</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleClick('/portfolio')}>Portfolio</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleClick('/visitor')}>Visitor</li>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default Topbar;
