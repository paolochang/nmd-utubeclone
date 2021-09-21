import User from "../models/User";
import bcrypt from "bcrypt";

// export const getSignup = (req, res) => res.send("GET SignUp this app");
export const postSignup = async (req, res) => {
  let isPasswordMatch = true;
  let existUsername = false;
  let existEmail = false;
  try {
    const { name, username, email, password, password2, location } =
      req.body.data;
    if (password !== password2) {
      isPasswordMatch = false;
      throw new Error("Password confirmation does not match.");
    }
    existUsername = await User.exists({ username });
    existEmail = await User.exists({ email });
    if (existUsername || existEmail) {
      if (existUsername && existEmail)
        throw new Error("This username and email are already taken");
      else if (existUsername) throw new Error("This username is already taken");
      else if (existEmail) throw new Error("This email is already taken");
    }
    const user = await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.json({ user });
  } catch (error) {
    return res.status(400).json({
      errorMessage: error.message,
      isPasswordMatch,
      existUsername,
      existEmail,
    });
  }
};
export const signin = (req, res) => res.send("Login User");
export const signout = (req, res) => res.send("Logout User");
export const seeUser = (req, res) => res.send("See User");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
