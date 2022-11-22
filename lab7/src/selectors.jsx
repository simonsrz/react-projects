import { selector } from "recoil";
import { LeftCountryCodeState, RightCountryCodeState } from './atoms'


export const leftCountryNameState = selector({
    key: 'leftCountryNameState',
    get: ({ get }) => {
        return '';
    },
});

export const rightCountryNameState = selector({
    key: 'rightCountryNameState',
    get: ({ get }) => {
        return '';
    },
});

export const rightFlagState = selector({
    key: 'rightFlagState',
    get: ({ get }) => {
        const countryCode = get(RightCountryCodeState);
        if (countryCode !== 'POL')
            return "https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg";
        else {
            return "https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/" + countryCode + "?tx=c_fill,g_auto,q_auto,w_70,h_46";
        }

    },
});

export const leftFlagState = selector({
    key: 'leftFlagState',
    get: ({ get }) => {
        const countryCode = get(LeftCountryCodeState);

        return 'https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/' + countryCode + '?tx=c_fill,g_auto,q_auto,w_70,h_46';
    }
});


