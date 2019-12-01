import {loginWatcher, logout} from './login/login.saga';
import { all } from 'redux-saga/effects';



export default function* SetupSaga(){
    yield all([
                loginWatcher(),
                logout()
            ]);
}