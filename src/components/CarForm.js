import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
        //    dispatch(changeName(''));
        //    dispatch(changeCost(0));
    }

    return (
        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <form onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                        value={name}
                        onChange={handleNameChange}
                        type='text' />
                </div>
                <div className="rounded-md shadow-sm -space-y-px mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cost</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
                        value={cost || ''}
                        onChange={handleCostChange}
                        type='number' />
                </div>
                <div className='mt-5'>
                    <button className='group relative w-full flex justify-center 
                    py-2 px-4 border text-md font-bold
                    rounded-md text-white bg-indigo-600'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm
