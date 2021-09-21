import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "../components/shared/Inputs";

interface ISignInForm {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<ISignInForm>();
  const { errors } = formState;

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
    </div>
  );
};

export default SignIn;
