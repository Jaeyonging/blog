import React from 'react'

interface Props {
    groupedData: any
    tag: string
}

const CodeCard = ({ groupedData, tag }: Props) => {
    return (
        <div className='mt-4'>
            <h2 className='text-lg font-bold border-[1px] rounded-[10px] p-2'>태그 이름: {tag}</h2>
            {groupedData[tag].map((item: any) => (
                <div key={item.id} className='pl-4'>
                    <span>{item.name}</span> - <span>{item.ext}</span>
                </div>
            ))}
        </div>
    )
}

export default CodeCard
