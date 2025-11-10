import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import HomeButton from './HomeButton';

const PreView = () => {
    return (
        <div className="h-full flex flex-col justify-center gap-8 px-10 sm:hidden md:hidden">
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Jaeyonging's Blog</h1>
                <p className="text-gray-600 text-lg mb-6">
                    Welcome to <span className="font-semibold">Jaeyonging</span> Blog.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <HomeButton title="GitHub" img={<FaGithub size={20} />} url="https://github.com/jaeyonging" />
                    <HomeButton title="Blog" img={<FaUserCircle size={20} />} url="http://jaeyonging.com" />
                    <HomeButton title="Portfolio" img={<RiNotionFill size={20} />} url="https://cerulean-molecule-f4d.notion.site/1ae79be98cd280ba8eceef74b5ea2ded?pvs=4" />
                </div>
            </div>
        </div>
    )
}

export default PreView
