<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Sidebar from '../components/sidebar.svelte';
</script>

<Header />
<main class="flex">
	<Sidebar />
	<slot />
</main>
