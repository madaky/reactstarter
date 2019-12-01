import React from 'react';
import { FormControl } from 'react-bootstrap';

type FieldProps = { 
                    input: any, 
                    meta: { 
                            touched : any, error: any, 
                            warning: any, invalid:any, 
                            valid:any, dirty:any, 
                            pristine:any, submitFailed:any 
                        }, 
                    type: string, 
                    placeholder:string, 
                    min: number, 
                    max: number 
                }   
export const FieldInput = (props: FieldProps) => {
    return (
        <div>
        <FormControl
            type={props.type}
            placeholder={props.placeholder}
            min={props.min}
            max={props.max}
            value={props.input.value}
            onChange={props.input.onChange}
            onKeyPress={props.input.onKeyPress}
            isValid={ props.meta.valid } 
            isInvalid = { (props.meta.dirty && props.meta.invalid) || (props.meta.submitFailed && props.meta.invalid ) }
            />
            {!props.meta.valid &&
                ((props.meta.invalid && <span className="invalid-feedback">{props.meta.error}</span>) ||
                  (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    )
}