<script>
  import PSPPLogo from '$lib/images/pingpong.svg';
  import Comments from './Comments.svelte';

  const Ghost = 'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/ghost.png?alt=media&token=f515a3fc-034e-4c3f-8505-8083b81c3a3b';
  let title = "PING PONG";
  let imageLogo = PSPPLogo; 
  let nextImage = Ghost;
  let buttonText = 'Click for Spooky'; 
  let psText = 'Click for PS'; 

  $: if (imageLogo === Ghost){
    title = "Spooky"
  }
  else {
    title = "PING PONG"
  }

  const changeImage = () => {
    let temp = imageLogo;
    imageLogo = nextImage;
    nextImage = temp;    

    let currText = buttonText; 
    buttonText = psText; 
    psText = currText; 
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
	<title>PS Ping Pong</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
  <div>
    <div>
      <a href="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/Videos%2FIMG_7657%20(2).mp4?alt=media&token=1ca064cf-acb9-4142-ad48-9c130699bb04" > 
        <img src={imageLogo} class="logo" alt="PS PP Logo" loading="lazy"/>
      </a>
    </div>
    <h1>PS {title} Tournament</h1>
    <p>Check out <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8" target=""><u>PS PP NYC</u></a>, the official Teams channel for NYC PING PONG!</p>
    <p class="read-the-docs">Reach out to Ashley Kim, JD Pablo or Kevin Kern to learn more</p>
  </div>

  <button on:click="{changeImage}">{buttonText}</button>
  
  {#each brackets as bracket, index}
    <div class="bracket">
      <h2 class="title">{bracket.title}</h2>
      <iframe title={bracket.title} src={bracket.src} width="100%" height="550" frameborder="0"></iframe>
    </div>
    {#if index < (brackets.length-1)}<hr/>{/if}
  {/each}
  <Comments />
</div>

<style>
	.logo {
    height: 9em;
    padding: 1.5em;
    /* animation */
    will-change: transform,opacity;
    animation: fade-in-up-key .75s forwards;
    transition: .5s;
  }

  .read-the-docs {
    color: #888;
  }

  .logo:hover {
    filter: drop-shadow(0 0 .5em #ff3e00aa);
  }
  .app{
    z-index: 2;
  }
</style>
