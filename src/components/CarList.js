import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();

    const {cars,name
    } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars: filteredCars,
            name: form.name
        }
    });
    //  console.log(cars);

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) => {
const bold=name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div className="flex items-center justify-center mb-5">
            <div key={car.id} className={`panel ${bold && 'bold'}flex justify-between items-center mb-5 `}>
                <li className='list-none w-2/3 text-left break-normal'>
                    {car.name} - $ {car.cost}
                </li>
                <br />
                <button onClick={() => handleCarDelete(car)}
                    className='bg-red-400 text-black font-bold py-1 px-3 mx-5 rounded '>Delete</button>
            </div>
            </div>
        )
    })
    return (
        <div className=''>
            {renderedCars}
            <hr />

        </div>
    )
}

export default CarList
