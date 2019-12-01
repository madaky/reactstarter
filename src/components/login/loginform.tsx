import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { FieldInput } from '../../helpers/formhelper';
import { email, aol, required } from '../../helpers/validtionhelper';
import { connect } from 'react-redux';

type  props = {
    handleSubmit: any, 
    alertStore  :any, 
    dispatch    :any,
    reset       : any, 
    pristine    : any, 
    submitting  : boolean,
    valid       : any
    error       : any
}


class LoginForm extends React.Component<props>{
    render(){
        const { error,handleSubmit, alertStore , reset, pristine, submitting, valid } = this.props;
        return(
            <Container className="h-100">
                <Row className="justify-content-center h-100">
                    <Form onSubmit={handleSubmit}   className="align-self-center" noValidate >
                        <Row>
                            { alertStore.message && !valid &&
                                (<div className={`alert ${alertStore.type}`}>{alertStore.message}</div>)
                            }
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Field type="email" component={FieldInput} 
                                    name="email" 
                                    placeholder="Enter email" 
                                    validate={[required , email]}
                                    warn={aol}
                                    />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Field name="password" 
                                    component={FieldInput} 
                                    type="password" 
                                    validate = {required}
                                    placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={submitting}>
                             {submitting ? 
                                <span><i className="fa fa-spin fa-spinner">Logging In</i></span>
                                :
                                <span>Login</span>
                             }
                        </Button>
                        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
                        {error && <strong>{error}</strong>}
                    </Form>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps  = (state:any, ownProps:any) => ({
    alertStore: state.AlertReducer // some data from the server
  });
export default reduxForm(
    {
        form:'login',
        onSubmitFail:(errors,dispatch, se)=>{
            // console.log(se);

            // new SubmissionError(se);

            // throw new SubmissionError({ _error: errors });
        },
    }
)(connect(mapStateToProps)(LoginForm));