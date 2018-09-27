import { combineReducers } from 'redux';
import StudentReducer from './studentReducer';
import DonorReducer from'./donorReducer';
import HellowReducer from'./hellowReducer';


export default combineReducers({
    student:StudentReducer,
    donor:DonorReducer,
    hellow:HellowReducer,
});
