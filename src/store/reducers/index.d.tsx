import {reducer as form} from 'redux-form';
import { combineReducers } from 'redux';
import { AlertReducer } from './alert.reducer';
import {AuthenticationReducer} from '../authentication/authentication.reducer';
import { LoginReducer } from '../login/login.reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export const RootReducer = ( history:History )=> combineReducers({
    router: connectRouter(history),
    form,
    AuthenticationReducer,
    AlertReducer,
    login:LoginReducer
});