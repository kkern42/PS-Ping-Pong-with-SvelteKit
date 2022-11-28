<svelte:head>
	<title>Player Profiles</title>
	<meta name="description" content="PLayer Profiles" />
</svelte:head>

<script>
  import Hero from '../Hero.svelte';
  import heroImage from '$lib/images/past-bracket-hero3.png';

  import {product} from './productData.svelte';
  import {engineering} from './engineeringData.svelte';
  import {experience} from './experienceData.svelte';


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
</script>
  
  
<Hero title={"Player Profiles"} subContent={'Know thy enemy'} imageRef={heroImage}/>

<div class="player-profiles">
  <div class="capabilities" >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(experience, 'exp')}" class={expClass}>Experience</h2> 
    <h2  style="color: darkgrey;">|</h2>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(product, 'prod')}" class={prodClass}>Product</h2> 
    <h2 style="color: darkgrey;">|</h2>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h2 on:click="{()=>switchPLayers(engineering, 'engin')}" class={enginClass}>Engineering</h2> 
  </div>

  <pre><div style="padding: 0 1rem 0 1rem;">Past Participants</div></pre>

  {#each players as player, index}
  {#if (index%2) == 0} <div style="display: none;">{player.reverse = "reverse"} {player.margin = "right"}</div> {:else}  <div style="display: none;">{player.margin = "left"}</div> {/if}
    <div class="player-container {player.reverse}">
        <div class="img-container">
            <img alt="PS PP Commitee Member" src={player.picture} class="profile-picture"/>
        </div>
        <div class="player {player.margin}">
            <h2>{player.name} <span style="color:#FE414D;">|</span> <span class="record">Record: {player.record}</span></h2>
            <div class="details">
                <h3>Grip: {player.grip}</h3>
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
    margin: 0rem 1.5rem 1rem 1.5rem;
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

  .left{
    margin-left: 5rem;
  }

  .right{
    margin-right: 5rem;
  }

  .img-container{
    width: 25%;
  }
    
  .record{
    font-size: 1.8rem;
  }
  
  .details p{
    margin: .8rem 0 0 0;
  }

  pre{
		display: flex;
		justify-content: center;
		
	}

	pre:before,
    pre:after {
		content: "";
		flex: 1 1;
		border-bottom: 1px solid darkgray;
	  background-color: darkgrey;
		margin: auto;
		
  }

  @media screen and (max-width: 1000px) {
    .img-container{
      width: 60%;
    }

    hr{
      width: 100%;
    }

    .capabilities h2{
      margin: 0rem .6rem 1rem .6rem;
    }
  }

  @media screen and (max-width: 500px) {
    h2{
      font-size: 1.5rem;
    }

    h3{
      font-size: 1.3rem;
    }
    
    hr{
      display: none;
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
      width: 100%;
    }

    img{
      width:80%;
      border-radius: 50%;
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

    .capabilities h2{
      margin: 0rem .4rem 1rem .4rem;
    }
  }
</style>
  