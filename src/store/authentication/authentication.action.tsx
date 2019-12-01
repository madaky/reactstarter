import { AuthenticationConstant } from '../../constants/index.d';

export interface IAuthenticateAction{
    type         : AuthenticationConstant,
    email?       : string,
    token ?      : string,
    verified     : boolean,
}

export const Authenticated = (payload:any):IAuthenticateAction=>({
    type: AuthenticationConstant.AUTHENTICATED,
    token       : payload.token,
    email       : payload.email,
    verified    : true
});

export const UnVerified = (payload:any):IAuthenticateAction=>({
    type    : AuthenticationConstant.UNVERIFIED,
    token   : payload.token,
    email   : payload.email,
    verified : false

});

export const UnAuthenticated = (payload?:any):IAuthenticateAction=>({
    type    :   AuthenticationConstant.UNAUTHENTICATED,
    verified : false,
});

