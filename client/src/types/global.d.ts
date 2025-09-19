declare module "*.module.scss" {
	const styles: { readonly [key: string]: string };
	export default styles;
}

declare module "*.svg" {
	import React from "react";
	const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVGComponent;
}
