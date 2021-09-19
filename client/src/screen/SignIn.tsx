import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "../components/shared/Inputs";

interface ISignInForm {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const signinHandler: SubmitHandler<ISignInForm> = (data) => {
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
        />
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        <Button>Sign In</Button>
      </Form>
    </div>
  );
};

export default SignIn;
