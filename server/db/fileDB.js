import fs from "fs";
import path from "path";
import { rootDir } from "../utils/paths.js";

const dataDir = path.join(rootDir, "data");

export const readData = fileName => {
	const filePath = path.join(dataDir, `${fileName}.json`);
	const data = fs.readFileSync(filePath, "utf-8");
	return data ? JSON.parse(data) : [];
};

export const writeData = (fileName, data) => {
	const filePath = path.join(dataDir, `${fileName}.json`);
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
