export function getRelativeURL() {
	const currentURL = window.location.href;
	const parsedURL = new URL(currentURL);
	return parsedURL.pathname || "/";
}