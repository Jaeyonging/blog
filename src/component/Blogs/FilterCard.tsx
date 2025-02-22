import { useSearchParams } from 'react-router-dom'

interface Props {
    title: string
    keyword: string
}

const FilterCard = ({ title, keyword }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedFilter = searchParams.get('filter') || 'recent'
    const handleFilter = () => {
        if (selectedFilter === keyword) {
            searchParams.delete('filter')
        } else {
            searchParams.set('filter', keyword)
        }
        setSearchParams(searchParams)
    }
    return (
        <div className={`bg-cardcolor rounded-[10px] px-3 py-1 ${selectedFilter === keyword ? 'bg-cyan-500 text-white' : ''}`} onClick={handleFilter}>
            <span>{title}</span>
        </div>
    )
}

export default FilterCard
