import { AxiosError } from "axios";

export function handleAxiosError(err: unknown): string {
	const error = err as AxiosError<{ error?: string; message?: string }>;
	return error.response?.data.error || error.message;
}
