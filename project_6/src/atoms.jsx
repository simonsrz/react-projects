import { atom } from "recoil";

export const LeftCountryCodeState = atom({
    key: 'LeftCountryCodeState',
    default: '',
});

export const RightCountryCodeState = atom({
    key: 'RightCountryCodeState',
    default: '',
});

export const StadiumState = atom({
    key: 'StadiumState',
    default: '',
});

export const LeftTeamScoreState = atom({
    key: 'LeftTeamScoreState',
    default: 0,
});

export const RightTeamScoreState = atom({
    key: 'RightTeamScoreState',
    default: 0,
});