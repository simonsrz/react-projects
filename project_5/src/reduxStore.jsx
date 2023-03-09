import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { boardReducer } from './boardReducer';


 const store = createStore(boardReducer, composeWithDevTools());

 export default store;