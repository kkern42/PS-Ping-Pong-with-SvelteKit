<script>
	export let title = "";
    export let subcontent = "";
    export let imageRef = "";
</script>

<div class="hero_container">
    <div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef})">
        <div class="hero-text">
            <!-- it was 60px -->
          <h1 style="font-size: 60px"> {@html title} </h1>
          <p>{@html subcontent}</p>
        </div>
    </div>
</div>

<style>
    .hero_container{
        /* this has to be height of the header */
        padding-top: 1rem;
    }
    
    .hero-image {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef});
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
            text-align: center;
            padding-right: 6rem;
            padding-left: 6rem;
            transform: translate( 0, 80%);

            
            
            color: white;
        }
    }

    /* everything 720 and below */
    @media screen and (max-width: 720px) {
        .hero-text {
            text-align: center;
            padding-right: 6rem;
            padding-left: 6rem;
            transform: translate( 0, 50%);

            
            
            color: white;
        }
    }

    
        
    
    </style>