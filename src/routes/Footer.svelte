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
        <p class="text-center">Copyright @1882 | Designed by the <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8">PS PP Comittee</a></p>

    </div>

</footer>

<!-- change footer to flex box not a ul -->
<style>
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
        border-bottom:1px solid #323f45; padding-bottom:20px;}

    .text-center{
        text-align: center;
    }

    @media screen and (max-width: 500px) {
        .footer_bottom_container a{
            font-size: .8rem;
        }
    }

</style>