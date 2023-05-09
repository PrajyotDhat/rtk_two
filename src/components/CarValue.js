import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {

    const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
        data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
            .reduce((acc, car) => acc + car.cost, 0)
    );


    // let cost=0;
    // for(let car of filteredCars){
    //     cost +=car.cost
    // }
    // return cost;

    return (
        <div className='flex items-center justify-center mb-5 text-black-600 font-bold text-bold'>
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue
