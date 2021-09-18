import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(signinHandler)}>
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
