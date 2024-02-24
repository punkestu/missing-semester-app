<script>
	import classRegistry from '$lib/classRegistry.json';
</script>

<aside class="w-1/4 h-[calc(100vh-1.75rem-1rem-1rem)] overflow-y-scroll px-2 py-1">
	<h2 class="text-lg font-medium mb-2">List Kelas</h2>
	<div class="flex flex-col gap-1">
		{#each classRegistry as theClass}
			<a href="/{theClass.slug}" class="hover:underline">{theClass.title}</a>
		{/each}
	</div>
</aside>
