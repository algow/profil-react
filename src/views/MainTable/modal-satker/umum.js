import React from 'react';
import { Formik } from 'formik';
import {
  Button,
  Form,
  Input,
  Segment
} from 'semantic-ui-react';

function Umum(props) {
  return (
    <Segment>
      <Formik
        enableReinitialize={true}
        initialValues={{kpa: '', ppk: '', ppspm: '', bendahara: '', operator: ''}}
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
                readOnly={props.editable ? true : false}
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
                readOnly={props.editable ? true : false}
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
                readOnly={props.editable ? true : false}
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
                readOnly={props.editable ? true : false}
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
                readOnly={props.editable ? true : false}
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
                color={props.editable ? 'orange' : 'green'} 
                onClick={() => { props.onChange() } }
              >
                {props.editable ? 'Edit' : 'Submit'}
              </Button>
            </Form.Field>
          </Form>
        )}
      </Formik>
    </Segment>
  );
}

export default Umum;