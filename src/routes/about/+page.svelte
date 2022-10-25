

<svelte:head>
	<title>About US</title>
	<meta name="description" content="About this app" />

</svelte:head>

<script>
	
	import kevin from '$lib/images/kevin.png';
	import ashley from '$lib/images/ashley.png';
	import jd from '$lib/images/jd.png';

	let members = [
		{
			name: "Ashley Kim",
			picture: ashley,
			title: "PS PP Commitee Member"
		},
		{
			name: "JD Pablo",
			picture: jd,
			title: "PS PP Commitee Member"
		},
		{
			name: "Kevin Kern",
			picture: kevin,
			title: "PS PP Commitee Member"
		},
	]
</script>

<div class="about">
	<h1>About Us</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>

	<p>
		It's important to have fun!
	</p>

	<div class="team">
		{#each members as member}
			<div class="profile">
				<img alt="PS PP Commitee Member" src={member.picture}/>
				<p class="name">{member.name}</p>
				<div class="title">{member.title}</div>
			</div>
		{/each}
	</div>
	
</div>

<style>
	
	.about{
      
      min-height: 20rem;
      max-width: 120rem;
      margin: 0 auto;
      padding-right: 6rem;
	padding-left: 6rem;
	padding-top: 4rem;
	padding-bottom:4rem;
      text-align: center;
    }

    h3{
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-size: 1.8rem;
      font-weight: bold;
    }

	.team{
		display:flex;
		font-weight: bold;
	}

	.name{
		color: #FE414D;
	}

	.title{
		font-size: .9rem;
	}


	.profile{
		padding: 3rem;
		
	}

	@media screen and (min-width: 1400px) {
        .profile{
		padding: 5rem;
		
		}
    }

	/* everything 1500 and below */
    @media screen and (max-width: 1300px) {
        .profile{
		padding: 3rem;
		
		}
    }

    /* everything 720 and below */
    @media screen and (max-width: 1000px) {
        .profile{
		padding: 1rem;
		
		}
    }

	img{
		width:100%;
		border-radius: 50%;
	}
		
	</style>
