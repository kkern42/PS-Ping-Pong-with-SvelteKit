<svelte:head>
	<title>About Us</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import kevin from '$lib/images/profile-pictures/kevincat.png';
	import ashley from '$lib/images//profile-pictures/ashley.png';
	import jd from '$lib/images//profile-pictures/jdfit.png';

	let members = [
		{
			name: "Ashley Kim",
			picture: ashley,
			title: "PS PP Commitee Member",
			job: "Associate Software Engineer",
			marcel: "https://marcel.ai/ashleykim"
		},
		{
			name: "JD Pablo",
			picture: jd,
			title: "PS PP Commitee Member",
			job: "Associate Software Engineer",
			marcel: "https://marcel.ai/jdpablo"
		},
		{
			name: "Kevin Kern",
			picture: kevin,
			title: "PS PP Commitee Member",
			job: "Associate Software Engineer",
			marcel: "https://marcel.ai/kevinkern"
		},
	];

</script>

<div class="about">
	<h1>About Us</h1>
	<pre><div style="padding: 0 1rem 0 1rem;">Meet the PS Ping Pong Commitee</div></pre>

	<p>
		The PS Ping Pong Commitee (PSPPC) is the governing body for all Publicis Sapient Ping Pong events. 
		The PSPPC was born out of a need to have a little more fun in the office :)
		The PSPPF is responsible for the organization of office wide competitions, including quaterly Office Ping Pong Championships that has continued since the Summer of 2022.
		The PSPPC oversee all rules and regulations pretaining to competitions held in office. 
	</p>

	<p>Remember to have fun!</p>

	<h2>Team Members</h2>
	<div class="team">
		{#each members as member}
			<div class="profile">
				<img alt="PS PP Commitee Member" src={member.picture} class="profile-picture"/>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<p class="name" on:click="{() => {window.location.href=member.marcel}}"><span style="border-bottom: 2px solid #FE414D;">{member.name}</span></p>
				<div class="title">{member.title}</div>
				<div style="font-size: .8rem">{member.job}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	
	.about{
		min-height: 20rem;
		max-width: 120rem;
		margin: 0 auto;
		padding: 4rem 6rem 4rem 6rem;
      	text-align: center;
    }

	.team{
		display:flex;
		font-weight: bold;
	}

	.name{
		margin: 1rem 0 0 0;
	}

	.name:hover{
		cursor: pointer;
		font-weight: 800;
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

	@media screen and (max-width: 500px) {
		.team{
			display: block;
		}
	}

	pre{
		display: flex;
		justify-content: center;
		
	}

	pre:before,
    pre:after {
		content: "";
		flex: 1 1;
		border-bottom: 1px solid #000;
		margin: auto;
		
    }
	
</style>
