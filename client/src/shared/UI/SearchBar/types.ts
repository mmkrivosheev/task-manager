export interface ISearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
	onSearch: (query: string) => void;
	placeholder?: string;
}
