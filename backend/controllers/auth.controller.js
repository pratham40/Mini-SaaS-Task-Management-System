import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

const signup = async (req, res) => {

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
    }


    const user = await User.create({
        name,
        email,
        password
    });

    console.log("User created:", user.toJSON());

    res.json({
        token: generateToken(user.id),
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({
        token: generateToken(user.id),
    });
};

export { signup, login };   