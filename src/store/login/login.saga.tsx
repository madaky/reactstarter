import {LoginConstant, AuthenticationConstant} from '../../constants/index.d';
import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { Success,  Error } from './login.action';
import { UnAuthenticated, Authenticated } from '../authentication/authentication.action';
import { API } from '../../api/api';
import { PathApi } from '../../api/path.api';
import { push } from 'connected-react-router';
import { startSubmit, stopSubmit, SubmissionError } from 'redux-form';


const loginApi = (email:string, password:string)=>{
    let sleep =(ms:number)=> new Promise(resolve =>setTimeout(resolve,ms));
    return sleep(10).then(()=>{
        return new Promise(function(resolve, rej){
            return API.get(PathApi.user)
           .then((res)=>{
                resolve({email:email, token:'adasdsa!@dssfd',message:"logni Success"});
                // return();
            //    return rej({_error:'Eror Requesting'});
           }).catch((err)=>{
               console.log(err);
                return err;
           });
        })
        
    });
    
};

export function* logout(){
    while(true){
        yield take(AuthenticationConstant.UNAUTHENTICATED);
        
            localStorage.removeItem('token');
            localStorage.removeItem('state');
        
        yield put(push('/login'));
    }

    
};

function* loginProcess(email:string, password:string){
    let loginInfo;
    try {

        yield put(startSubmit('login'));

        loginInfo = yield call(loginApi, email, password);

        yield put(Authenticated(loginInfo));

        yield put(Success({type:Success, message:loginInfo.message}));

        localStorage.setItem('token', JSON.stringify(loginInfo.token));

        yield put(stopSubmit('login'));

        yield put(push('/dashboard'));
        
    } catch (error) {
        yield put(stopSubmit('login', error));
        yield put({type:Error, error});
        
        // yield call(reject, new SubmissionError({ username: 'Username doesn\'t exist', password: 'Please enter your password' }));

        // throw new SubmissionError({_error:error});
    } finally{
        if(yield cancelled()){
            yield put(push('/login'));
        };
    }
    return loginInfo;

};

export function* loginWatcher(){
    while(true){
        
        const {email, password} = yield take(LoginConstant.REQUEST);
        
        const task = yield fork(loginProcess, email,password);
        const action  = yield take([UnAuthenticated, Error]);

        if(action.type === AuthenticationConstant.UNAUTHENTICATED){
            yield cancel(task);
        }
        
        //yield call(logout)
    }
}

