<script>
    import PSPPLogo from '$lib/images/pingpong.svg';
	export let title = "";
    export let subContent = "";
    export let imageRef = "";
    export let footer = "";
    export let videoLink = "";
</script>

<div class="hero_container">
    <div class="hero-image" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({imageRef})">
        <div class="hero-text">
            <a href={videoLink} > 
                <img src={PSPPLogo} class="logo" alt="PS PP Logo" />
            </a>
            <h1 style="font-size: 3rem;"> {@html title} </h1>
            <div style="text-align: center;">
                <p> {subContent} </p>
                <p class="read-the-docs"> {footer} </p>
            </div>
        </div>
    </div>
</div>

<style>
    .hero_container{
        padding-top: 3.5rem;
        text-align: center;
        display: flex;
        flex-direction: row;
    }
    
    .hero-image {
        background-image: linear-gradient(-45deg, rgba(226, 122, 122, 0.7), rgba(0, 0, 0, 0.5)), url({imageRef});
        min-height: 25rem;
        width:100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    h1{
        margin-top: 1rem;
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
        padding: 2rem  1.5rem 1.5rem 1.5rem;
        will-change: filter;
        /* animation */
        will-change: transform,opacity;
        animation: fade-in-up-key .75s forwards;
    }
        
    
</style>