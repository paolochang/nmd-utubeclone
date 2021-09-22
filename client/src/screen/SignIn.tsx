import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "../components/shared/Inputs";

interface ISignInForm {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<ISignInForm>();
  const { errors } = formState;

  const signinHandler: SubmitHandler<ISignInForm> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit(signinHandler)}>
        <Input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
          hasError={Boolean(errors.username)}
        />
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          hasError={Boolean(errors.password)}
        />
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
