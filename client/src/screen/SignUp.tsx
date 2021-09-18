import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(signupHandler)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        <input
          type="text"
          {...register("location", { required: true })}
          placeholder="Location"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
