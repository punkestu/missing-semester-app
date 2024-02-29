<script>
	import '../app.css';
	import Sidebar from '../components/sidebar.svelte';
</script>

<main class="flex">
	<Sidebar />
	<slot />
</main>
