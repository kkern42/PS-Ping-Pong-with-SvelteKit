<script>
	import { page } from '$app/stores';
	let classNext = 'responsive';
	let classDisplay = '';

	function switchToResponsive() {
		let temp = classDisplay;
		classDisplay = classNext;
		classNext = temp;
	}
</script>

<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.13/css/all.css" />

<div class="navbar {classDisplay}">
	<a href="/" style="background-color: #FE414D;" class="home"><span class="home">PS PP NYC</span></a
	>
	<a
		class:active={$page.url.pathname.startsWith('/champions')}
		href="/champions"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-crown" /> Champions</a
	>
	<a
		class:active={$page.url.pathname.startsWith('/past-brackets')}
		href="/past-brackets"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-calendar-alt" /> Past Brackets</a
	>
	<a
		class:active={$page.url.pathname.startsWith('/player-profiles')}
		href="/player-profiles"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-users" /> Player Profiles</a
	>
	<a
		class:active={$page.url.pathname.startsWith('/about')}
		href="/about"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-newspaper" /> About</a
	>
	<a
		class:active={$page.url.pathname.startsWith('/FAQ')}
		href="/FAQ"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-question-circle" /> FAQ</a
	>
	<a
		class:active={$page.url.pathname.startsWith('/images')}
		href="/images"
		on:click={() => switchToResponsive()}><i class="fa fa-fw fa-images" /> Images</a
	>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	<a
		on:click={() => {
			window.location.href = 'https://ps-ping-pong.netlify.app/pong';
		}}
		style="cursor: pointer;"><i class="fa fa-fw fa-table-tennis" /> Pong</a
	>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	<a class="icon" on:click={() => switchToResponsive()}>
		<i class="fa fa-bars" />
	</a>
</div>

<style>
	.navbar {
		width: 100%;
		background-color: #333;
		position: fixed;
		z-index: 3;
	}

	.navbar a {
		float: left;
		padding: 1rem;
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 700;
		transition: 0.6s;
	}

	.navbar a:hover {
		background-color: #535252;
	}

	.home {
		font-size: 1.1rem;
	}

	.icon {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		.navbar a {
			padding: 0.8rem;
			font-size: 0.8rem;
		}
	}

	@media screen and (max-width: 500px) {
		.navbar a {
			display: none;
		}

		a.home {
			font-size: 0.9rem;
			display: block;
		}

		a.icon {
			float: right;
			display: block;
			border-bottom: 1px solid #333;
		}

		.navbar.responsive .icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		.navbar.responsive a {
			float: none;
			display: block;
			background-color: #333;
		}
	}
</style>
