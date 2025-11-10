import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

const BottomBar = () => {
    return (
        <div className="hidden bottom-0 left-0 w-full h-[60px] bg-black text-white border-t-2 border-indigo-500 md:fixed sm:fixed">
            <div className="flex justify-around items-center h-full">
                <FaGithub className="text-[20px] hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://github.com/jaeyonging', '_blank')} />
                <RiNotionFill className="text-[20px] hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://cerulean-molecule-f4d.notion.site/1ae79be98cd280ba8eceef74b5ea2ded?pvs=4', '_blank')} />
                <FaLinkedin className="text-[20px] hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/jaeyong-choi-a38b86268/', '_blank')} />
            </div>
        </div>
    );
};

export default BottomBar;
