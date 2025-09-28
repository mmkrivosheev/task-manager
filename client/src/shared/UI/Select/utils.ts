import { IOption } from "shared/UI/Select/types";

export const dropdownDir = (options: IOption[], select: HTMLDivElement | null): string => {
	if (!select) return "down";

	const OPTION_HEIGHT = 25;
	const OPTIONS_GAP = 5;
	const rect = select.getBoundingClientRect();
	const spaceBelow = window.innerHeight - rect.bottom;
	const spaceAbove = rect.top;
	const optionsHeight = options.length * OPTION_HEIGHT + OPTIONS_GAP;
	return spaceBelow < optionsHeight && spaceAbove > spaceBelow ? "up" : "down";
};
