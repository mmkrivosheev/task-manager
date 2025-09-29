import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../db/fileDB.js";
import { JWT_SECRET } from "../config/index.js";

export const registerUser = async (email, password) => {
	const users = readData("users");
	if (users.find(u => u.email === email)) {
		throw new Error("User already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = { id: uuidv4(), email, password: hashedPassword };
	users.push(newUser);
	writeData("users", users);
	return { id: newUser.id, email: newUser.email };
};

export const loginUser = async (email, password) => {
	const users = readData("users");
	const user = users.find(u => u.email === email);
	if (!user) throw new Error("Invalid credentials");

	const valid = await bcrypt.compare(password, user.password);
	if (!valid) throw new Error("Invalid credentials");

	const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
	return { token };
};
