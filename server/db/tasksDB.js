import path from "path";
import { FileDB } from "./FileDB.js";
import { rootDir } from "../utils/paths.js";

const tasksFilePath = path.join(rootDir, "./data/tasks.json");
const tasksDB = new FileDB(tasksFilePath);
export default tasksDB;
