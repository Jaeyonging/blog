import React from 'react'
import { decodeEntities } from '../../util/util'


const fakeData = ['<p>안녕하세요 저는 <u>최재용입니다.</u></p><p><br></p><p>다음과 같은 <em>방법으로 편집을 합니다</em>.</p>']

const ContentBody = () => {
    return (
        <div className='min-h-[70vh]'>
            <div dangerouslySetInnerHTML={{ __html: decodeEntities(fakeData[0]) }} />
        </div>
    )
}

export default ContentBody
