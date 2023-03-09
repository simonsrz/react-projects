import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { carsState } from '../atoms'
import { useRecoilState } from "recoil";

function CarsPage() {
    
    let navigate = useNavigate();
    const [cars, setCars] = useRecoilState(carsState)
    return (
        <div className="CarsPage">
            {cars.map(car => (<div>{car.name}
            <button onClick={(e)=>{navigate('/cars/'+car.id)}}>Show details</button>
            </div>))}

            <button onClick={(e) => {
                navigate("/cars/new");
            }}>Add new</button>
        </div>
    );
}

export default CarsPage;