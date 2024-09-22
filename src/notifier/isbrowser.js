import { browser } from '$app/environment';

/**
 * @param {Function} callback
 */
export default function whenInBrowser(callback) {
	if (browser) {
		callback();
	}
}
