import { LoginConstant } from '../../constants/index.d';

export interface ILoginAction{
    type: LoginConstant,
    email?: string,
    password?: string,
    message?: any
    resolve?: ()=>void,
    reject?: ()=>void,
}

export const Success = (message:any):ILoginAction=>({
    type:LoginConstant.SUCCESS, 
    message:message
});

export const loginRequest = (payload:any, resolve:any,reject:any):ILoginAction=>{
    return({
        type:LoginConstant.REQUEST, 
        email: payload.email,
        password: payload.password,
        resolve: resolve,
        reject: reject
    });
};

export const Error = (message:any):ILoginAction=>({
    type:LoginConstant.ERROR, 
    message:message
});
