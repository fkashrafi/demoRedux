import {DEMO_NAME,USER_NAME} from './types'


export const myfunction = () =>{
    return {
        type:DEMO_NAME,
        payload:'3vi Fahad'        
    }
}
export const userInput = (value) =>{
    return{
        type:USER_NAME,
        payload:value
    }
}