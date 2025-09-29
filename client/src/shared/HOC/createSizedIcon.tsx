import { ComponentType, SVGProps } from "react";

export function createSizedIcon(Icon: ComponentType<SVGProps<SVGSVGElement>>, width: number, height: number) {
	return function SizedIcon(props: SVGProps<SVGSVGElement>) {
		return <Icon width={width} height={height} {...props} />;
	};
}
