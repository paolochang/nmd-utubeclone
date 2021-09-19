import React from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "../components/shared/Inputs";

interface ISignUpForm {
  email: string;
  username: string;
  password: string;
  name: string;
  location: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm<ISignUpForm>();

  const signupHandler: SubmitHandler<ISignUpForm> = async (data) => {
    try {
      const res = await axios.post("/signup", { data });
      if (res.data.success) {
        history.push("/signin");
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
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
        />
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
        <Button>Sign up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
