<svelte:head>
	<title>Images</title>
	<meta name="description" content="PLayer Profiles" />
</svelte:head>

<script>
    import PSPPLogo from '$lib/images/pingpong.svg';
    import { onMount } from "svelte";
    import Hero from '../Hero.svelte';
    import heroImage from '$lib/images/hero-imagespg.png';
    import kevin from '$lib/images/hero_image_ashley_ayush2.png';
    import ashley from '$lib/images/jacob-alden-hero.png';



    let slideIndex = 0;

    /**
	 * @type {any[]}
	 */
    let images = []

  
        for (let i = 0; i < 24; i++) {
        images.push({
            date: "",
            picture: "https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/gallery%2FIMG_" + i +".jpeg?alt=media&token=5b4f2e37-9dc3-41c6-bb5f-c54edbbb6b24"
        })
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
    }

   let pop = false;
    let displayImage = ""
    const showImage = ( /** @type {string} */ ref) => {
		pop = true; 
        displayImage = ref;
	};

    const closeImage = () => {
        pop = false;
    }


</script>

<!-- <Hero title={"Photo Gallery"} subContent={'JD needs to take more pics'} imageRef={heroImage}/> -->

<div class="images">
    <div>
        <h1>Tournament Images</h1>
        <p>Checkout pictures from the 375 Hudson 9th Floor Ping Pong Table</p>
        <p>Dont see yourself, join the <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8"><u>PS PP NYC</u></a> Teams channel so you don't miss the next tournament!</p>
      </div>

    <div class="thumbnails">
        {#each images as image, index}
            <div class="img-container">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img class="subImages" src={image.picture} alt="{image.date}" on:click="{()=>showImage(image.picture)}">
            </div>
        {/each}
    </div>

    {#if pop}
        <div class="popup">
            <div class="popup-content">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <span class="close" on:click="{()=>closeImage()}">&times;</span>
                <div class="popup-img-container">
                    <img src={displayImage} alt="ping pong dipalsyed"/>
                </div> 
            </div>
        </div>
    {/if}
</div>

<style>
    
    .thumbnails{
        display: flex;
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: center;
    }

    .subImages:hover{
        cursor: pointer;
        filter: brightness(75%);
    }

    .images{
        padding: 5.5rem 5rem 4rem 5rem;
    }

    img{
		width:100%;
	}

    button{
        color: white;
        background-color: black;
    }

    .img-container{
       display: flex; 
       /* 250px */
       flex: 0 0 15rem;
       justify-content: center;
       /* border: 4px solid #eee; */
        padding: 0.5rem;
        background-color: #f9f9f9;

    }

    .img-container img{
       object-fit: cover;
       aspect-ratio: 8/7;
       height: auto;
    }

    .prev{
        cursor: pointer;  
        /* transition: 0.6s ease; */
        border-radius: 3px 3px 3px 3px;
    }

    .next {
        cursor: pointer;
        /* transition: 0.6s ease; */
        border-radius: 3px 3px 3px 3px;
    }

    .popup{
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 65px; /* Location of the box */
        padding-bottom: 300px;
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height:100%;
       overflow: scroll;
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .popup-content {
        /* background-color: #fefefe; */
        margin: auto;
        padding: 20px;
        width:80%;
    }

    .popup-img-container{
       display: flex; 
       justify-content: center;
       
    }

    .popup-img-container img{
        border: 10px solid white;
       width: 60%;
       background-color: #f9f9f9;
    }

    .close {
        color: white;
        font-size: 50px;
        float: right;
        font-weight: bold;
        padding:.1rem;
        
        
    }

    .close:hover,
    .close:focus {
        color: darkgray;
        text-decoration: none;
        cursor: pointer;
    }

</style>