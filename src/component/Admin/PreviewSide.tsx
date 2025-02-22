import React from 'react'
import { decodeEntities } from '../../util/util'

interface Props {
    summary: string
}

const PreviewSide = ({ summary }: Props) => {
    return (
        <div className='ql-editor'>
            <div dangerouslySetInnerHTML={{ __html: decodeEntities(summary) }} />
        </div>
    )
}

export default PreviewSide
