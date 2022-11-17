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
		},
		{
			name: "JD Pablo",
			picture: jd,
			title: "PS PP Commitee Member",
			job: "Associate Software Engineer",
		},
		{
			name: "Kevin Kern",
			picture: kevin,
			title: "PS PP Commitee Member",
			job: "Associate Software Engineer",
		},
	];
</script>

<div class="about">
	<h1>About Us</h1>
	<pre>Meet the PS Ping Pong Commitee</pre>

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
				<p class="name"><a href="https://marcel.ai/app/myaccount"><span style="border-bottom: 2px solid #FE414D">{member.name}</span></a></p>
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

	.name a{
		color: #213547;
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
		
</style>
