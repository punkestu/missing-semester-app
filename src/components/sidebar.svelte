<script>
	// @ts-nocheck
	import classRegistry from '$lib/classRegistry.json';
	import githubIcon from '$lib/github-mark-white.svg';
	import { onMount } from 'svelte';
	import { subscribeIsDoneNotification } from '../notifier/isdone';
	let search = '';
	let listIsDone = {};
	onMount(() => {
		fetchListIsDone();
		subscribeIsDoneNotification(fetchListIsDone);
	});
	function fetchListIsDone() {
		listIsDone = JSON.parse(localStorage.getItem('isDone') || '{}');
	}
</script>

<aside class="w-1/4 h-screen overflow-y-auto px-2 py-1">
	<header class="flex justify-between items-center p-2">
		<a href="/" class="text-xl font-bold">Missing Semester</a>
		<a href="https://github.com/punkestu/missing-semester" target="_blank"
			><img src={githubIcon} width="30" alt="contribute" /></a
		>
	</header>
	<hr class="mb-2" />
	<input
		type="text"
		class="w-full text-slate-900 px-2 py-1 mb-2 rounded-md"
		placeholder="Search..."
		bind:value={search}
	/>
	<div class="flex flex-col gap-1 p-2">
		{#each classRegistry.filter((r) => r.title
				.toLowerCase()
				.includes(search.toLowerCase())) as theClass}
			<div class="flex gap-1">
				{#if listIsDone[theClass.slug] === '1'}
					✅
				{/if}
				<a href="/{theClass.slug}" class="hover:underline">{theClass.title}</a>
			</div>
		{/each}
	</div>
</aside>
