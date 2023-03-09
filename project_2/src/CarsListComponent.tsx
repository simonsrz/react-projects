import React, {useState} from 'react';
import {CARS} from './data/Car';
import CarListItemComponent from './CarListItemComponent';
import {Key} from "react";
import './CarsListComponent.css'


const CarsListComponent = () =>{
    const [cars, setCars] = useState(CARS);
    const [filter, setFilter] = useState("");

    const filterList = () =>{
        const newFilter = document.getElementById("searchInput") as HTMLInputElement;
        setFilter(newFilter.value);
    }
    
    const removeCar = (carId: Key):void =>{
        setCars(cars.filter((car)=>{return car.id !== carId;}))
    }

    const editPrice = (carId: Key, newPrice: number):void=>{
        setCars(cars.map(car=>{
            if(car.id === carId){
                return {...car, pricePerDay: newPrice};
            }else{
                return car;
            }
        }));
    }

    return (
        <div id="carsList">
            <div id="searchBar">
                <input type="text" defaultValue="" id="searchInput" placeholder='Search car...'/>
                <button id="searchButton" onClick={filterList}>Search</button>
            </div>
            <div>
                {cars.filter(car=>{return car.name.toLowerCase().includes(filter.toLowerCase());}).map(car => (<CarListItemComponent editPrice={editPrice} removeCar={removeCar} car={car}/>))}
            </div>
        </div>
    );
}

export default CarsListComponent;