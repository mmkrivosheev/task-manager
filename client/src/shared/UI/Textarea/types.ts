export interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	ref?: React.RefObject<HTMLTextAreaElement | null>;
}
