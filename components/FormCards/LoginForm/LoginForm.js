import React from "react";

import { Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const inititalValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter correct email address!")
      .required("Required!"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const submitForm = (values) => {
    console.log(values, "val");
  };

  return (
    <div className={css.loginForm}>
      <div className={css.ttl}>Login</div>
      <div className={css.bdy}>
        <Formik
          initialValues={inititalValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          <Form>
            <div className={css.formField}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <ErrorMessage name="email" />
            </div>

            <div className={css.formField}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Doe"
              />
              <ErrorMessage name="password" />
            </div>

            <div className={css.btns}>
              <Button type="primary" className={css.btn} htmlType="submit">
                Login
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
