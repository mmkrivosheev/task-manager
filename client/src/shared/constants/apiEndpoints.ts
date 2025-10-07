export const API_ENDPOINTS = {
	AUTH: {
		LOGIN: "/api/auth/login",
		REGISTER: "/api/auth/register",
		ME: "/api/auth/me",
		LOGOUT: "/api/auth/logout",
	},
	TASKS: {
		ALL: "/api/tasks",
		BY_ID: (id: string) => `/api/tasks/${id}`,
	},
};
