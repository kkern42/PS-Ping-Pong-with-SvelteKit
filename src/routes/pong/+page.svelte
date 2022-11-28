
<!DOCTYPE html>
<html lang="en">
	
<head>
	<meta charset="UTF-8">
	<meta name ="viewport" content=
	"width=device-width, initial-scale=1.0">

	<title>PONG GAME</title>

	<style>

	.pong-container{
        padding: 5rem 7rem 5rem 7rem;
    }

	.board {
		
        padding: 5rem 5rem 20rem 5rem;
		background-color: lightgrey;
        /* background-image: url("https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/pongtable23.jpg?alt=media&token=3b7ac46b-fc8d-4bf8-ac39-2d012d46ff27"); */
		
	}

	.ball {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		position: fixed;
		top: calc(50% - 15px);
		left: calc(50% - 15px);
	}

	.ball_effect {
		height: 100%;
		width: 100%;
		border-radius: 100px;
		box-shadow: inset 0 0 18px black;
	}

	.paddle {
		height: 100px;
		width: 18px;
		position: fixed;
	}

	.paddle_1 {
		left: calc(10vw + 30px);
		background-color: #FE414D;
	}

	.paddle_2 {
		right: calc(10vw + 30px);
		background-color: #FE414D;
	}

	.title-score{
        display: flex;
        justify-content: center
    }

    .title-score h2{
        margin: 1rem;
    }

	</style>
</head>
	

<div class="pong-container">
    <div class="title-score">
        <h2 class = "player_1_score">0</h2>
        
        <h2 class="message">
            Press Enter to Play
        </h2>
        <h2 class="player_2_score">0</h2>
    </div>
    <div class="board">
        <div class='ball'>
            <div class="ball_effect"></div>
        </div>
        <div class="paddle_1 paddle"></div>
        <div class="paddle_2 paddle"></div>
        
    </div>
</div>




<script>


    // arrow keys are locked from scrolling
    window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    const ballSpeed = 0.08;
	let gameState = 'start';
	let paddle_1 = document.querySelector('.paddle_1');
	let paddle_2 = document.querySelector('.paddle_2');
	let board = document.querySelector('.board');
	let initial_ball = document.querySelector('.ball');
	let ball = document.querySelector('.ball');
	let score_1 = document.querySelector('.player_1_score');
	let score_2 = document.querySelector('.player_2_score');
	let message = document.querySelector('.message');
	let paddle_1_coord = paddle_1.getBoundingClientRect();
	let paddle_2_coord = paddle_2.getBoundingClientRect();
	let initial_ball_coord = ball.getBoundingClientRect();
	let ball_coord = initial_ball_coord;
	let board_coord = board.getBoundingClientRect();
	let paddle_common = document.querySelector('.paddle').getBoundingClientRect();
	let dx = Math.floor(Math.random() * 4) + 3;
	let dy = Math.floor(Math.random() * 4) + 3;
	let dxd = Math.floor(Math.random() * 2);
	let dyd = Math.floor(Math.random() * 2);

	document.addEventListener('keydown', (e) => {
	if (e.key == 'Enter') {
		gameState = gameState == 'start' ? 'play' : 'start';
		if (gameState == 'play') {
		message.innerHTML = 'Game Started';

		requestAnimationFrame(() => {
			dx = Math.floor(Math.random() * 4) + 3;
			dy = Math.floor(Math.random() * 4) + 3;
			dxd = Math.floor(Math.random() * 2);
			dyd = Math.floor(Math.random() * 2);
			moveBall(dx, dy, dxd, dyd);
		});
		}
	}
	if (gameState == 'play') {
		if(e.key == 'w') {
            // 0.06 is the speed of the paddle, maybe i should make that a variable
            paddle_1.style.top = Math.max(board_coord.top, paddle_1_coord.top - window.innerHeight * ballSpeed) + 'px';
            paddle_1_coord = paddle_1.getBoundingClientRect();
		}
		if(e.key == 's') {
		    paddle_1.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_1_coord.top + window.innerHeight * ballSpeed) + 'px';
		    paddle_1_coord = paddle_1.getBoundingClientRect();
		}

		if(e.key == 'ArrowUp') {
		    paddle_2.style.top = Math.max(board_coord.top, paddle_2_coord.top - window.innerHeight * ballSpeed) + 'px';
            paddle_2_coord = paddle_2.getBoundingClientRect();
		}
		if(e.key == 'ArrowDown') {
		    paddle_2.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_2_coord.top + window.innerHeight * ballSpeed) + 'px';
		    paddle_2_coord = paddle_2.getBoundingClientRect();
		}
	}
	});

	function moveBall(dx, dy, dxd, dyd) {
        if(ball_coord.top <= board_coord.top) {
            dyd = 1;
        }
        if(ball_coord.bottom >= board_coord.bottom) {
            dyd = 0;
        }
        if(ball_coord.left <= paddle_1_coord.right && ball_coord.top >= paddle_1_coord.top && ball_coord.bottom <= paddle_1_coord.bottom) {
            dxd = 1;
            dx = Math.floor(Math.random() * 4) + 3;
            dy = Math.floor(Math.random() * 4) + 3;
        }
        if(ball_coord.right >= paddle_2_coord.left && ball_coord.top >= paddle_2_coord.top && ball_coord.bottom <= paddle_2_coord.bottom) {
            dxd = 0;
            dx = Math.floor(Math.random() * 4) + 3;
            dy = Math.floor(Math.random() * 4) + 3;
        }
        if(ball_coord.left <= board_coord.left || ball_coord.right >= board_coord.right) {
            if(ball_coord.left <= board_coord.left) {
                score_2.innerHTML = +score_2.innerHTML + 1;
            }
            else {
                score_1.innerHTML = +score_1.innerHTML + 1;
            }

            gameState = 'start';

            ball_coord = initial_ball_coord;
            ball.style = initial_ball.style;
            message.innerHTML = 'Press Enter to Play Pong';
            return;
        }

        ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
        ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
        ball_coord = ball.getBoundingClientRect();

        requestAnimationFrame(() => {
            moveBall(dx, dy, dxd, dyd);
        });
	}
</script>

	
</html>
