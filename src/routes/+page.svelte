<script>

  import PSPPLogo from '$lib/images/pingpong.svg';
  import Ghost from '$lib/images/ghost.png';
  // import heroImage from '$lib/images/hero_image_ashley_ayush2.png';
  let title = "PS PING PONG";

  let imageLogo = PSPPLogo; 
  let nextImage = Ghost;

  // If image changes this will rerun only dependent on if statment
  $: if (imageLogo === Ghost){
    title = "The Spooky"
  }
  else {
    title = "PS PING PONG"
  }

  const changeImage = () => {
    let temp = imageLogo;
    imageLogo = nextImage;
    nextImage = temp;    
  }

  let brackets = [
    {
      title: "Tier 1 Bracket - Fall 2022",
      src: "https://brackethq.com/b/k4n6/embed/"
    },
    {
      title: "Tier 2 Bracket - Fall 2022",
      src: "https://brackethq.com/b/x6n6/embed/"
    },

  ];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">

    <!-- Ideally this should be a hero -->
    <div style="background-image:  url()">
      <div>
        <a href="https://brackethq.com/b/k4n6/" > 
          <img src={imageLogo} class="logo" alt="PS PP Logo" />
        </a>
      </div>
  
      <h1>{title} Tournament</h1>
    
      <p>
        Check out <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8" target="">PS PP NYC</a>, the official Teams channel for NYC PING PONG!
      </p>
      
      <p class="read-the-docs">
        Reach out to Ashely Kim, JD Pablo or Kevin Kern to learn more
      </p>
    </div>

    <button on:click="{changeImage}">Click for Spooky</button>
    
    {#each brackets as bracket}
      <div class="bracket">
        <h2 class="title">{bracket.title}</h2>
        <iframe title={bracket.title} src={bracket.src} width="100%" height="550" frameborder="0"></iframe>
      </div>
    
      <hr/>
    {/each}
  
    
    <h3>Change title</h3>
    <!-- <input type="text" value="{title}" on:input="{ (e) => { title = e.target.value; }}"/> -->
    <!-- can bind any html properties -->
    <input type="text" bind:value={title} />
  </div>

<style>
	.logo {
    height: 9em;
    padding: 1.5em;
    will-change: filter;
  }
  /* .logo:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  } */
  .read-the-docs {
    color: #888;
  }

</style>
