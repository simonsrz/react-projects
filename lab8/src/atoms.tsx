import { atom } from "recoil";
import { CARS } from './Car'

export const carsState = atom({
    key: 'carsState',
    default: CARS,
});

