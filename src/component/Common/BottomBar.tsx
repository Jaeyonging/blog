import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const BottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[60px] bg-black text-white border-t-2 border-indigo-500">
            <div className="flex justify-around items-center h-full">
                <FaGithub className="text-[20px] hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://github.com/jaeyonging', '_blank')}/>
                <FaLinkedin className="text-[20px] hover:text-gray-500 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/jaeyong-choi-a38b86268/', '_blank')}/>
            </div>
        </div>
    )
}

export default BottomBar
