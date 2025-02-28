import React from 'react'
import { decodeEntities } from '../../util/util'

interface Props{
    content: string;
}

const ContentBody = ({content}: Props) => {
    return (
        <div className='min-h-[70vh] p-2'>
            <div dangerouslySetInnerHTML={{ __html: decodeEntities(content) }} />
        </div>
    )
}

export default ContentBody
