import {ADD_DONOR} from'../actions/types';


const INITIAL_STATE = {
name:'Fahad Bhai'
} 

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_DONOR:
            return { ...state,name:action.payload };
            break;

        default:
                return state;
    }
};


