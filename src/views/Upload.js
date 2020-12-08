import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from 'semantic-ui-react';
import { Formik } from 'formik';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button_disabled: false,
      message: {
        display: false,
        color: '',
        message: '',
      }
    }
  }

  render(){
    return(
      <Grid
        textAlign='center'
        style={{ height: '100%', marginTop: '0' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 800 }}>
          <Header as='h2' attached='top' textAlign='left'>
            <Icon name='upload' />
            Upload File Excel Pagu dan Realisasi
          </Header>
          <Segment attached textAlign='left'>
            <Formik
              enableReinitialize={true}
              initialValues={{ pagurealisasi: null }}
              validate={values => {
                let errors = {};

                if(!values.pagurealisasi){
                  errors.pagurealisasi = 'required';
                }

                return errors;
              }}
              onSubmit={(values, { setSubmiting }) => {
                //
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue
              }) => (
                <Form>
                  <Form.Field>
                    <label>File Excel</label>
                    <input 
                      type='file' 
                      name='pagurealisasi' 
                      onChange={(event) => {
                        setFieldValue("pagurealisasi", event.currentTarget.files[0]);
                      }}
                      onBlur={handleBlur} 
                    />
                    {
                      errors.pagurealisasi ? 
                      <Message attached='bottom' color='red'>{errors.pagurealisasi}</Message> :
                      null
                    }
                  </Form.Field>
                  <Form.Field>
                    {
                      this.state.button_disabled ? 
                      <Button
                        fluid
                        size='big'
                        type='submit' 
                        content='Submit'
                        primary
                        disabled
                      /> :
                      <Button
                        fluid
                        size='big'
                        type='submit' 
                        content='Submit'
                        primary
                        onClick={handleSubmit}
                      />
                    }
                  </Form.Field>
                </Form>
              )}
            </Formik>
          </Segment>
          { this.state.message.display ? 
            (<Message attached='bottom' color={ this.state.message.color }>
              {this.state.message.message}
            </Message>) : null
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default Upload;