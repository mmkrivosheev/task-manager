export function validateBody(requiredFields = []) {
	return async (ctx, next) => {
		const body = ctx.request.body;
		if (!body || typeof body !== "object") {
			ctx.status = 400;
			ctx.body = { error: "Invalid request body" };
			return;
		}
		for (const field of requiredFields) {
			if (!body[field]) {
				ctx.status = 400;
				ctx.body = { error: `Missing required field: ${field}` };
				return;
			}
		}
		await next();
	};
}
