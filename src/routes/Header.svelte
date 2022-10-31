<script>
	import { page } from '$app/stores';
  </script>
  
  <div class="navbar">
	   <!-- <img src={PSPPLogo} class="logo" alt="PS PP Logo" /> -->
	  <a class="home" href="/"><i></i>PS PP NYC</a> 
	  <a class:active={$page.url.pathname.startsWith('/champions')} href="/champions"><i class="fa fa-fw fa-search"></i>Champions</a> 
	  <a class:active={$page.url.pathname.startsWith('/about')} href="/about"><i class="fa fa-fw fa-search"></i>About</a> 
	  <a class:active={$page.url.pathname.startsWith('/past-brackets')} href="/past-brackets"><i class="fa fa-fw fa-envelope"></i>Past Brackets</a> 
	  <a class:active={$page.url.pathname.startsWith('/player-profiles')} href="/player-profiles"><i class="fa fa-fw fa-user"></i>Player Profiles</a>
	</div>
  
  <style>
	.navbar {
	width: 100%;
	background-color: #333;
	overflow: auto;
	position: fixed;
	height: 3.5rem;
	z-index: 1;
  }
  
  .navbar a {
  
	float: left;
	padding: 1rem;
	color: white;
	text-decoration: none;
	font-size: 1.1rem;
  }
  
  .navbar a:hover {
	/* border-bottom: 1px solid #FE414D ; */
	background-color: #535252;
  }

  .navbar .home:hover {
	/* border-bottom: 1px solid #FE414D ; */
	background-color: #FE414D;
  }
  
  .home {
	background-color: #FE414D;
  }
  @media screen and (max-width: 500px) {
	.navbar a {
	  float: none;
	  display: block;
	}
  }
  </style>