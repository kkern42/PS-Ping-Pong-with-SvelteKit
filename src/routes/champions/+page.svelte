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
      title: "Summer 2022 - Tier 1 Bracket",
      winner: "Sandy Jiang",
      runnerUp: "Ashley Kim",
      score: "21-19"
    },  
    {
      title: "Fall 2022 - Tier 1 Bracket",
      winner: "To Be Determined",
      runnerUp: "To Be Determined",
      score: "To Be Determined"
    }, 
    {
      title: "Fall 2022 - Tier 2 Bracket",
      winner: "To Be Determined",
      runnerUp: "To Be Determined",
      score: "To Be Determined"
    }, 
  ];

</script>
  
  
<Hero title={"Champions"} subContent={'*Champions are crowned after winning their bracket tier.'} imageRef={heroImage} footer={"Since September 2022"}/>

<div class="champs">

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

    <hr/>
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
    margin-left: 1rem;
  }
    
  </style>
  