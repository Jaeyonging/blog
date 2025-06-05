import React from 'react'
import { decodeEntities } from '../../util/util'
import ReactQuill from 'react-quill';

interface Props {
    content: string;
}

const ContentBody = ({ content }: Props) => {
    return (
        <div className='min-h-[70vh] p-2'>
            <ReactQuill value={content} readOnly={true} theme="bubble" />
        </div>
    )
}

export default ContentBody
