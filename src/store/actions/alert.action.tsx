import  { AlertConstant } from '../../constants/index.d';

export interface IAlertAction{
    type: AlertConstant,
    tag?: string,
    message?: string
}

export const Success = (payload:any): IAlertAction => (
        { type: AlertConstant.SUCCESS, tag:payload.tag, message:payload.message }
    );

export const Error = (payload: any): IAlertAction => (
    { type: AlertConstant.ERROR, tag:payload.tag, message:payload.message  }
);

export const Clear = (): IAlertAction => (
    { type: AlertConstant.CLEAR }
);