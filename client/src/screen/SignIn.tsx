import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ErrorMessage, Form, Input } from "../components/shared/Inputs";

interface ISignInForm {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<ISignInForm>();
  const [validation, setValidation] = useState({
    existUsername: false,
    isPasswordMatch: true,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const signinHandler: SubmitHandler<ISignInForm> = async (data) => {
    try {
      const res = await axios.post("/signin", { data });
      if (res.status) {
        history.push("/");
      }
    } catch (err: any) {
      const { isPasswordMatch, existUsername, errorMessage } =
        err.response.data;
      setValidation({ isPasswordMatch, existUsername });
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit(signinHandler)}>
        <Input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
          hasError={Boolean(!validation.existUsername)}
        />
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          hasError={Boolean(validation.isPasswordMatch)}
        />
        <ErrorMessage message={errorMessage} />
        <Button>Sign In</Button>
      </Form>
      <hr />
      <div>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <Button>Create one now &rarr;</Button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
