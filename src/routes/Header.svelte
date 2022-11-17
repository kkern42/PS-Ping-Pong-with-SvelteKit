<script>
// @ts-nocheck

	import { page } from '$app/stores';
	let classNext = "responsive";
	let classDisplay = ""
	function myFunction() {
  		let temp = classDisplay;
		classDisplay = classNext;
		classNext = temp;
	}
	
  </script>
 <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.13/css/all.css">
  <!-- maybe change to flex -->
  <div class="navbar {classDisplay}">
	  <a href="/" style="background-color: #FE414D;" class="home"><span class="home">PS PP NYC</span></a> 
	  <a class:active={$page.url.pathname.startsWith('/champions')} href="/champions"  on:click="{() =>myFunction()}"><i class="fa fa-fw fa-crown"></i> Champions</a> 
      <a class:active={$page.url.pathname.startsWith('/past-brackets')} href="/past-brackets" on:click="{() =>myFunction()}"><i class="fa fa-fw fa-calendar-alt"></i> Past Brackets</a> 
	  <a class:active={$page.url.pathname.startsWith('/player-profiles')} href="/player-profiles" on:click="{() =>myFunction()}"><i class="fa fa-fw fa-users"></i> Player Profiles</a>
	  <a class:active={$page.url.pathname.startsWith('/about')} href="/about" on:click="{() =>myFunction()}"><i class="fa fa-fw fa-newspaper" ></i> About</a> 
	  <a class:active={$page.url.pathname.startsWith('/FAQ')} href="/FAQ" on:click="{() =>myFunction()}"><i class="fa fa-fw fa-question-circle"></i> FAQ</a> 

	  <a href="javascript:void(0);" class="icon" on:click="{() =>myFunction()}">
		<i class="fa fa-bars"></i>
	  </a>

	</div>
  
  <style>
	.navbar {
		width: 100%;
		background-color: #333;
		position: fixed;
		z-index: 1;
  	}
  
  	.navbar a {
		float: left;
		padding: 1rem;
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 700;
  	}
  
  	.navbar a:hover {
		background-color: #535252;
  	}

  
  	.home {
		font-size: 1.1rem;
  	}

  	.icon {
  		display: none;
  	}

	@media screen and (max-width: 500px) {
		.navbar a {
			display:none;
		}

		a.home{
			font-size: .9rem;
			display: block;
		}

		a.icon {
			float: right;
			display: block;
		}	

		.navbar.responsive .icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		.navbar.responsive a {
			float: none;
			display: block;
			background-color: #333;
		}

		
	}
</style>