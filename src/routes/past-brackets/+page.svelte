
<svelte:head>
	<title>Past Brackets</title>
	<meta name="description" content="Past Ping Pong Brackets" />

</svelte:head>

<script>
    import Hero from '../Hero.svelte';
    import heroImage from '$lib/images/hero_image_ashley_ayush2.png';

	let brackets = [
		{
			title: "Summer 2022 - Tier 1",
			src: 'https://brackethq.com/b/0om5/embed/',
		},
		{
            title: "Fall 2022 - Tier 1",
            src: "https://brackethq.com/b/k4n6/embed/"
        },
        {
            title: "Fall 2022 - Tier 2",
            src: "https://brackethq.com/b/x6n6/embed/"
        },
	]

</script>

<Hero title={"Past Brackets"} imageRef={heroImage}/>

<div class="app">
    {#each brackets as bracket}
        <div class="bracket">
        <h2 class="title">{bracket.title}</h2>
        <iframe title={bracket.title} src={bracket.src} width="100%" height="550" frameborder="0"></iframe>
        </div>

        <hr/>
    {/each}
</div>