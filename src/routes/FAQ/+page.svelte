<svelte:head>
	<title>FAQ</title>
	<meta name="description" content="Frequently Asked Questions" />
</svelte:head>

<script>
	import { Accordion, AccordionItem } from 'svelte-collapsible'
	
	let questions = [
		{key:"1", 
		question: "How do I join a tournament?",
		answer: "Look out for an email in January or reach out to Ashley Kim on teams."},

		{key:"2",
		question: "What tier should I be in?",
		answer: "Tiers are based off your prior ping pong experince and your past experince playing stick sports"},

		{key:"3",
		question: "What are the rules?",
		answer: "Its pretty straight foward, winners serves more thought out answer to be posted soon"},

		{key:"4",
		question: "How many games do I play?",
		answer: "On average players play about 4 games across 3 weeks"},

		{key:"5",
		question: "What is double elimination?",
		answer: "You are allowed to loose twice before you are knocked out of the losers bracket. If you lose a game in the torurnmanet you will be entered into the losers bracket which if you get through you will play the winner of the winners bracket for the championship. If you loose in the losers bracket you are out."},

		{key:"6",
		question: "Who can I contact about scheduling issues?",
		answer: "Ping Ashley Kim, JD Pablo or Kevin kern"},
		{key:"7",
		question: "Whos the best player in the tournament?",
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
				{ question.answer }
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
