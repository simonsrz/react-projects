import React, {Key, useState} from 'react';
import {Car} from './data/Car';
import './CarListItemComponent.css';

type TProps = {
    car: Car;
    removeCar: (x: Key)=>void;
    editPrice: (x: Key, y: number)=>void;
}

const CarListItemComponent = (props: TProps) =>{
    const [isEditing, setEditing] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(0);

    const carEdit = () =>{
        if(isEditing === false){
            setEditing(true);
            setCurrentPrice(props.car.pricePerDay);
        }else{
            props.editPrice(props.car.id, currentPrice);
            setEditing(false);
        }
    }

    const editCarDelete = () =>{
        setEditing(false);
        props.removeCar(props.car.id);
    }

    return (
        <div id='carElement'>
            <div id="carImg">
                <img src={props.car.image} alt="" id='image'/>
            </div>
            <div id="carName">
                <p>{props.car.name.toUpperCase()}</p>
            </div>
            <div id="carInfo">
                <p>{props.car.seats} SEATS</p>
                <p>{props.car.doors} DOORS</p>
                {props.car.AC ? <p>AIR CONDITIONING</p>:<p>NO AIR CONDITIONING</p>}
            </div>
            {
                isEditing ?
                (
                    <div id='editPanel'>
                        <p>PRICE PER DAY</p>
                        <input type="text" id="priceInput" onChange={(e)=>{setCurrentPrice(Number(e.target.value))}} defaultValue={props.car.pricePerDay}/>                  
                        <div>
                            <button id="saveButton" onClick={carEdit}>Save</button>
                            <button id="carDelete" onClick={editCarDelete}>Delete</button>
                        </div>
                    </div>
                ):(
                    <div id='pricePanel'>
                        <p>PRICE PER DAY</p>
                        <p id="price">{props.car.pricePerDay} PLN</p>
                        <div>
                            <button id="carEdit" onClick={carEdit}>Edit</button>
                            <button id="carDelete" onClick={()=>props.removeCar(props.car.id)}>Delete</button>
                        </div>
                    </div>
                )
            }      
        </div>
    );
}

export default CarListItemComponent;