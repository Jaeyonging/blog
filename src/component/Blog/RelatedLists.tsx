import React, { useState } from 'react'
import RelatedCard from './RelatedCard'

const relatedPosts = [
    { id: 1, title: 'React 기초', date: '2025-03-01', category: ['REACT', 'NEXTJS', 'TYPESCRIPT'] },
    { id: 2, title: 'Next.js 가이드', date: '2025-03-02', category: ['NEXTJS'] },
    { id: 3, title: 'JavaScript 팁', date: '2025-03-03', category: ['JavaScript'] },
    { id: 4, title: 'TypeScript 소개', date: '2025-03-04', category: ['TypeScript'] },
    { id: 5, title: 'Redux 사용법', date: '2025-03-05', category: ['Redux'] },
    { id: 6, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 7, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 8, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 9, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 10, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 11, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
    { id: 12, title: 'React Hooks', date: '2025-03-06', category: ['REACT'] },
];

const RelatedLists = () => {
    const [page, setPage] = useState(1)
    const itemsPerPage = 5;
    const totalPages = Math.ceil(relatedPosts.length / itemsPerPage);
    const currentPosts = relatedPosts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handlePageClick = (pageNumber: number) => {
        setPage(pageNumber);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    return (
        <div className='flex flex-col gap-2'>
            {currentPosts.map((post) => (
                <RelatedCard key={post.id} title={post.title} date={post.date} category={post.category} />
            ))}
            <div className='flex justify-between items-center gap-2'>
                <button onClick={handlePrev} disabled={page === 1} className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300' : 'bg-indigo-500 text-white'}`} >
                    이전
                </button>
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
                    <button key={pageNumber} onClick={() => handlePageClick(pageNumber)} className={`px-3 py-1 rounded ${page === pageNumber ? 'text-indigo-600' : 'text-white'}`}>
                        {pageNumber}
                    </button>
                ))}
                <button onClick={handleNext} disabled={page === totalPages} className={`px-4 py-2 rounded ${page === totalPages ? 'bg-gray-300' : 'bg-indigo-500 text-white'}`} >
                    다음
                </button>
            </div>
        </div>
    )
}

export default RelatedLists
