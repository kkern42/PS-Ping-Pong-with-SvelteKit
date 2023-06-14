<script>
	import { Accordion, AccordionItem } from 'svelte-collapsible';

	let questions = [
		{
			key: '1',
			question: 'How do I join a tournament?',
			answer:
				'Fill out the form on the front page of this website, join our Teams channel, or contact any of the committee members!'
		},

		{
			key: '2',
			question: 'What tier should I be in?',
			answer:
				"Tiers are based off your prior ping pong experience. If you are more experienced, sign up for Tier 1. If you haven't played a lot before, join Tier 3! If you're somewhere in between, join Tier 2. In any case, the committee will try our best to place everyone where they should be."
		},

		{
			key: '3',
			question: 'What are the rules?',
			answer:
				'Older player serves first. Matches are played to 21 points and you must win by at \
		least 2 points. Switch serves after every 2 points. You get 2 chances to serve. A serve is\
		considered a let if it touches the net and this attempt does not count as one of your 2 chances. \
		Read the full set of rules ' +
				'<a href="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/Ping%20Pong%20Tournament%20Rules.pdf?alt=media&token=8e79d99e-a7dd-4b0c-a33f-0a06bfa0f95c"><u>here</u></a>.'
		},

		{
			key: '4',
			question: 'How many games do I play?',
			answer: 'You are guaranteed to play at least 2 matches. If you win, you will play more.'
		},

		{
			key: '5',
			question: 'What is double elimination?',
			answer:
				'You can lose up to 1 match and still stay in the tournament. If you lose again,\
		you are then eliminated.'
		},

		{
			key: '6',
			question: 'What is the bracket format?',
			answer:
				"You will be placed in either Tier 1, 2, or 3 based on your experience level. \
		Depending on which tier you're in, you will play either a round robin into a single elimination bracket, or a double elimination bracket."
		},

		{
			key: '7',
			question: 'Who can I contact about scheduling issues?',
			answer: 'Ping Ashley Kim, JD Pablo or Kevin Kern on Teams.'
		},

		{
			key: '8',
			question: "Who's the best player in the tournament?",
			answer: "Come on. You know we can't answer that (but you can check out our Player Profiles and run some analysis yourself!)."
		}
	];
</script>

<svelte:head>
	<title>FAQ</title>
	<meta name="description" content="Frequently Asked Questions" />
</svelte:head>

<div class="faq">
	<h1>FAQ</h1>
	<pre><div
			style="padding: 0 1rem 0 1rem;">Find the answers to all your burning questions.</div></pre>
	<Accordion>
		{#each questions as question}
			<AccordionItem key={question.key}>
				<div slot="header" class="header">
					<!-- <img src={item.img} alt="Cover"/> -->
					<div>
						<p>{question.question}</p>
					</div>
				</div>

				<p slot="body" class="body">
					{@html question.answer}
				</p>
			</AccordionItem>
		{/each}
	</Accordion>
</div>

<style>
	.faq {
		min-height: 20rem;
		max-width: 120rem;
		margin: 0 auto;
		padding: 4rem 6rem 4rem 6rem;
		text-align: center;
	}

	:global(.accordion) {
		margin: 0 auto;
		padding-right: 0;
		padding-top: 0.5rem;
		text-align: center;
	}

	:global(.accordion-item) {
		text-align: left;
		margin: 2rem;
		border-bottom: 1px solid rgb(100, 120, 140);
	}

	.header {
		display: flex;
		align-items: center;
		padding: 0.5em;
	}

	.header p {
		font-size: 18px;
		margin: 0;
	}

	.body {
		padding: 0.5em;
		margin: 0;
		font-size: 18px;
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

	@media screen and (max-width: 500px) {
		.faq {
			padding: 4rem 2rem 4rem 2rem;
			text-align: center;
		}

		:global(.accordion) {
			padding-right: 0rem;
		}
	}
</style>
