import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input } from "../components/shared/Inputs";

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
  const [exist, setExist] = useState({
    username: false,
    email: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const signupHandler: SubmitHandler<ISignUpForm> = async (data) => {
    try {
      const res = await axios.post("/signup", { data });
      if (res.data.success) {
        setExist({
          username: false,
          email: false,
        });
        setErrorMessage("");
        history.push("/signin");
      } else {
        setExist({
          username: res.data.existUsername,
          email: res.data.existEmail,
        });
        setErrorMessage(res.data.errorMessage);
      }
    } catch (error) {
      console.warn("WARN:", error);
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
          hasError={Boolean(exist.email)}
        />
        <Input
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
          hasError={Boolean(exist.username)}
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
        <ErrorMessage message={errorMessage} />
        <Button>Sign up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
