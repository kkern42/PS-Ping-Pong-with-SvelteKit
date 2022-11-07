<svelte:head>
	<title>Images</title>
	<meta name="description" content="PLayer Profiles" />
</svelte:head>

<script>
	import Counter from "../Counter.svelte";
    import kevin from '$lib/images/hero_image_ashley_ayush2.png';
    import ashley from '$lib/images/jacob-alden-hero.png';
    import jd from '$lib/images/past-bracket-hero3.png';

    let slideIndex = 0;

    let displayImage = kevin;

    const nextImage = () => {
    displayImage = ashley;  
  }

    let images = [
        {
            date: "",
            picture: ashley,
        },  
        {
            date: "",
            picture: kevin,
        }, 
        {
            date: "",
            picture: kevin,
        },
        {
            date: "",
            picture: ashley,
        },  
        {
            date: "",
            picture: kevin,
        }, 
        {
            date: "",
            picture: ashley,
        }, 
    ]

    function changeImage(/** @type {number} */ i) {
        if(slideIndex + i > images.length-1){
            slideIndex = 0;
        }
        else if(slideIndex + i < 0){
            slideIndex= images.length-1;
        }
        else{
            slideIndex += i;
        }

    }

    function changeToThumbNail(/** @type {number} */ i){
        slideIndex = i;
    }

    function right(){
        if(slideIndex + 1 > images.length-1){
            slideIndex = 0;
        }
        else if(slideIndex + 1 < 0){
            slideIndex= images.length-1;
        }
        else{
            slideIndex += 1;
        }
        images = images;
        console.log("Image selection change");
    }

    function left(){
        if(slideIndex + (-1) > images.length-1){
            slideIndex = 0;
        }
        else if(slideIndex + (-1) < 0){
            slideIndex= images.length-1;
        }
        else{
            slideIndex += (-1);
        }
        images = images;
        console.log("Image selection change");
    }

</script>

<div class="images">
    <!-- {#each images as image, index}
       {#if index == slideIndex}
        <div class="img-container">
            <img src={image.picture} alt="{image.date}">
            <button type="button" class="prev" on:click="{left}">❮</button>
            <button type="button" class="next" on:click="{right}">❯</button>
        </div>
       {/if}
    {/each} -->

    <div class="img-container">
        <img src={displayImage} alt="ping pong office">
        <button type="button" class="prev" on:click="{nextImage}">❮</button>
        <button type="button" class="next" on:click="{nextImage}">❯</button>
    </div>

    <div class="thumbnails">
        {#each images as image, index}
            <div class="img-container">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img src={image.picture} alt="{image.date}" on:click="{()=>changeToThumbNail(index)}">

            </div>
        {/each}
    </div>
    
</div>

<style>
    .thumbnails{
        display: flex;
        padding: 1rem;
    }

    .images{
        padding: 5.5rem 4rem 2rem 4rem;
    }
     img{
		width:100%;
	}

    button{
        color: white;
        background-color: black;
    }

    .prev{
        cursor: pointer;
        position: absolute;
        top: 50%;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        left: 4rem;
    }

    .next {
        cursor: pointer;
        transition: 0.6s ease;
        top: 50%;
        right: 4rem;
        border-radius: 3px 0 0 3px;
        position: absolute;
    }
</style>