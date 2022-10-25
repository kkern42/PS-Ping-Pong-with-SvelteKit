<svelte:head>
	<title>Champs</title>
	<meta name="description" content="PS PP CHAMPIONS" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/hero_image_ashley_ayush2.png';
  
  // it would be cool to import data from a JSON
  let champions = [
    {
      title: "August 2022 - Tier 1 Bracket",
      winner: "Sandy Jiang",
      runnerUp: "Ashley Kim",
      score: "21-19"
    },  
    {
      title: "August 2022 - Tier 2 Bracket",
      winner: "Kevin Kern",
      runnerUp: "Abe Lincoln",
      score: "42-40"
    }, 
  ];

</script>
  
  
<Hero title={"&#x1F3C6;Champions&#x1F3C6;"} subcontent={"<i>Your <b>legacy</b> will never die</i>"} imageRef={heroImage}/>
<div class="champs">
    
  <!-- <h1>Champions &#x1F3C6;</h1> -->

  <!-- <p>
    *Champions are crowned after winning their bracket tier.
  </p>
  
  <p class="read-the-docs">
    Since September 2022
  </p> -->

  <!-- need like player images to go here -->
  {#each champions as champion}
    <div>
      <h2>{champion.title}</h2>
      <div class="champDetails">
        <h3>Winner: <span style="">{champion.winner}</span></h3>
        <h4>Runner Up: {champion.runnerUp}</h4>
        <p>Final Score: {champion.score}</p>
      </div>
    </div>
  {/each}
    
</div>
  
<style>

  .champs{
    margin: 0 auto;
    padding-right: 6rem;
    padding-left: 6rem;
    padding-bottom: 4rem;
    padding-top:2rem;
    text-align: left;
  }

    h3{
      font-size: 1.8rem;
      font-weight: bold;
    }

    .champDetails{
      margin-left: 1.8rem;
    }
    
  </style>
  