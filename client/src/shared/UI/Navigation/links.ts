import { RouterLink, RouterNavLink } from "shared/UI/Links";
import { createSizedIcon } from "shared/HOC/createSizedIcon";
import HomeIcon from "assets/icons/home.svg";
import { INavItem } from "shared/UI/Navigation/types";

export const guestLinks: INavItem[] = [{ to: "/login", label: "Navigation.login", component: RouterLink }];

export const authLinks: INavItem[] = [
	{ to: "/register", label: "Navigation.register", component: RouterNavLink },
	{ to: "/login", label: "Navigation.login", component: RouterNavLink },
	{ to: "/", icon: createSizedIcon(HomeIcon, 14, 14), component: RouterLink },
];
