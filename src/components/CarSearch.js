import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store/slices/carsSlice';

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase));
    })

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }
    return (
        <div className='w-full text-center flex items-center flex-col gap-5'>
            <h3 className='text-black-600 font-bold text-bold'>My Cars</h3>
            <div className="flex justify-between items-center mb-5 ">
                <label className='block mb-2 text-lg font-bold text-gray-900 dark:text-white'>Search</label>
                <input
                    className='flex border-2 border-gray-200 rounded px-4 py-2 w-80 mx-5'
                    value={searchTerm}
                    onChange={handleSearchTermChange} />
            </div>
        </div>
    )
}

export default CarSearch
