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

export const postSignin = async (req, res) => {
  let existUsername = false;
  let isPasswordMatch = false;
  try {
    const { username, password } = req.body.data;
    // check if account exists
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("An account with this username does not exists.");
    }
    // check if password correct
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      throw new Error("Password does not match.");
    }
    return res.send("Login User");
  } catch (error) {
    return res
      .status(400)
      .json({ errorMessage: error.message, existUsername, isPasswordMatch });
  }
};

export const signout = (req, res) => res.send("Logout User");
export const seeUser = (req, res) => res.send("See User");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
