export const staticOptions = {
	maxage: 86400000,
	etag: true,
	lastModified: true,
	setHeaders: setCacheHeaders,
};

export function setCacheHeaders(res, filePath) {
	if (filePath.endsWith(".html")) {
		res.setHeader("Cache-Control", "no-store");
	} else {
		res.setHeader("Cache-Control", "private, max-age=86400");
	}
}
