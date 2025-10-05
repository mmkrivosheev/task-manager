import fs from "fs";

export class FileDB {
	constructor(filePath) {
		this.filePath = filePath;
	}

	read() {
		const data = fs.readFileSync(this.filePath, "utf-8");
		return data ? JSON.parse(data) : [];
	}

	write(data) {
		fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
	}
}
