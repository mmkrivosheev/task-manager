export const validateBody = requiredFields => {
	return async (ctx, next) => {
		const body = ctx.request.body;
		for (const field of requiredFields) {
			if (!body[field]) {
				ctx.status = 400;
				ctx.body = { error: `Missing field: ${field}` };
				return;
			}
		}
		await next();
	};
};
