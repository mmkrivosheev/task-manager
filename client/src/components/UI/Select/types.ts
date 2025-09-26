export interface IOption {
	label: string;
	value: string;
}

export interface ISelectProps {
	options: IOption[];
	onChange: (value: string) => void;
	value?: string;
	placeholder?: string;
}
