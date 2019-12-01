import { AuthenticationConstant } from "../../constants/index.d";
import { IAuthenticateAction } from "./authentication.action";

const initialState: IAuthenticateAction = {
    type: AuthenticationConstant.UNAUTHENTICATED,
    email : undefined,
    token : undefined,
    verified : false
}

export const AuthenticationReducer = (state:IAuthenticateAction =initialState, action:IAuthenticateAction)=>{
    switch (action.type) {
        case AuthenticationConstant.AUTHENTICATED:
            return{
                ...state,
                type: AuthenticationConstant.AUTHENTICATED,
                email : action.email,
                token : action.token,
                verified : true,
            }
            
        case AuthenticationConstant.UNAUTHENTICATED:
            return{
                type: AuthenticationConstant.UNAUTHENTICATED,
                verified:false
            }
            
        case AuthenticationConstant.UNVERIFIED:
            return{
                ...state,
                type  : AuthenticationConstant.UNVERIFIED,
                email : action.email,
                token : action.token,
                verified : false,
            }
            
        default:
            return state;
    }

} 