<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data;
	import { browser } from '$app/environment';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { pushIsDoneNotification } from '../../notifier/isdone';
	import whenInBrowser from '../../notifier/isbrowser';
	let isDone = false;
	$: whenInBrowser(
		() => (isDone = JSON.parse(localStorage.getItem('isDone') || '{}')[data.slug] === '1')
	);
	function checkIsDone() {
		localStorage.setItem(
			'isDone',
			JSON.stringify({
				...JSON.parse(localStorage.getItem('isDone') || '{}'),
				[data.post.slug]: isDone ? '1' : '0'
			})
		);
		pushIsDoneNotification();
	}
</script>

<svelte:head>
	<title>Missing Class | {data.post.title}</title>
</svelte:head>

<div class="p-8 w-3/4 h-screen overflow-y-scroll prose prose-invert max-w-full">
	<div class="w-full flex justify-end gap-2">
		<input type="checkbox" bind:checked={isDone} on:change={checkIsDone} /> Sudah selesai
	</div>
	{@html marked(data.post.body)}
</div>
