import React from 'react'
import { decodeEntities } from '../../util/util'
import ReactQuill from 'react-quill'

interface Props {
    summary: string
}

const PreviewSide = ({ summary }: Props) => {
    return (
        <div className='ql-editor'>
            <ReactQuill value={summary} readOnly={true} theme="bubble" />
            {/* <div dangerouslySetInnerHTML={{ __html: decodeEntities(summary) }} /> */}
        </div>
    )
}

export default PreviewSide
