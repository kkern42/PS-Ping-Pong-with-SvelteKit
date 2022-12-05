<script>
    import { page } from '$app/stores';
</script>

<footer class="footer">
    <div class="container">
        <div class="footer_bottom_container">
            <a href="/">Home</a>
            <a href="/champions">Champions</a>
            <a class:active={$page.url.pathname.startsWith('/about')} href="/about">About Us</a>
            <a href="/past-brackets">Past Brackets</a>
            <a href="/player-profiles">Player Profiles</a>
            <a href="/FAQ">FAQ</a>
        </div>

        <div class="bottom_border"></div>

        <div class="techStack">
            <a href="https://svelte.dev/"><img alt="svelte logo" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/svelte.png?alt=media&token=b70bfbc4-fa45-457c-9b04-f2573aaadb78"/></a>
            <a href="https://www.javascript.com/"><img alt="java script logo" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/JavaScript-Logo.png?alt=media&token=d35fdf6f-f7eb-49dc-b0f0-a3329435ebff"/></a>
            <a href="https://firebase.google.com/products/firestore"><img alt="firestore logo" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/firestore.png?alt=media&token=5d3e7ffc-f147-4de4-a481-9c072bfb360a"/></a>
            <a href="https://azure.microsoft.com/en-us/products/functions/#overview"><img alt="azure funcitons logo" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/azure%20functions.png?alt=media&token=fadaf78a-b25b-4b11-8744-df6f132da904"/></a>
            <a href="https://github.com/"><img alt="github logo" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/github.png?alt=media&token=ceeb6c46-f836-4b5f-9ff4-c71a86c41430"/></a>
            <a href="https://www.netlify.com/"><img alt="netlify" src="https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/netlify.png?alt=media&token=95e9c0bc-257e-4ddb-b284-e970122796db"/></a>
        </div>
        <p class="text-center">Copyright @1882 | Designed by the <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8">PS PP Comittee</a></p>
    </div>
</footer>

<style>
    .techStack{
		display: flex;
		justify-content: center
	}

	.techStack a img{
        width: 50%;
		margin: 1rem .5rem 0 .5rem;
	}

    .footer_bottom_container{
        display: flex;
        justify-content: center;
    }

    .footer_bottom_container a{
        padding: .5rem 1rem .5rem 1rem;
        color:#999; 
        font-size: 1rem;
    }

    footer { 
        width:100%; 
        background-color:#333; 
        padding:20px 0px 20px 0px;
    }

    footer p { 
        font-size:13px; 
        color:#CCC; 
        padding-bottom:0px; 
        margin-bottom:8px;
    }

    .bottom_border { 
        border-bottom:1px solid #323f45; padding-bottom:20px;
    }

    .text-center{
        padding-top: 1rem;
        text-align: center;
    }

    @media screen and (max-width: 500px) {
        .footer_bottom_container a{
            font-size: .7rem;
        }

        .footer_bottom_container a{
        padding: .5rem 1rem .5rem 1rem;

        }
    }
</style>