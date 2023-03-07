<script>
    import SvelteTable from "svelte-table";

    const DATA = {

    "Tournament": "Winter 2023", 
    "Participants": [
        {"name": "Sophie Reck", "entries": 4},
        {"name": "Grace Moon", "entries": 2},
        {"name": "Nia Washington", "entries": 5},
        {"name": "Deanna Sagaris", "entries": 1},
        {"name": "Anthony Pizzulli", "entries": 2},
        {"name": "Jim Gulsen", "entries": 4},
        {"name": "Sahana Sripadanna", "entries": 1},
        {"name": "Kevin Garlepp", "entries": 1},
        {"name": "Jennifer He", "entries": 3},
        {"name": "Kelly Buchanan", "entries": 2},
        {"name": "Vinit Prabhu", "entries": 5},
        {"name": "Suresh Padhiary", "entries": 1},
        {"name": "Jacob Lagmay", "entries": 3},
        {"name": "SJ Clarke", "entries": 2},
        {"name": "Tushar Arora", "entries": 1},
        {"name": "Omer Ecran", "entries": 5},
        {"name": "Katie So", "entries": 1},
        {"name": "Rufino Balayo", "entries": 4},
        {"name": "Samuel Niakan", "entries": 4},
        {"name": "Sandy Jiang", "entries": 5},
        {"name": "Krushi Patel", "entries": 1},
        {"name": "Etai Barash", "entries": 4},
        {"name": "Alden Aspiras", "entries": 2},
        {"name": "Ensar Dorgrusoz", "entries": 3},
        {"name": "Elias Eberman", "entries": 1},
    ]

    }; 

    let RAFFLE = []; 
    let winner; 
    let visible = false; 

    const rows = DATA["Participants"]

    // add people to RAFFLE based on number of entries 
    rows.forEach(function (person){
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
        visible = !visible; 
    }


    // TABLE
    const columns = [
        {
            key: "name", 
            title: "Name", 
            value: v => v.name,
            sortable: true, 
        }, 
        {
            key: "entries", 
            title: "Raffle Entries", 
            value: v => v.entries, 
            sortable: true, 
            headerClass: "text-left",
        }
    ]

</script>

<svelte:head>
	<title>{DATA["Tournament"]} Raffle</title>
	<meta name="description" content="Tournament Raffle Winner" />
</svelte:head>

<div class="raffle">
    <h1>{DATA["Tournament"]} Raffle</h1>
 

    <button on:click={getWinner}>Get Winner</button>

    {#if visible}
        <div id="result">&#127881 Winner is {winner} &#127881</div>
    {/if}

    <div class="my-svelte-table">
        <SvelteTable 
            columns="{columns}" 
            rows="{rows}"
        ></SvelteTable>
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

    :global(.my-svelte-table){
        table-layout: fixed;
        border: 2px solid gray;
        padding: 10px;
        margin: 1rem;
    }

    :global(.my-svelte-table tbody){
        border: solid black 1px; 
        border-collapse: collapse; 
        background: gainsboro; 
        text-align: center; 
        padding: 10px;
    }


</style>