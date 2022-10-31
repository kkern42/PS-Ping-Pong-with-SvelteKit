<svelte:head>
	<title>Player Profiles</title>
	<meta name="description" content="PLayer Profiles" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/hero_image_ashley_ayush2.png';

  import kevin from '$lib/images/profile-pictures/kevintwocat.png';
  import ashley from '$lib/images//profile-pictures/ashley.png';
  import jd from '$lib/images//profile-pictures/jdfit.png';

  
  // it would be cool to import data from a JSON
  let players = [
    {
        name: "Ashley Kim",
        grip: "Handshake",
        record: "8-4",
        strength: "Tennis forehand",
        weakness: "Powerful returns",
        picture: ashley,
    },  
    {
        name: "Kevin Kern",
        grip: "Handshake",
        record: "6-2",
        strength: "Playing the angles",
        weakness: "Top competition",
        picture: kevin,
    },  
    {
        name: "JD Pablo",
        grip: "Pen Hold",
        record: "4-3",
        strength: "That thing he does when he hits it really hard",
        weakness: "hitting the table & controlling his nerves",
        picture: jd,
    }, 
  ];

</script>
  
  
<Hero title={"Player Profiles"} subContent={'Know Thy Enemy'} imageRef={heroImage}/>

<div class="player-profiles">

  <!-- need like player images to go here -->
  {#each players as player}
    <div class="player-container">

        <div class="img-container">
            <img alt="PS PP Commitee Member" src={player.picture}/>
        
        </div>
        <div class="player">
            <h2>{player.name} | <span style="font-size:1.8rem">Record: {player.record}</span></h2>
            <div>
                <h3>Grip: <span style="">{player.grip}</span></h3>
                <p>Strength: {player.strength}</p>
                <p>Weakness: {player.weakness}</p>
            </div>
        </div>

    </div>
  {/each}
</div>
  
<style>

  .player-profiles{
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


  .player-container{
    display:flex;
    align-items: center;
    padding: 1.5rem;
  }

  img{
		width:100%;
		border-radius: 50%;
	}

    .player{
       margin-left: 3rem;
    }

    .img-container{
        
        max-width: 15rem;
    }
    
    
  </style>
  