import { ComponentType, SVGProps } from "react";

export function createSizedIcon(Icon: ComponentType<SVGProps<SVGSVGElement>>, width: number, height: number) {
	const SizedIcon = (props: SVGProps<SVGSVGElement>) => {
		return <Icon width={width} height={height} {...props} />;
	};
	return SizedIcon;
}
