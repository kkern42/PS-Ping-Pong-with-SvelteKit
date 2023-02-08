<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		margin-left: auto;
		margin-right: auto;
		max-width: 1600px;
	}
</style>
