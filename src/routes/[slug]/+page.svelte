<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	export let data;
	import { marked } from 'marked';
</script>

<svelte:head>
	<title>Missing Class | {data.post.title}</title>
</svelte:head>

<div
	class="p-2 w-3/4 h-[calc(100vh-1.75rem-1rem-1rem)] overflow-y-scroll prose prose-invert max-w-full"
>
	{@html marked(data.post.body)}
</div>
