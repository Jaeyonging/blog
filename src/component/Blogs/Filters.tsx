import FilterCard from './FilterCard'

const Filters = () => {
    return (
        <div className='flex flex-col gap-2'>
            <span className='text-[20px] font-bold'>필터</span>
            <div className='flex overflow-x-auto gap-2'>
                <FilterCard title='인기순' keyword='top' />
                <FilterCard title='최신순' keyword='recent' />
                <FilterCard title='핫한 순' keyword='hot' />
            </div>
        </div>
    )
}

export default Filters
