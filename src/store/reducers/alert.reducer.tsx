import { AlertConstant } from '../../constants/index.d';
import { IAlertAction } from '../actions/alert.action';

const initialState: IAlertAction = {
    type: AlertConstant.CLEAR,
    tag: '',
    message: ''
}

export const AlertReducer = (state: IAlertAction = initialState , action:IAlertAction )=>{
    switch (action.type) {
        case AlertConstant.SUCCESS:
            return {
                type: AlertConstant.SUCCESS,
                tag: 'alert-success',
                message: action.message
            };
        case AlertConstant.ERROR:
            return {
                type: AlertConstant.ERROR,
                tag: 'alert-danger',
                message: action.message
            };
        case AlertConstant.CLEAR:
            return {
                type: AlertConstant.CLEAR
            }
        default:
            return  state ;
    }
}