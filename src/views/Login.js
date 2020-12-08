import React, { Component } from 'react';
import { 
  Button,
  Form,
  Header,
  Grid,
  Message
} from 'semantic-ui-react';
import { Formik } from 'formik';
import { postUser } from '../actions/user';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        display: false,
        color: '',
        message: ''
      }
    }
  }

  render() {
    return (
      <div style={{backgroundColor: '#e5e5e5'}}>
        <Grid
          textAlign="center"
          style={{ height: '100%', marginTop: '0' }}
          verticalAlign="middle"
        >
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header
                as="h1"
                textAlign="center"
              >
                Identitas KANWIL
              </Header>
              <Formik
                enableReinitialize={true}
                initialValues={{kdkanwil: '', nama: ''}}
                validate={values => {
                  let errors = {};
                  if(!values.kdkanwil) {
                    errors.kdkanwil = 'required';
                  }

                  if(!values.nama){
                    errors.nama = 'required';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmiting }) => {
                  postUser(values).then(res => {
                    console.log(res.nama_kanwil)
                    this.setState({message: {
                      display: true,
                      color: 'green',
                      message: res.nama_kanwil
                    }});
                  }).catch(err => {
                    this.setState({message: {
                      display: true,
                      color: 'red',
                      message: err.response.data.msg
                    }});
                  });
                }}
              >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <Form>
                  <Form.Field>
                    <Form.Input 
                      size='big'
                      icon='user' 
                      iconPosition='left'
                      placeholder='kode kanwil...'
                      name='kdkanwil' 
                      type='text'
                      value={values.kdkanwil}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.kdkanwil ? 
                      <Message attached='bottom' color='red'>{errors.kdkanwil}</Message> :
                      null
                    }
                  </Form.Field>
                  <Form.Field >
                    <Form.Input 
                      size='big'
                      icon='key' 
                      iconPosition='left'
                      placeholder='nama kanwil...'
                      name='nama' 
                      type='text'
                      value={values.nama}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.nama ? 
                      <Message attached='bottom' color='red'>{errors.nama}</Message> :
                      null
                    }
                  </Form.Field>
                  <Form.Field>
                    <Button
                      fluid
                      size='big'
                      type='submit' 
                      content='Masuk'
                      primary
                      onClick={handleSubmit}
                    />
                  </Form.Field>
                </Form>
              )}
            </Formik>
            { this.state.message.display ? 
              (<Message attached='bottom' color={ this.state.message.color }>
                {this.state.message.message}
              </Message>) : null
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Login;