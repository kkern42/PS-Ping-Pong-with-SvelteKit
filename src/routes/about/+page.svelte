<svelte:head>
	<title>About US</title>
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
	]
</script>

<div class="about">
	<h1>About Us</h1>
	
	<pre>Meet the PS Ping Pong Federation</pre>

	<p>
		The PS Ping Pong Federation (PSPPF) is the governing body for all national table tennis associations. 
		The role of the PSPPF includes overseeing rules and regulations and seeking technological improvement for the sport of table tennis. 
		The PSPPF is responsible for the organization of numerous international competitions, including the World Table Tennis Championships that has continued since 1926.
	</p>

	<p>Remember to have fun!</p>

	<h2>Team Members</h2>
	<div class="team">
		{#each members as member}
			<div class="profile">
				<img alt="PS PP Commitee Member" src={member.picture}/>
				<p class="name">{member.name}</p>
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
		padding-right: 6rem;
		padding-left: 6rem;
		padding-top: 4rem;
		padding-bottom:4rem;
      	text-align: center;
    }

	.team{
		display:flex;
		font-weight: bold;
	}

	.name{
		color: #FE414D;
		margin: 1rem 0 0 0;
	}

	.title{
		font-size: .9rem;
	}


	.profile{
		padding: 3rem;
		
	}

	img{
		width:100%;
		border-radius: 50%;
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
