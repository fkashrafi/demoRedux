import { DEMO_NAME,USER_NAME } from '../actions/types';

const INITIAL_STATE = {
    name:'Amir',
    userName:'',
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DEMO_NAME:
            return { ...state,name:action.payload };
            break;
        case USER_NAME:
            return{ ...state,userName:action.payload };
            break;
        default:
                return state;
    }
};