import React from 'react';
import { cpf } from 'cpf-cnpj-validator';
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';

import * as Yup from 'yup';

import api from '../../services/api';
import { regex } from '../../utils/patterns';
import './styles.css';

const SignUp: React.FC = initialValues => {
  const handleSubmit = (values: any) => {
    api.post('/users', values);
  };

  const validations = Yup.object().shape({
    name: Yup.string()
      .required('Digite seu nome.')
      .matches(regex.Name.Pattern, 'Email inválido.'),
    date: Yup.string()
      .required('Digite sua data de nascimento.')
      .matches(regex.BirthDate.Pattern, 'Data inválida.'),
    cpf: Yup.string()
      .required('Digite seu CPF.')
      .test('cpf-validator', 'CPF inválido.', function (value) {
        return cpf.isValid(value);
      }),
    cellphone: Yup.string()
      .required('Digite seu celular.')
      .matches(regex.Cellphone.Pattern, 'Celular inválido.'),
    email: Yup.string().email('Email inválido').required('Digite seu email.'),
    observation: Yup.string(),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <FormikForm>
          <h1>SignUp</h1>

          <div>
            <Field name="name" placeholder="Primeiro nome" type="text" />
            <ErrorMessage component="span" name="name" />
          </div>
          <div>
            <Field name="date" placeholder="Data de nascimento" type="text" />
            <ErrorMessage component="span" name="date" />
          </div>
          <div>
            <Field name="cpf" placeholder="CPF" type="text" />
            <ErrorMessage component="span" name="cpf" />
          </div>
          <div>
            <Field name="cellphone" placeholder="Celular" type="text" />
            <ErrorMessage component="span" name="cellphone" />
          </div>
          <div>
            <Field name="email" placeholder="Email" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
          <div>
            <Field
              component="textarea"
              name="observation"
              placeholder="Observacao"
              maxlenght="300"
            />
            <ErrorMessage component="span" name="observation" />
          </div>
          <button type="submit">Cadastrar</button>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default SignUp;
