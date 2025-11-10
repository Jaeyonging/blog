import React from 'react'

interface Props {
    title: string
    url: string
    img: JSX.Element    
}

const HomeButton = ({ title, url, img }: Props) => {
    const onClickHandler = () => {
        window.open(url, '_blank')
    }

    return (
        <button
            onClick={onClickHandler}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer transition-colors px-4 py-2 rounded-full text-white font-medium shadow-sm"
        >
            <div className="bg-white text-black bg-opacity-20 p-1 rounded-full">
                {img}
            </div>
            {title}
        </button>
    )
}

export default HomeButton
