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
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
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
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
        />
        <input
          {...register("location", { required: true })}
          type="text"
          placeholder="Location"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
