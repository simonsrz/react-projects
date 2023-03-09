import { selector } from "recoil";
import { LeftCountryCodeState, RightCountryCodeState } from './atoms'
import countries from './countries'
import emptyflag from './emptyflag.jpg'

export const leftCountryNameState = selector({
    key: 'leftCountryNameState',
    get: ({ get }) => {
        const countryCode = get(LeftCountryCodeState);
        const result = countries.find(country => country.code === countryCode)
        if (result) {
            return result.name;
        }
        else {
            return countryCode;
        }
    },
});

export const rightCountryNameState = selector({
    key: 'rightCountryNameState',
    get: ({ get }) => {
        const countryCode = get(RightCountryCodeState);
        const result = countries.find(country => country.code === countryCode)
        if (result) {
            return result.name;
        }
        else {
            return countryCode;
        }
    },
});

export const rightFlagState = selector({
    key: 'rightFlagState',
    get: ({ get }) => {
        const countryCode = get(RightCountryCodeState);
        const result = countries.find(country => country.code === countryCode);
        if (result) {
            return "https://api.fifa.com/api/v3/picture/flags-sq-2/" + countryCode + "?tx=c_fill,g_auto,q_auto,w_70,h_46";
        }else{
            return emptyflag
        }    
    }
});

export const leftFlagState = selector({
    key: 'leftFlagState',
    get: ({ get }) => {
        const countryCode = get(LeftCountryCodeState);
        const result = countries.find(country => country.code === countryCode);
        if (result) {
            return "https://api.fifa.com/api/v3/picture/flags-sq-2/" + countryCode + "?tx=c_fill,g_auto,q_auto,w_70,h_46";
        }else{
            return emptyflag;
        }

    }
});


