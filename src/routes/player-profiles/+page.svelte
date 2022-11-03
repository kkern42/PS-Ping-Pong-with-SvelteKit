<svelte:head>
	<title>Player Profiles</title>
	<meta name="description" content="PLayer Profiles" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/past-bracket-hero3.png';

  import kevin from '$lib/images/profile-pictures/kevintwocat.png';
  import ashley from '$lib/images//profile-pictures/ashley.png';
  import jd from '$lib/images//profile-pictures/jdfit.png';
  import sandy from '$lib/images//profile-pictures/sandy2.png';

  let players = [
    {
        name: "Ashley Kim",
        grip: "Handshake",
        record: "8-4",
        strength: "Tennis forehand",
        weakness: "Powerful returns",
        picture: ashley,
        reverse: "reverse",
        margin: "right",
    },  
    {
        name: "JD Pablo",
        grip: "Pen Hold",
        record: "4-3",
        strength: "That thing he does when he hits it really hard",
        weakness: "hitting the table & controlling his nerves",
        picture: jd,
        margin: "left",
    }, 
    {
        name: "Kevin Kern",
        grip: "Handshake",
        record: "6-2",
        strength: "Playing the angles",
        weakness: "Top competition",
        picture: kevin,
        reverse: "reverse",
        margin: "right",
    },  
    {
        name: "Sandy Jiang",
        grip: "Penhold",
        record: "5-0",
        strength: "She just good",
        weakness: "Reece",
        picture: sandy,
        margin: "left",
    },  
  ];

</script>
  
  
<Hero title={"Player Profiles"} subContent={'Know thy enemy'} imageRef={heroImage}/>

<div class="player-profiles">

  <!-- need like player images to go here -->
  {#each players as player, index}
    <div class="player-container {player.reverse}">
      
        <div class="img-container">
            <img alt="PS PP Commitee Member" src={player.picture}/>
        </div>
        <div class="player {player.margin}">
            <h2><span style="border-bottom: 4px solid #FE414D">{player.name}</span> | <span style="font-size:1.8rem">Record: {player.record}</span></h2>
            <div style="margin-left: 1rem;">
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
  }

  h3{
    font-size: 1.8rem;
    font-weight: bold;
  }


  .player-container{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  }

  .reverse{
    flex-direction: row-reverse
    
  }

  img{
    width:100%;
    border-radius: 50%;
  }

  .left{
      margin-left: 3rem;
  }

  .right{
      margin-right: 3rem;
  }

  .img-container{
      max-width: 15rem;
  }
    
    
  </style>
  