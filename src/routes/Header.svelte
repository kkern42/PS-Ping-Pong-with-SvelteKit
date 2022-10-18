<script>
	import { page } from '$app/stores';
  </script>
  
  <div class="navbar">
	   <!-- <img src={PSPPLogo} class="logo" alt="PS PP Logo" /> -->
	  <a class="home" href="/"><i class="fa fa-fw fa-home"></i> Home</a> 
	  <a class:active={$page.url.pathname.startsWith('/champions')} href="/champions"><i class="fa fa-fw fa-search"></i>Champions</a> 
	  <a href="#"><i class="fa fa-fw fa-envelope"></i>Past Brackets</a> 
	  <a href="#"><i class="fa fa-fw fa-user"></i>Player Profiles</a>
	</div>
  
  <style>
	.navbar {
	width: 100%;
	background-color: #333;
	overflow: auto;
	position: fixed;
	height: 4.5rem;
	z-index: 1;
  }
  
  .navbar a {
  
	float: left;
	padding: 1.5rem;
	color: white;
	text-decoration: none;
	font-size: 1.1rem;
  }
  
  .navbar a:hover {
	background-color: #000;
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