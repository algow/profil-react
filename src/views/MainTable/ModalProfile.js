import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Modal
} from 'semantic-ui-react';
import { Formik } from 'formik';

class ModalProfile extends Component {
  constructor(){
    super();

    this.state = {
      editable: true
    }
  }

  render() {
    return(
      <Modal size='small' open={this.props.open} onClose={() => this.props.onClose(false, '')} >
        <Modal.Header>Profil Satker</Modal.Header>
        <Modal.Content>
          <Formik
            enableReinitialize={true}
            initialValues={{kpa: 'Lorem Ipsum', ppk: 'Dolor Sit Amet', ppspm: 'Consectetur Adipiscing', bendahara: '', operator: ''}}
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
                  <Input
                    label='KPA'
                    readOnly={this.state.editable ? true : false}
                    size='big'
                    placeholder='nama KPA...'
                    name='kpa' 
                    type='text'
                    value={values.kpa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Field>
                <Form.Field >
                  <Input 
                    label='PPK'
                    readOnly={this.state.editable ? true : false}
                    size='big'
                    placeholder='nama PPK...'
                    name='ppk' 
                    type='text'
                    value={values.ppk}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Field >
                <Form.Field>
                  <Input 
                    label='PPSPM'
                    readOnly={this.state.editable ? true : false}
                    size='big'
                    placeholder='nama PPSPM...'
                    name='ppspm' 
                    type='text'
                    value={values.ppspm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Field >
                <Form.Field>
                  <Input 
                    label='Bendahara'
                    readOnly={this.state.editable ? true : false}
                    size='big'
                    placeholder='nama bendahara...'
                    name='bendahara' 
                    type='text'
                    value={values.bendahara}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Field >
                <Form.Field>
                  <Input 
                    label='Operator'
                    readOnly={this.state.editable ? true : false}
                    size='big'
                    placeholder='nama operator...'
                    name='operator' 
                    type='text'
                    value={values.operator}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Form.Field >
                <Form.Field>
                  <Button 
                    color={this.state.editable ? 'orange' : 'green'} 
                    onClick={() => {
                      this.setState({
                        editable: !this.state.editable}
                      )}
                    }
                  >
                    {this.state.editable ? 'Edit' : 'Submit'}
                  </Button>
                </Form.Field>
              </Form>
            )}
          </Formik>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ModalProfile;