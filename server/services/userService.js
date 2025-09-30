import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../db/fileDB.js";
import { generateJwtToken } from "../utils/common.js";

export async function registerUser(email, password) {
	const users = readData("users");
	if (users.find(u => u.email === email)) {
		throw new Error("User already exists");
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = { id: uuidv4(), email, password: hashedPassword };
	users.push(newUser);
	writeData("users", users);
	const safeUser = { id: newUser.id, email: newUser.email };
	return {
		user: safeUser,
		token: generateJwtToken(safeUser),
	};
}

export async function loginUser(email, password) {
	const users = readData("users");
	const user = users.find(u => u.email === email);
	if (!user) throw new Error("Invalid credentials");

	const valid = await bcrypt.compare(password, user.password);
	if (!valid) throw new Error("Invalid credentials");

	const safeUser = { id: user.id, email: user.email };
	return {
		user: safeUser,
		token: generateJwtToken(safeUser),
	};
}
