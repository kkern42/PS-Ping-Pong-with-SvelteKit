<script>
    const DATA = {

    "Tournament": "Winter 2023", 
    "Participants": [
        {"name": "Sophie Reck", "entries": 4},
        {"name": "Grace Moon", "entries": 2},
        {"name": "Nia Washington", "entries": 5},
        {"name": "Deanna Sagaris", "entries": 1},
        {"name": "Anthony Pizzulli", "entries": 2},
        {"name": "Jim Gulsen", "entries": 4},
        {"name": "Sahana Sripadanna", "entries": 1}
    ]

    }; 

    let RAFFLE = []; 
    let winner

    let participants = DATA["Participants"]

    // add people to RAFFLE based on number of entries 
    participants.forEach(function (person){
        let n = person.name
        let e = person.entries 

        let i = 0
        while (i < e){
            RAFFLE.push(n)
            i++
        }
    })

    function getWinner(){
        winner = RAFFLE[Math.floor(Math.random() * RAFFLE.length)];
    }


</script>

<svelte:head>
	<title>{DATA["Tournament"]} Raffle</title>
	<meta name="description" content="Tournament Raffle Winner" />
</svelte:head>

<div class="raffle">
    <h1>{DATA["Tournament"]} Raffle</h1>
 
    <button on:click={getWinner}>Get Winner</button>

    <div id="result">Winner is {winner}</div>

    <div class="allEntries">
        {#each participants as participant}

            <div class="people">
                <h2 class="name">{participant.name}</h2>
                <h2 class="wins">{participant.entries}</h2>
            </div>
        {/each}
    </div>

</div>

<style>

    .raffle {
		min-height: 20rem;
		max-width: 120rem;
		margin: 0 auto;
		padding: 4rem 6rem 4rem 6rem;
		text-align: center;
	}

</style>