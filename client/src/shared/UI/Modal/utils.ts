export function getFocusableElements(container: HTMLElement): HTMLElement[] {
	const focusableSelectors = `a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])`;

	return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
		el => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
	);
}
