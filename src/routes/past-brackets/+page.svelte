<script>
	import Hero from '../Hero.svelte';
	import heroImage from '$lib/images/jacob-alden-hero.png';

	let brackets = [
		{
			title: 'Spring 2023 - Tier 1',
			src: 'https://brackethq.com/b/ammib/embed/'
		},
		{
			title: 'Spring 2023 - Tier 2',
			src: 'https://brackethq.com/b/2lmib/embed/'
		},
		{
			title: 'Spring 2023 - Tier 3',
			src: 'https://brackethq.com/b/immib/embed/'
		},
		{
			title: 'Winter 2023 - Tier 1',
			src: 'https://brackethq.com/b/vdycb/embed/'
		},
		{
			title: 'Winter 2023 - Tier 2',
			src: 'https://brackethq.com/b/0srcb/embed/'
		},
		{
			title: 'Fall 2022 - Tier 1',
			src: 'https://brackethq.com/b/k4n6/embed/'
		},
		{
			title: 'Fall 2022 - Tier 2',
			src: 'https://brackethq.com/b/x6n6/embed/'
		},
		{
			title: 'Summer 2022',
			src: 'https://brackethq.com/b/0om5/embed/'
		}
	];
</script>

<svelte:head>
	<title>Past Brackets</title>
	<meta name="description" content="Past Ping Pong Brackets" />
</svelte:head>

<Hero
	title={'Past Brackets'}
	imageRef={heroImage}
	subContent={"You didn't do as well as you thought."}
	videoLink={'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/Videos%2FIMG_7672.mp4?alt=media&token=18e2158c-9bf1-49e3-b858-9578199e4ac3'}
/>

<div class="app">
	{#each brackets as bracket, index}
		<div class="bracket">
			<h2 class="title">{bracket.title}</h2>
			<iframe title={bracket.title} src={bracket.src} width="100%" height="550" frameborder="0" />
		</div>
		{#if index != brackets.length - 1}
			<hr />
		{/if}
	{/each}
</div>

<style>
	.app {
		padding-top: 1.5rem;
	}
</style>
