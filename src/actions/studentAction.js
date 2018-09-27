import {
    DO_SUBMIT,ADD_SUBMIT,USTAD_NAME
} from './types';


export const doSubmit = () => {
    return {
        type: DO_SUBMIT,
        payload:'fahad'
    }
}

export const addSubmit = () =>{    
    return{
        type: ADD_SUBMIT,
        payload:"DONOR"
    }    
}

export const ustad_name = () =>{    
    return{
        type: USTAD_NAME,
        payload:"Ishaq Ustad"
    }    
}

