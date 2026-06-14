import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

// 검색어를 ?q= 로 반영한다. (BlogLists가 q를 읽어 클라이언트단에서 필터링)
const SearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState(searchParams.get('q') || '')

    useEffect(() => {
        const timer = setTimeout(() => {
            const next = new URLSearchParams(searchParams.toString())
            if (value.trim()) {
                next.set('q', value.trim())
            } else {
                next.delete('q')
            }
            setSearchParams(next, { replace: true })
        }, 200)
        return () => clearTimeout(timer)
    }, [value])

    return (
        <div className='flex items-center gap-2 bg-cardcolor rounded-[10px] px-3 py-2'>
            <BsSearch className='text-gray-400 shrink-0' />
            <input
                className='bg-transparent outline-none w-full text-white placeholder-gray-400'
                placeholder='제목, 설명, 태그 검색'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
