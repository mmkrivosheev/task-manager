import { ComponentType, SVGProps } from "react";

export const SizedSVGIcon = (
	SVGComponent: ComponentType<SVGProps<SVGSVGElement>>,
	width: number,
	height: number
) => {
	const Icon = (props: SVGProps<SVGSVGElement>) => (
		<SVGComponent width={width} height={height} {...props} />
	);
	return Icon;
};
