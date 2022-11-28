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
		answer: "Some answer"},

		{key:"3",
		question: "What are the rules?",
		answer: "Some answer"},

		{key:"4",
		question: "How many games do I play?",
		answer: "Some answer"},

		{key:"5",
		question: "What is double elimination?",
		answer: "Some answer"},

		{key:"6",
		question: "Who can I contact about scheduling issues?",
		answer: "Some answer"},


	]



</script>

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

<style>
	
	:global(.accordion){
		margin: 0 auto;
		padding-right: 6rem;
		padding-left: 6rem;
		padding-top: 4rem;
		padding-bottom:4rem;
      	text-align: center;
    }

	:global(.accordion-item) {
		margin: 1rem; 
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
		
</style>
