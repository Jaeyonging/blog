import React from 'react'

interface Props {
    skill: string;
    progress: number;
    iconUrl: string;
    color: string;
}

const SkillProgress = ({ skill, progress, iconUrl, color }: Props) => {
    return (
        <div className='flex flex-col items-center px-2 py-1 w-[100%] border-[1px] rounded-[10px]'>
            <div className='flex items-center gap-2'>
                <img src={iconUrl} alt={skill} className='w-10 h-10 mb-2' />
                <span className='font-medium'>{skill}</span>
            </div>
            <div className='w-full bg-gray-300 rounded-full h-2 mt-2'>
                <div
                    className={`h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${progress}%`, backgroundColor: color }}
                ></div>
            </div>
            <p className='mt-1 text-sm'>{progress}%</p>
        </div>
    )
}

export default SkillProgress;
