import React, { useState } from 'react'

interface Props{
    tags: string[]
    setTags: (tags: string[]) => void
}

const CustomInputTag = ({tags, setTags}: Props) => {
    const [tagInput, setTagInput] = useState<string>('');

    const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagInput(e.target.value);
      };
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ' && tagInput.trim() !== '') {
          e.preventDefault(); 
          setTags([...tags, tagInput.trim()]);
        setTimeout(() => setTagInput(''), 0);
        }
      };


    return (

        <div className="flex gap-2 items-center">
            <span className="text-[20px] font-bold">태그:</span>
            <input
                type="text"
                value={tagInput}
                onChange={handleTagInput}
                onKeyDown={handleKeyDown}
                className="w-[50%] border-2 border-gray-300 text-black rounded-md p-2"
            />
        </div>
    )
}

export default CustomInputTag
