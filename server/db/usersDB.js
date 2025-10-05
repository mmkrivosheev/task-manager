import path from "path";
import { FileDB } from "./FileDB.js";
import { rootDir } from "../utils/paths.js";

const usersFilePath = path.join(rootDir, "./data/users.json");
const usersDB = new FileDB(usersFilePath);
export default usersDB;
