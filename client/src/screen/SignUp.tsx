import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input } from "../components/shared/Inputs";
import { Link } from "react-router-dom";

interface ISignUpForm {
  email: string;
  username: string;
  password: string;
  password2: string;
  name: string;
  location: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<ISignUpForm>();
  const [validation, setValidation] = useState({
    isPasswordMatch: true,
    existUsername: false,
    existEmail: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const signupHandler: SubmitHandler<ISignUpForm> = async (data) => {
    try {
      const res = await axios.post("/signup", { data });
      if (res.data) {
        setValidation({
          isPasswordMatch: true,
          existUsername: false,
          existEmail: false,
        });
        setErrorMessage("");
        history.push("/signin");
      }
    } catch (err: any) {
      const { isPasswordMatch, existUsername, existEmail, errorMessage } =
        err.response.data;
      setValidation({
        isPasswordMatch,
        existUsername,
        existEmail,
      });
      setErrorMessage(errorMessage);
      console.warn(err);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit(signupHandler)}>
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          hasError={Boolean(validation.existEmail)}
        />
        <Input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
          hasError={Boolean(validation.existUsername)}
        />
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        <Input
          {...register("password2", { required: true })}
          type="password"
          placeholder="Re-enter password"
          hasError={Boolean(!validation.isPasswordMatch)}
        />
        <Input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
        />
        <Input
          {...register("location", { required: true })}
          type="text"
          placeholder="Location"
        />
        <ErrorMessage message={errorMessage} />
        <Button>Sign up</Button>
      </Form>
      <hr />
      <div>
        <p>Already have an account?</p>
        <Link to="/signin">
          <Button>Log in now &rarr;</Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
