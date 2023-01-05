import User from "../model/user-schema.js";

export const addSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    console.log(exist);
    if (exist) {
      return response.status(401).json({ message: "username already exist" });
    }

    const data = request.body;

    const newUser = new User(data);

    await newUser.save();
    response.status(200).json({ message: data });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("invalid login");
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
