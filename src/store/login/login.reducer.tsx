import { ILoginAction } from "./login.action";
import { LoginConstant } from "../../constants/index.d";

const initialState = {
    pending: false,
    success:false,
    message: {},
    errors:{},
    
}

export const LoginReducer = (state=initialState, action:ILoginAction)=>{
   switch (action.type) {
       case LoginConstant.REQUEST:
           return{
               ...state,
               pending: true,
               success: false,
               message:{
                            body: 'Logging in...'
                        },
               errors:{}
           }
           case LoginConstant.SUCCESS:
            return{
                pending: false,
                success: true,
                message:{
                             body: action.message
                         },
                errors:{}
            }
        case LoginConstant.ERROR:
            return{
                ...state,

                pending: false,
                success: false,
                message:{},
                errors:{
                           body: action.message.toString()
                        }
            }
       default:
           return state;
           
   } 
}