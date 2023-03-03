<script>
	import Hero from '../Hero.svelte';
	import heroImage from '$lib/images/past-bracket-hero3.png';
	import { product } from './productData.svelte';
	import { engineering } from './engineeringData.svelte';
	import { experience } from './experienceData.svelte';
	import {marketing } from './marketingData.svelte';

	let players = engineering;
	let enginClass = 'underline';
	let prodClass = '';
	let expClass = '';
	let markClass = '';

	/**
	 * @param {{name: string;grip: string;record: string;strength: string;weakness: string;picture: string;margin: string;reverse: string;}[]} capList
	 * @param {string} name
	 */
	async function switchPLayers(capList, name) {
		players = capList;

		if (name == 'prod') {
			enginClass = '';
			prodClass = 'underline';
			expClass = '';
			markClass = '';
		} else if (name == 'exp') {
			enginClass = '';
			prodClass = '';
			expClass = 'underline';
			markClass = '';
		} else if (name == 'engin') {
			enginClass = 'underline';
			prodClass = '';
			expClass = '';
			markClass = '';
		}else{
			enginClass = '';
			prodClass = '';
			expClass = '';
			markClass = 'underline';
		}
	}
</script>

<svelte:head>
	<title>Player Profiles</title>
	<meta name="description" content="Player Profiles" />
</svelte:head>

<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.15.4/css/all.css" />

<Hero
	title={'Player Profiles'}
	subContent={'Know thine enemy.'}
	imageRef={heroImage}
	videoLink={'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/Videos%2FIMG_1255.mp4?alt=media&token=1bbc65d6-0e07-49d1-abe3-8b02836500b2'}
/>

<div class="player-profiles">
	<div class="capabilities">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h2 on:click={() => switchPLayers(engineering, 'engin')} class={enginClass}>Engineering</h2>
		<h2 style="color: darkgrey; border-bottom: 4px solid white; cursor: default;">|</h2>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h2 on:click={() => switchPLayers(product, 'prod')} class={prodClass}>Product</h2>
		<h2 style="color: darkgrey; border-bottom: 4px solid white;">|</h2>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h2 on:click={() => switchPLayers(experience, 'exp')} class={expClass}>Experience</h2>
		<h2 style="color: darkgrey; border-bottom: 4px solid white;">|</h2>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h2 on:click={() => switchPLayers(marketing, 'mark')} class={markClass}>Marketing</h2>

	</div>

	<pre><div style="padding: 0 1rem 0 1rem;">Past Participants</div></pre>

	{#each players as player, index}
		{#if index % 2 == 0}
			<div style="display: none;">{(player.reverse = 'reverse')} {(player.margin = 'right')}</div>
		{:else}
			<div style="display: none;">{(player.margin = 'left')}</div>
		{/if}
		<div class="player-container {player.reverse}">
			<div class="img-container">
				<img alt="PS PP Commitee Member" src={player.picture} class="profile-picture" />
			</div>
			<div class="player {player.margin}">
				<h2>
					{player.name} <span style="color:#FE414D;">|</span>
					<span class="record">Record: {player.record}</span>
				</h2>
				<div class="details">
					<h3>Grip: {player.grip}</h3>
					<p>Strength: {@html player.strength}</p>
					<p>Weakness: {player.weakness}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.player-profiles {
		margin: 0 auto;
		padding-right: 6rem;
		padding-left: 6rem;
		padding-bottom: 4rem;
		padding-top: 2rem;
	}

	h3 {
		font-size: 1.8rem;
		font-weight: bold;
	}

	.player-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem;
	}

	.details {
		margin-left: 1rem;
		/* animation */
		will-change: transform, opacity;
		animation: fade-in-up-key 0.75s forwards;
	}

	.capabilities {
		display: flex;
		justify-content: center;
		padding: 1rem 0rem 1.5rem 0rem;
		flex-wrap: wrap;
	}

	.capabilities h2 {
		margin: 0rem 1.5rem 1rem 1.5rem;
	}

	.capabilities h2:hover {
		cursor: pointer;
		border-bottom: 4px solid #fe414d;
	}

	.capabilities .underline {
		border-bottom: 4px solid #fe414d;
	}

	.capabilities:hover > :not(:hover) {
		border-bottom: 4px solid transparent;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	.left {
		margin-left: 5rem;
	}

	.right {
		margin-right: 5rem;
	}

	.img-container {
		width: 25%;
	}

	.record {
		font-size: 1.8rem;
	}

	.details p {
		margin: 0.8rem 0 0 0;
	}

	pre {
		display: flex;
		justify-content: center;
	}

	pre:before,
	pre:after {
		content: '';
		flex: 1 1;
		border-bottom: 1px solid darkgray;
		background-color: darkgrey;
		margin: auto;
	}

	@media screen and (max-width: 1000px) {
		.img-container {
			width: 60%;
		}

		.capabilities h2 {
			margin: 0rem 0.6rem 1rem 0.6rem;
		}
	}

	@media screen and (max-width: 500px) {
		h2 {
			font-size: 1.5rem;
		}

		h3 {
			font-size: 1.3rem;
		}

		.player-profiles {
			padding: 2rem 3.5rem 4rem 3.5rem;
			text-align: center;
		}

		.player-container {
			display: block;
			padding: 1.5rem;
			align-items: center;
		}

		.img-container {
			width: 100%;
		}

		img {
			width: 80%;
			border-radius: 50%;
		}

		.record {
			font-size: 1.8rem;
		}

		.left {
			margin-left: 0rem;
		}

		.right {
			margin-right: 0rem;
		}

		.details {
			margin-left: 0rem;
		}

		.record {
			font-size: 1.3rem;
		}

		.capabilities h2 {
			margin: 0rem 0.4rem 1rem 0.4rem;
		}
	}
</style>
