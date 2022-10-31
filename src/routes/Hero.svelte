<script>
    import PSPPLogo from '$lib/images/pingpong.svg';
	export let title = "";
    export let subContent = "";
    export let imageRef = "";
</script>

<div class="hero_container">

    <!-- <div class="title">
        <a href="https://brackethq.com/b/k4n6/" > 
            <img src={PSPPLogo} class="logo" alt="PS PP Logo" />
        </a>
        <h1 style="font-size: 3rem"> {@html title} </h1>
        <div style="text-align: center;">
            <p>
                *Champions are crowned after winning their bracket tier.
            </p>
              
            <p class="read-the-docs">
                Since September 2022
            </p>
        </div>
    </div> -->

    <div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef})">
        <div class="hero-text">
            <!-- it was 60px -->
          <!-- <h1 style="font-size: 60px"> {@html title} </h1> -->
          <!-- <p>{@html subcontent}</p> -->
          <a href="https://brackethq.com/b/k4n6/" > 
            <img src={PSPPLogo} class="logo" alt="PS PP Logo" />
        </a>
        <h1 style="font-size: 3rem"> {@html title} </h1>
        <div style="text-align: center;">
            <p>
                {subContent}
            </p>
              
            <p class="read-the-docs">
                Since September 2022
            </p>
            </div>
        </div>
    </div>
</div>

<style>
    .hero_container{
        /* this has to be height of the header */
        padding-top: 3.5rem;
        text-align: center;
        display: flex;
        flex-direction: row;
    }
    
    .hero-image {
      /* background-image: linear-gradient(-45deg, rgba(229, 93, 135, 0.7), rgba(95, 195, 228, 0.7)), url({imageRef}); */
      background-image: linear-gradient(-45deg, rgba(226, 122, 122, 0.7), rgba(0, 0, 0, 0.5)), url({imageRef});
      min-height: 25rem;
      width:100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
    
    
    /* everything 720 and above */
    @media screen and (min-width: 720px) {
        .hero-text {
            /* text-align: center; */
            padding-right: 6rem;
            padding-left: 6rem;
            /* transform: translate( 0, rem); */
            font-size: 1rem;
            color: white;
        }
    }

    /* everything 720 and below */
    @media screen and (max-width: 720px) {
        .hero-text {
            /* text-align: center; */
            padding-right: 6rem;
            padding-left: 6rem;
            /* transform: translate( 0, 50%); */
            color: white;
        }
    }

    .logo {
        height: 8rem;
        padding: 1.5rem;
        will-change: filter;
    }


    .title{
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        width:50%;
        background-color: lightgray;
    }
        
    
</style>