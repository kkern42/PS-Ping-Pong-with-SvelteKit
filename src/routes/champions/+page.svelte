<svelte:head>
	<title>pp ps</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  
    let champions = [
      {
        title: "Tier 1 Bracket - August 2022",
        winner: "Sandy Jiang"
      },  
    ];
</script>
  
  
<Hero title={"&#x1F3C6;Champions&#x1F3C6;"} subcontent={"<i>Your <b>legacy</b> will never die</i>"} imageRef={"/src/lib/images/hero_image_ashley_ayush.png"}/>
  <div class="champs">
    
      <!-- <h1>Champions &#x1F3C6;</h1> -->
    
      <p>
        Champions are crowned after winning their bracket tier.
      </p>
      
      <p class="read-the-docs">
        Since September 2022
      </p>
  
      <!-- need like player images to go here -->
      {#each champions as champion}
        <h2>{champion.title}: {champion.winner}</h2>
      {/each}
    
    </div>
  
  <style>

    .read-the-docs {
      color: #888;
    }
    .champs{
      
      min-height: 20rem;
      max-width: 120rem;
      margin: 0 auto;
      padding-right: 6rem;
      padding-left: 6rem;
      padding-bottom: 4rem;
      text-align: left;
    }
  </style>
  