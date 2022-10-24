<script>
    import { page } from '$app/stores';
</script>

<footer class="footer">

<div class="container">
<ul class="foote_bottom_ul_amrc">
<li><a class:active={$page.url.pathname.startsWith('/about')} href="/about">About Us</a></li>
<li><a href="http://webenlance.com">Champions</a></li>
<li><a href="http://webenlance.com">Dates</a></li>
<li><a href="http://webenlance.com">Blog</a></li>
<li><a href="http://webenlance.com">Contact</a></li>
</ul>

<div class="bottom_border"></div>

<p class="text-center">Copyright @1882 | Designed by the <a href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8">PS PP Comittee</a></p>

</div>

</footer>

  <style>
    
    footer { 
        width:100%; 
        background-color:#333; 
        padding:10px 0px 25px 0px ;
    }

    footer p { 
        font-size:13px; 
        color:#CCC; 
        padding-bottom:0px; 
        margin-bottom:8px;
    }

    .bottom_border { 
        border-bottom:1px solid #323f45; padding-bottom:20px;}
    .foote_bottom_ul_amrc {
        list-style-type:none;
        padding:0px;
        display:table;
        margin-top: 10px;
        margin-right: auto;
        margin-bottom: 10px;
        margin-left: auto;
    }
    .foote_bottom_ul_amrc li { 
        display:inline;
    }
    .foote_bottom_ul_amrc li a { 
        color:#999; 
        margin:0 12px;
    }

    .text-center{
        text-align: center;
    }
  </style>