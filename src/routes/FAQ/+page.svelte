<svelte:head>
	<title>FAQ</title>
	<meta name="description" content="Frequently Asked Questions" />
</svelte:head>

<script>
	import { Accordion, AccordionItem } from 'svelte-collapsible'
	
	let questions = [
		{key:"1", 
		question: "How do I join a tournament?",
		answer: "Fill out this " + '<a href="https://docs.google.com/forms/d/e/1FAIpQLScKCQGcEkON_31BSsaIYkFdUgEPsbu-NLFUGR_HQY0PS2vgLA/viewform">Google Form</a>' + " by EOD 2/10!"},
		
		{key:"2",
		question: "What tier should I be in?",
		answer: "Tiers are based off your prior ping pong experince. If you are more experienced, \
		sign up for tier 1. If you haven't played a lot before, join tier 2!"},

		{key:"3",
		question: "What are the rules?",
		answer: "Older player serves first. Matches are played to 21 points and you must win by at \
		least 2 points. If you win your point, you serve next. You get 2 chances to serve. A serve is\
		considered a let if it touches the net and this attempt does not count in your 2 chances. \
		Read the full set of rules " + '<a href="">HERE</a>'},

		{key:"4",
		question: "How many games do I play?",
		answer: "You are guaranteed to play at least 2 matches. If you win, you will play more."},

		{key:"5",
		question: "What is double elimination?",
		answer: "You can lose up to 1 match and still stay in the tournament. If you lose again,\
		you are then eliminated."},

		{key:"6", 
		question: "What is the bracket format?", 
		answer: "You will be placed in either tier 1 or tier 2 based on your experience level. \
		Everyone starts in their respective tier's Winner's bracket. If you lose a match, you are\
		moved to the Loser's bracket for your tier. If you lose again in the Loser's bracket, you are eliminated."},

		{key:"7",
		question: "Who can I contact about scheduling issues?",
		answer: "Ping Ashley Kim, JD Pablo or Kevin Kern on Teams"},

		{key:"8",
		question: "Who's the best player in the tournament?",
		answer: "Come on you know we can't answer that..."},
	]
</script>

<div class="faq">
	<h1>FAQ</h1>
	<pre><div style="padding: 0 1rem 0 1rem;">Find the answers to all your burning questions</div></pre>
	<Accordion>
		{#each questions as question}
		<AccordionItem key={question.key}>
			<div slot='header' class='header'>
				<!-- <img src={item.img} alt="Cover"/> -->
				<div>
					<p>{ question.question }</p>
				</div>
			</div>
			
			<p slot='body' class='body'>
				{@html question.answer }
			</p>
		</AccordionItem>
		
	{/each}
	</Accordion>
</div>

<style>
	.faq{
		min-height: 20rem;
		max-width: 120rem;
		margin: 0 auto;
		padding: 4rem 6rem 4rem 6rem;
      	text-align: center;
    }
	
	:global(.accordion){
		margin: 0 auto;
		padding-right: 0;
		padding-top: .5rem;
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

	@media screen and (max-width: 500px) {
       .faq{
			padding: 4rem 2rem 4rem 2rem;
			text-align: center;
	   }

	   :global(.accordion){
			padding-right: 0rem;
    	}
    }		
</style>
