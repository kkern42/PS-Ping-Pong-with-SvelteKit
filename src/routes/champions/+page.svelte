<svelte:head>
	<title>Champs</title>
	<meta name="description" content="PS PP CHAMPIONS" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/hero_image_ashley_ayush2.png';
  import sandy from '$lib/images/profile-pictures/sandy2.png';
  import icon from '$lib/images/profile-pictures/icon.png';

  // it would be cool to import data from a JSON
  let champions = [
    {
      date: "Summer 2022",
      tier: "1",
      winner: "Sandy Jiang",
      runnerUp: "Ashley Kim",
      score: "21-19",
      picture: sandy,
    },  
    {
      date: "Fall 2022",
      tier: "2",
      winner: "Nia Washington",
      runnerUp: "Sophie Reck",
      score: "21-18",
      picture: icon,
    }, 
    {
      date: "Fall 2022",
      tier: "1",
      winner: "To Be Determined",
      runnerUp: "To Be Determined",
      score: "To Be Determined",
      picture: icon,
    }, 
  ];

</script>
  
  
<Hero title={"Champions"} subContent={'*Champions are crowned after winning their bracket tier.'} imageRef={heroImage} footer={"Since September 2022"}/>

<div class="champs">

  {#each champions as champion, index}
    <div class="champ-container">

      <div class="img-container">
        <img alt="PS PP Commitee Member" src={champion.picture}/>
      </div>

      <div style="margin-left: 3rem">
        <h2><span style="border-bottom: 4px solid #FE414D">{champion.date} </span>- Tier {champion.tier} Bracket</h2>
        <div class="champDetails">
          <h3>Winner: <span>{champion.winner} &#x1f947;</span></h3>
          <h4>Runner Up: {champion.runnerUp} &#x1f948;</h4>
          <p>Final Score: {champion.score}</p>
        </div>
      </div>

    </div>
    {#if index < (champions.length-1)}<hr/>{/if}
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
    
  .champ-container{
    display: flex;
    padding: 1.5rem;
    align-items: center;
  }

  img{
		width:100%;
		border-radius: 50%;
    /* border: 4px solid lightgray; */
	}
  .img-container{
        
        max-width: 15rem;
        
    }
    
  </style>
  