<svelte:head>
	<title>Champs</title>
	<meta name="description" content="PS PP CHAMPIONS" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/hero_image_ashley_ayush2.png';
  import sandy from '$lib/images/profile-pictures/sandy2.png';
  import nia from '$lib/images/profile-pictures/nia.png';
  import reece from '$lib/images/profile-pictures/Reece.png';

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
      picture: nia,
    }, 
    {
      date: "Fall 2022",
      tier: "1",
      winner: "Reece Eberhardt",
      runnerUp: "Ayush Saxena",
      score: "21-18",
      picture: reece,
    }, 
  ];

</script>
  
  
<Hero title={"Champions"} subContent={'*Champions are crowned after winning their bracket tier.'} imageRef={heroImage} footer={"Since September 2022"}/>

<div class="champs">

  {#each champions as champion, index}
    <div class="champ-container">

      <div class="img-container">
        <img alt="PS PP Champion {champion.winner}" src={champion.picture} class="profile-picture"/>
      </div>

      <div class="info">
        <h2><span style="border-bottom: 4px solid #FE414D">{champion.date} </span>- Tier {champion.tier} Bracket</h2>
        <div class="champDetails">
          <h3>&#x1f947; Winner: <span>{champion.winner}</span></h3>
          <h4>&#x1f948; Runner Up: {champion.runnerUp}</h4>
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
    padding: 2rem 6rem 4rem 6rem;
    text-align: left;
  }

  .info{
    margin-left:3rem;
  }

  h3{
    font-size: 1.8rem;
    font-weight: bold;
  }
    
  .champ-container{
    display: flex;
    padding: 1.5rem;
    align-items: center;
  }
  
  .img-container{
    width: 25%;
  }

  /* This is a little inconsistent */
  @media screen and (max-width: 1000px) {
    .champs{
      padding: 2rem 3rem 4rem 3rem;
    }

    .champ-container{
      padding: 3rem 1.5rem 3rem 1.5rem;
    }

    .img-container{
        width: 45%;
    }

    h2{
      font-size: 1.5rem;
    }

    h3{
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 500px) {
    h2{
      font-size: 1.5rem;
    }

    h3{
      font-size: 1.3rem;
    }

    .champs{
      padding: 2rem 3.5rem 4rem 3.5rem;
      text-align: center;
    }

    .champ-container{
      display: block;
      padding: 1.5rem;
      align-items: center;
    }

    .img-container{
        
        /* max-width: 15rem; */
        width: 100%;
    }

    img{
      width:80%;
      border-radius: 50%;
      /* border: 4px solid lightgray; */
    }

    .info{
      margin-left:0rem;
    }
  }
    
  </style>
  