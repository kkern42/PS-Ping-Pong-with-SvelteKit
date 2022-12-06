<script>

	import { data } from "jquery";

</script>

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
        }
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
    <ul id="leaderboard"></ul>
</div>

<div class="mobile">
    <h2>OOPS!</h2>
    <p>The content you are looking for is not available in in this viewport.</p>
    <p>PC or Desktop only!</p>
</div>

<script>
    // arrow keys are locked from scrolling
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    // get highscores on page laod
    window.onload = function() {
        //displayLeaderBoard();
    };

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
            return;
        }
        ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
        ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
        ball_coord = ball.getBoundingClientRect();
        requestAnimationFrame(() => {
            moveBall(dx, dy, dxd, dyd);
        });
	}

    //Could add interval deplay to a counter function to keep track of the streak once the funciton runs there is a delay until it can run again 
    function scoreTimer(){
        scorer = setInterval(function() {
            seconds = seconds + 1;
            score.innerHTML = "Score: " + zeros.slice(seconds.toString().length) +seconds;
        }, 100);
    }

    let scoreList = [];

    //gets scores, need to change so it only get top 10,  have to change that in functions
    const getLeaderBoard = async () => {
        await fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&score="+ score + "&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
        .then(response => response.json())
        .then(data => {
            scoreList = data.response;
        }).catch(error => {
            console.log(error);
            return [];
        });
    };

    //calaucate if score is in top ten then give option to enter there score so we just need to know the lowest score then 
    //needs formaitng and needs like 1 2 3 4 5 
    const displayLeaderBoard = async () =>{
        await getLeaderBoard();
        let list = document.getElementById("leaderboard");
        scoreList.forEach((item, index)=>{
            let li = document.createElement("li");
            li.innerText = item.score;
            list.appendChild(li);
        });
    }

</script>
</html>

