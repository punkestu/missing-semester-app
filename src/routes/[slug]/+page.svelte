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
	class="p-8 w-3/4 h-screen overflow-y-scroll prose prose-invert max-w-full"
>
	{@html marked(data.post.body)}
</div>
