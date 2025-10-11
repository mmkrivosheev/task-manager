import { createPortal } from "react-dom";
import { IPortalProps } from "shared/UI/Portal/types";

export function Portal({ id, children }: IPortalProps) {
	return createPortal(children, document.getElementById(id) as HTMLElement);
}
