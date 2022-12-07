<!DOCTYPE html>
<html lang="en">
	
<head>
	<meta charset="UTF-8">
	<meta name ="viewport" content=
	"width=device-width, initial-scale=1.0">

	<title>PONG</title>

	<style>
	.pong-container{
        padding: 4rem 8.5rem 5rem 8.5rem;
    }
	.board {
        padding: 3rem 5rem 20rem 5rem;
		background-color: lightgrey;
        border: 3px solid black;
        /* background-image: url("https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/pongtable.png?alt=media&token=2b72be57-aa10-4683-88ba-a3d9d539e252"); */
        background-size: cover;
	}
	.ball {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		position: fixed;
		top: 60%;
		left: calc(50% - 15px);
	}
	.ball_effect {
		height: 100%;
		width: 100%;
		border-radius: 100px;
		box-shadow: inset 0 0 20px orange;
	}
	.paddle {
		height: 100px;
		width: 18px;
		position: fixed;
	}
	.paddle_1 {
        top: 55%;
		left: calc(10vw + 50px);
		background-color: #FE414D;
	}
	.paddle_2 {
        top: 55%;
		right: calc(10vw + 50px);
		background-color: black;
	}
	.title-score{
        display: flex;
        justify-content: center
    }
    .title-score h2{
        margin-bottom: 0rem;
        margin-top:1rem;
        font-size: 2sssrem;
    }
    pre{
		display: flex;
		justify-content: center;
		
	}
	pre:before,
    pre:after {
        /* makes it show up */
		content: "";
		flex: 1 1;
		border-bottom: 1px solid darkgray;
	    background-color: darkgrey;
		margin: auto;
		
    }
    .mobile{
        padding: 4rem 6rem 5rem 6rem;
        display:none;
    }
    @media screen and (max-width: 500px) {
		.pong-container{
            display: none;
        }
        .mobile{
            display: block;
            padding: 4rem 8.5rem 5rem 8.5rem;
        }
        a {
	        text-decoration: underline;
        }
	}

    /* modal styling */
    .modal {
        display: none; 
        position: fixed;
        z-index: 1; 
        padding-top: 5rem; 
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 1.5rem;
        border: 1px solid #888;
        width: 50%;
    }

    .inputs{
        display: flex;
        align-items: start;
        margin-bottom: 1rem;
    }

    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    h4{
        margin: 0 0 1rem 0;
    }

    h3{
        margin: 1rem 0 .5rem 0;
    }


    hr{
        border: 1px solid lightgray;
	    background-color: lightgrey;
    }

    input:focus,
    input:focus-visible {
	    outline: 3px auto darkgray;
    }

    input{
        margin: 0 0 .5rem 0;
        padding-left: .5rem;
        border: 1px solid #bfc1c4;
        border-radius: 4px;
        height:42px;
        font-size: 14px;
        width: 60%;
    }

    button:hover{
        border: 3px solid darkgray;
    }
    button{
        background-color: lightgray;
        margin-left: .5rem;
    }

    p{
        margin: 0 0 .25rem 0;
    }
    
	</style>
</head>
	

<div class="pong-container">
    <div class="title-score">
        <h2 class="message"> Press Enter to Play</h2>
    </div>
    <pre><div style="padding: 0 1rem 0 1rem;" class="score">Score: 000000</div></pre>
    <div class="board">
        <div class='ball'>
            <div class="ball_effect"></div>
        </div>
        <div class="paddle_1 paddle"></div>
        <div class="paddle_2 paddle"></div>
    </div>
</div>

<!-- Error Screen -->
<div class="mobile">
    <h2>OOPS!</h2>
    <p>The content you are looking for is not available in in this viewport.</p>
    <p>PC or Desktop only!</p>
    <a href="/" >Click here to go Home</a>
</div>

<!-- The Modal -->
<div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h4 class="yourscore">Your Score:</h4>
        <div class="inputs"> 
            <input id="scoreinput" style="width: 20%; margin-right: .5rem;" placeholder="Username" maxlength="15"/>
            <button id="submitScore" >Post</button>
        </div>
        <hr/>
      <h3>Leaderboard - Top 10</h3>
      <div id="leaderboard"></div>
    </div>
</div>

<script>
    // arrow keys are locked from scrolling
    window.addEventListener("keydown", function(e) {
        if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);    

    // modal vars
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var submitButton = document.getElementById("submitScore");
    let yourScore = document.querySelector('.yourscore');
    let list = document.getElementById("leaderboard");


    // fixed values
    var scorer;
    var seconds = 0
    let zeros = "000000";
    let numOfZeros = 5;
    let gameState = 'start';
    const ballVelo = 0.08;
    const ballSpeed = 5;
	
    //gets dom element
	let paddle_1 = document.querySelector('.paddle_1');
	let paddle_2 = document.querySelector('.paddle_2');
	let board = document.querySelector('.board');
	let initial_ball = document.querySelector('.ball');
	let ball = document.querySelector('.ball');
	let message = document.querySelector('.message');

    //get element cordinate object
	let paddle_1_coord = paddle_1.getBoundingClientRect();
	let paddle_2_coord = paddle_2.getBoundingClientRect();
	let initial_ball_coord = ball.getBoundingClientRect();
	let ball_coord = initial_ball_coord;
	let board_coord = board.getBoundingClientRect();
	let paddle_common = document.querySelector('.paddle').getBoundingClientRect();
    let score = document.querySelector('.score');

    //directions
	let dx;
	let dy;
	let dxd;
	let dyd;

	document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		gameState = gameState == 'start' ? 'play' : 'start';
		if (gameState == 'play') {
            message.innerHTML = 'Game Started';
            scoreTimer();
            seconds = 0;
            score.innerHTML = "Score: 000000"
            requestAnimationFrame(() => {
                dx = Math.floor(Math.random() * ballSpeed) + 3;
                dy = Math.floor(Math.random() * ballSpeed) + 3;
                dxd = Math.floor(Math.random() * ballSpeed);
                dyd = Math.floor(Math.random() * ballSpeed);
                moveBall(dx, dy, dxd, dyd);
            });
		}
	}

	if (gameState == 'play') {
		if(e.key == 'w') {
            paddle_1.style.top = Math.max(board_coord.top, paddle_1_coord.top - window.innerHeight * ballVelo) + 'px';
            paddle_1_coord = paddle_1.getBoundingClientRect();
		}
		if(e.key == 's') {
		    paddle_1.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_1_coord.top + window.innerHeight * ballVelo) + 'px';
		    paddle_1_coord = paddle_1.getBoundingClientRect();
		}
		if(e.key == 'ArrowUp') {
		    paddle_2.style.top = Math.max(board_coord.top, paddle_2_coord.top - window.innerHeight * ballVelo) + 'px';
            paddle_2_coord = paddle_2.getBoundingClientRect();
		}
		if(e.key == 'ArrowDown') {
		    paddle_2.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_2_coord.top + window.innerHeight * ballVelo) + 'px';
		    paddle_2_coord = paddle_2.getBoundingClientRect();
		}
	}
	});

	function moveBall(dx, dy, dxd, dyd) {
        //if hits top
        if(ball_coord.top <= board_coord.top) {
            dyd = 1;
        }
        //if hits bottom
        if(ball_coord.bottom >= board_coord.bottom) {
            dyd = 0;
        }
        //if hits left paddle/paddle 1
        if(ball_coord.left <= paddle_1_coord.right && ball_coord.top >= paddle_1_coord.top && ball_coord.bottom <= paddle_1_coord.bottom && ball_coord.right >= paddle_1_coord.left) {
            dxd = 1;
            dx = Math.floor(Math.random() * ballSpeed) + 3;
            dy = Math.floor(Math.random() * ballSpeed) + 3;
            
        }
        //if hits right paddle/paddle 2
        if(ball_coord.right >= paddle_2_coord.left && ball_coord.top >= paddle_2_coord.top && ball_coord.bottom <= paddle_2_coord.bottom && ball_coord.left <= paddle_2_coord.right) {
            dxd = 0;
            dx = Math.floor(Math.random() * ballSpeed) + 3;
            dy = Math.floor(Math.random() * ballSpeed) + 3;
            
        }
        //hits out of play
        if(ball_coord.left <= board_coord.left || ball_coord.right >= board_coord.right) {
            gameState = 'start';
            ball_coord = initial_ball_coord;
            message.innerHTML = 'Press Enter to Play';
            //stop scoring
            clearInterval(scorer);
            displayLeaderBoard();
            return;
        }
        
        ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
        ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
        ball_coord = ball.getBoundingClientRect();
        requestAnimationFrame(() => {
            moveBall(dx, dy, dxd, dyd);
        });
	}

    //Contorls the scoring 
    function scoreTimer(){
        scorer = setInterval(function() {
            seconds = seconds + 1;
            score.innerHTML = "Score: " + zeros.slice(seconds.toString().length) + seconds;
        }, 100);
    }

    let scoreList = [];

    //gets scores, need to change so it only get top 10,  have to change that in functions
    const getLeaderBoard = async () => {
        await fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
        .then(response => response.json())
        .then(data => {
            scoreList = data.response;
        }).catch(error => {
            console.log(error);
            return [];
        });
    };

    //submits score, and rerenders leaderboard
    //maybe disable post button once it is clicked
    const submitScore = async () => {
        let newScore = seconds;
        let username = document.getElementById('scoreinput').value;
        await fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&score=" + newScore + "&name=" + username + "&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
        .then(response => response.json())
        .then(data => {
            console.log(data.repsonse);
        }).catch(error => {
            console.log(error);
            return [];
        });

        await displayLeaderBoard();
    }

    //calaucate if score is in top ten then give option to enter there score so we just need to know the lowest score then 
    //needs formaitng and needs like 1 2 3 4 5 
    const displayLeaderBoard = async () =>{
        removeChildern(list);
        await getLeaderBoard();

        scoreList.forEach((item, index)=>{
            let rank = index + 1;
            let li = document.createElement("p");
            // li.innerText = rank + ". " +  item.name + ": " + item.score + "   (" + item.date +")";
            li.innerText = rank + ". " +  item.name + ": " + item.score;
            list.appendChild(li);
        });

        modal.style.display = "block";
        yourScore.innerHTML = "Submit your score: " + zeros.slice(seconds.toString().length) + seconds;
    }

    // closes modal when u click the x
    span.onclick = function() {
        modal.style.display = "none";
        removeChildern(list);
    }

    // closes modal when u click any where 
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            removeChildern(list);
        }
    }

    submitButton.onclick = function() {
        submitScore();
    }

    //removes clidern from leaderboad so they don't keep appending to the old one
    function removeChildern(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

</script>
</html>

