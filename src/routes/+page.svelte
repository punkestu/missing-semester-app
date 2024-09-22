<script>
	import classRegistry from '$lib/classRegistry.json';
	let random5Classes = classRegistry.sort(() => Math.random() - 0.5).slice(0, 5);
	function reshuffle() {
		random5Classes = classRegistry.sort(() => Math.random() - 0.5).slice(0, 5);
	}
</script>

<svelte:head>
	<title>Missing Semester by Punkestu</title>
</svelte:head>

<section class="p-8 w-3/4 min-h-screen overflow-y-auto max-w-full flex flex-col justify-center gap-4">
	<div>
		<h1 class="text-4xl font-medium mb-2">Apa itu missing semester?🤔</h1>
		<p>
			Missing semester akan bantu kamu mempelajari apa saja yang akan kalian gunakan saat kuliah dan
			yang perlu dikuasai programmer <strong>TAPI TIDAK PERNAH DIAJARKAN DI KELAS</strong>
		</p>
	</div>
	<div>
		<div class="flex items-center gap-4">
			<h2 class="font-medium text-2xl">Mau belajar apa hari ini?</h2>
			<button class="mt-2 border-2 px-2 rounded-md border-white" on:click={reshuffle}
				>Reshuffle</button
			>
		</div>
		<div class="flex gap-4 mt-2">
			{#each random5Classes as theClass}
				<a href="/{theClass.slug}" class="hover:underline opacity-70 hover:opacity-100">{theClass.title}</a>
			{/each}
		</div>
	</div>
</section>
