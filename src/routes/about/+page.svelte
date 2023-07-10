<script>
	import ashley from '$lib/images//profile-pictures/ashley.png';

	let members = [
		{
			name: 'Ashley Kim',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2Fashleycomittee.png?alt=media&token=0f9af003-8208-4dce-84dd-d30129ee1b1d',
			title: 'PS PP Commitee Member',
			job: 'Associate Software Engineer',
			marcel: 'https://marcel.ai/ashleykim'
		},
		{
			name: 'JD Pablo',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2Fjdcomittee.jpeg?alt=media&token=910764e3-05fc-4026-800a-ceef371b6843',
			title: 'PS PP Commitee Member',
			job: 'Associate Software Engineer',
			marcel: 'https://marcel.ai/jdpablo'
		},
		{
			name: 'Kevin Kern',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2Fkevincomittee.jpeg?alt=media&token=581f2c4f-ba3e-4cde-a9be-31ee7fb73020',
			title: 'PS PP Commitee Member',
			job: 'Associate Software Engineer',
			marcel: 'https://marcel.ai/kevinkern'
		}
	];

	let interns = [
		{
			name: 'Jenn He',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2FjennIntern.jpeg?alt=media&token=f137da32-32ac-43c2-b0df-8c2d824dc581',
			title: 'Design Intern',
			job: 'Associate Experience Designer',
			marcel: 'https://marcel.ai/app/person/8065868'
		},
		{
			name: 'Yuvraj Thakur',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2Fyuvi-intern.png?alt=media&token=782c816b-defb-40d2-ba27-ae6e2652014d',
			title: 'Intern',
			job: 'Software Engineer Intern',
			marcel: 'https://marcel.ai/ensardogrusoz'
		},
		{
			name: 'Alden Aspiras',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/profile-images%2FaldenIntern.jpeg?alt=media&token=03808f1f-959d-43c9-9734-7add1d5315cf',
			title: 'Videography Intern',
			job: 'Associate Product Manager',
			marcel: 'https://marcel.ai/aldenaspiras'
		}
	];
</script>

<svelte:head>
	<title>About Us</title>
	<meta name="description" content="About this app" />
</svelte:head>

<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.13/css/all.css" />

<div class="about">
	<h1>About Us</h1>
	<pre><div style="padding: 0 1rem 0 1rem;">Meet the PS Ping Pong Commitee</div></pre>
	<p>
		The PS Ping Pong Commitee (PSPPC) is the governing body for all New York Publicis Sapient ping pong
		events. The PSPPC was born out of a need to have a little more fun in the office :) The PSPPC is
		responsible for the organization of office-wide competitions, including quarterly office Ping
		Pong Tournaments that have continued since the Summer of 2022. The PSPPC oversees all rules
		and regulations pertaining to competitions held in-office.
	</p>
	<p>Remember to have fun!</p>

	<h2>Team Members</h2>
	<div class="team">
		{#each members as member}
			<div class="profile">
				<img alt="PS PP Commitee Member" src={member.picture} class="profile-picture" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<p
					class="name"
					on:click={() => {
						window.location.href = member.marcel;
					}}
				>
					<span style="border-bottom: 2px solid #FE414D;">{@html member.name}</span>
				</p>
				<div class="title">{member.title}</div>
				<div style="font-size: .8rem">{member.job}</div>
			</div>
		{/each}
	</div>
	<!-- add interns but with saller images and text -->
	<div class="team">
		{#each interns as intern}
			<div class="profile">
				<img alt="PS PP Commitee Member" src={intern.picture} class="profile-picture" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<p
					on:click={() => {
						window.location.href = intern.marcel;
					}}
					style=" margin: 1rem 0 0 0; cursor: grab;"
				>
					<span style="border-bottom: 2px solid #FE414D;">{@html intern.name}</span>
				</p>
				<div class="title">{intern.title}</div>
				<div style="font-size: .8rem">{intern.job}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.about {
		min-height: 20rem;
		max-width: 120rem;
		margin: 0 auto;
		padding: 4rem 6rem 4rem 6rem;
		text-align: center;
	}

	.team {
		display: flex;
		font-weight: bold;
	}

	.name {
		margin: 1rem 0 0 0;
		transition: 0.6s ease;
		transition-delay: 0.3s;
	}

	.name:hover {
		cursor: pointer;
		transform: rotate(360deg);
		font-weight: 800;
	}

	.title {
		font-size: 0.9rem;
	}

	.profile {
		padding: 3rem;
	}
	@media screen and (min-width: 1400px) {
		.profile {
			padding: 5rem;
		}
	}

	/* everything 1500 and below */
	@media screen and (max-width: 1300px) {
		.profile {
			padding: 3rem;
		}
	}

	/* everything 720 and below */
	@media screen and (max-width: 1000px) {
		.profile {
			padding: 1rem;
		}
	}

	@media screen and (max-width: 500px) {
		.team {
			display: block;
		}
	}

	pre {
		display: flex;
		justify-content: center;
	}

	pre:before,
	pre:after {
		content: '';
		flex: 1 1;
		border-bottom: 1px solid #000;
		margin: auto;
	}
</style>
