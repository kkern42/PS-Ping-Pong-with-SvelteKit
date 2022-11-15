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
  import nia from '$lib/images//profile-pictures/nia.png';
  import jacob from '$lib/images//profile-pictures/jacob.png';
  import anthony from '$lib/images//profile-pictures/anthonyp.png';
  import reece from '$lib/images//profile-pictures/reecep.png';

  let engineering = [
    {
        name: "Ashley Kim",
        grip: "Handshake",
        record: "8-4",
        strength: "Tennis forehand",
        weakness: "Powerful returns",
        picture: ashley,
        reverse: "",
        margin: "right",
    },  
    {
        name: "JD Pablo",
        grip: "Pen Hold",
        record: "4-4",
        strength: "When he hits it really hard",
        weakness: "hitting the table & getting nervous",
        picture: jd,
        reverse: "",
        margin: "left",
    }, 
    {
        name: "Kevin Kern",
        grip: "Handshake",
        record: "6-4",
        strength: "Playing the angles",
        weakness: "Top competition",
        picture: kevin,
        reverse: "",
        margin: "right",
    }, 
    {
        name: "Anthony Pizzulli",
        grip: "Handshake",
        record: "0-4",
        strength: "Talking to Reece while winning for other people",
        weakness: "Winning for his matches",
        picture: anthony,
        reverse: "",
        margin: "right",
    },
    {
        name: "Reece Eberhardt",
        grip: "Handshake",
        record: "7-1",
        strength: "Saying \"Reece\" after every point",
        weakness: "Losing",
        picture: reece,
        reverse: "",
        margin: "left",
    },
  ];

  let experience = [
    {
        name: "Nia Washington",
        grip: "Handshake",
        record: "7-2",
        strength: "Consistent smart play",
        weakness: "Crowd noise",
        picture: nia,
        reverse: "",
        margin: "left",
    }, 
    {
        name: "Jacob Lagmay",
        grip: "Handshake",
        record: "2-4",
        strength: "Pressure makes diamonds",
        weakness: "Being ahead",
        picture: jacob,
        reverse: "",
        margin: "left",
    }
  ];

  let product = [
    {
        name: "Sandy Jiang",
        grip: "Penhold",
        record: "5-0",
        strength: "She just good",
        weakness: "Reece",
        picture: sandy,
        reverse: "",
        margin: "right",
    }, 

  ];

  let players = engineering;

  let enginClass = "underline"
  let prodClass = ""
  let expClass = ""

  /**
	 * @param {{name: string;grip: string;record: string;strength: string;weakness: string;picture: string;margin: string;reverse: string;}[]} capList
	 * @param {string} name
	 */
  function switchPLayers(capList, name){
        players = capList

        if(name == 'prod'){
          enginClass = ""
          prodClass = "underline"
          expClass = ""

        }
        else if(name == 'exp'){
          enginClass = ""
          prodClass = ""
          expClass = "underline"
        }
        else{
          enginClass = "underline"
          prodClass = ""
          expClass = ""
        }
    }
let classrev = ""
</script>
  
  
<Hero title={"Player Profiles"} subContent={'Know thy enemy'} imageRef={heroImage}/>

<div class="player-profiles">
  <div class="capabilities">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(experience, 'exp')}" class={expClass}>Experience</h2>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(product, 'prod')}" class={prodClass}>Product</h2> 
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(engineering, 'engin')}" class={enginClass}>Engineering</h2> 
  </div>

  <hr>

  <!-- need like player images to go here -->
  {#each players as player, index}
  {#if (index%2) == 0} <div style="display: none;">{player.reverse = "reverse"} {player.margin = "right"}</div> {:else}  <div style="display: none;">{player.margin = "left"}</div> {/if}

    <div class="player-container {player.reverse}">
      
        <div class="img-container">
            <img alt="PS PP Commitee Member" src={player.picture}/>
        </div>
        <div class="player {player.margin}">
            <h2><span style="border-bottom: 4px solid #FE414D">{player.name}</span> | <span class="record">Record: {player.record}</span></h2>
            <div class="details">
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

  .details{
    margin-left: 1rem;

    /* animation */
    will-change: transform,opacity;
    animation: fade-in-up-key .75s forwards;
  }

  .capabilities{
    display: flex;
    justify-content: center;
    padding: 1rem 0rem 1.5rem 0rem;
  }
  
  .capabilities h2{
    margin: 0rem 1.5rem .5rem 1.5rem;
  }

  .capabilities h2:hover{
    cursor: pointer;
  }



  .capabilities .underline{
    border-bottom: 4px solid #FE414D;
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
      width: 25%;
  }
    
  .record{
    font-size:1.8rem;
  }
  
  .details p{
    margin: .8rem 0 0 0;
  }

  @media screen and (max-width: 1000px) {
    .img-container{
        width: 60%;
    }
  }

  @media screen and (max-width: 500px) {
    h2{
      font-size: 1.5rem;
    }

    h3{
      font-size: 1.3rem;
    }

    .player-profiles{
      padding: 2rem 3.5rem 4rem 3.5rem;
      text-align: center;
    }

    .player-container{
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

    .record{
      font-size:1.8rem;
    }

    .left{
      margin-left: 0rem;
    }

    .right{
      margin-right: 0rem;
    }

    .details{
      margin-left: 0rem;
    }

    .record{
      font-size: 1.3rem;
    }
  }
    
  </style>
  