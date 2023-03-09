import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carsState } from '../atoms'
import { useRecoilState } from "recoil";
import Error404Page from './Error404Page';

function CarIdPage() {
    let navigate = useNavigate();

    const {id} = useParams();
    const [cars, setCars] = useRecoilState(carsState)
    const currCar = cars.find(car => car.id == id)
    if(!currCar){
       return <Error404Page/> 
    }
    return (
        <div className="CarIdPage">
            <span>{JSON.stringify(currCar)}</span>
        </div>
    );
}

export default CarIdPage;