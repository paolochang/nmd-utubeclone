import User from "../models/User";

// export const getSignup = (req, res) => res.send("GET SignUp this app");
export const postSignup = async (req, res) => {
  try {
    const { name, username, email, password, location } = req.body.data;
    const user = await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, errorMessage: error.message });
  }
};
export const signin = (req, res) => res.send("Login User");
export const signout = (req, res) => res.send("Logout User");
export const seeUser = (req, res) => res.send("See User");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
