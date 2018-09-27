import {
    DO_SUBMIT,ADD_SUBMIT,USTAD_NAME
} from '../actions/types';

const INITIAL_STATE = {
    name:'Amir',
    age:'24',
    donorName:'',
    nameustad:'ISHAQ USTAD'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DO_SUBMIT:
            return { ...state,name:action.payload };
            break;
        case ADD_SUBMIT:
            return { ...state,donorName:action.payload };
            break;
        case USTAD_NAME:
            return{...state,nameustad:action.payload}
            break;
        default:
                return state;
    }
};