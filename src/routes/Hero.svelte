<script>
	export let title = "";
    export let subcontent = "";
    export let imageRef = "";
</script>

<div class="hero_container">
    <div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef})">
        <div class="hero-text">
          <h1 style="font-size:60px"> {@html title} </h1>
          <p>{@html subcontent}</p>
        </div>
    </div>
</div>

<style>
    .hero_container{
        padding-top: 2rem;
    }
    
    .hero-image {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef});
      min-height: 20rem;
      width:100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
    
    .hero-text {
      text-align: center;
      padding-right: 6rem;
      padding-left: 6rem;
      transform: translate( 0, 60%);
      
      color: white;
    }
    
    </style>