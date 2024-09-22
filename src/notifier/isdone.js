import { writable } from 'svelte/store';

const isDoneNotification = writable(false);

export function pushIsDoneNotification() {
	isDoneNotification.update((value) => !value);
}

/**
 * @param {Function} callback
 */
export function subscribeIsDoneNotification(callback) {
	return isDoneNotification.subscribe(() => {
		callback();
	});
}
