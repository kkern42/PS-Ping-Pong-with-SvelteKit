export const prerender = true;

// // arrow keys are locked from scrolling
// window.addEventListener("keydown", function(e) {
//     if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
//         e.preventDefault();
//     }
// }, false);

// // modal vars
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];
// var submitButton = document.getElementById("submitScore");
// let yourScore = document.querySelector('.yourscore');
// let list = document.getElementById("leaderboard");

// // fixed values
// var scorer;
// var seconds = 0
// let zeros = "000000";
// let numOfZeros = 5;
// let gameState = 'start';
// const ballVelo = 0.08;
// const ballSpeed = 5;

// //gets dom element
// let paddle_1 = document.querySelector('.paddle_1');
// let paddle_2 = document.querySelector('.paddle_2');
// let board = document.querySelector('.board');
// let initial_ball = document.querySelector('.ball');
// let ball = document.querySelector('.ball');
// let message = document.querySelector('.message');

// //get element cordinate object
// let paddle_1_coord = paddle_1.getBoundingClientRect();
// let paddle_2_coord = paddle_2.getBoundingClientRect();
// let initial_ball_coord = ball.getBoundingClientRect();
// let ball_coord = initial_ball_coord;
// let board_coord = board.getBoundingClientRect();
// let paddle_common = document.querySelector('.paddle').getBoundingClientRect();
// let score = document.querySelector('.score');

// //directions
// let dx;
// let dy;
// let dxd;
// let dyd;

// document.addEventListener('keydown', (e) => {
// if (e.key == 'Enter') {
//     gameState = gameState == 'start' ? 'play' : 'start';
//     if (gameState == 'play') {
//         message.innerHTML = 'Game Started';
//         scoreTimer();
//         seconds = 0;
//         score.innerHTML = "Score: 000000"
//         requestAnimationFrame(() => {
//             dx = Math.floor(Math.random() * ballSpeed) + 3;
//             dy = Math.floor(Math.random() * ballSpeed) + 3;
//             dxd = Math.floor(Math.random() * ballSpeed);
//             dyd = Math.floor(Math.random() * ballSpeed);
//             moveBall(dx, dy, dxd, dyd);
//         });
//     }
// }

// if (gameState == 'play') {
//     if(e.key == 'w') {
//         paddle_1.style.top = Math.max(board_coord.top, paddle_1_coord.top - window.innerHeight * ballVelo) + 'px';
//         paddle_1_coord = paddle_1.getBoundingClientRect();
//     }
//     if(e.key == 's') {
//         paddle_1.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_1_coord.top + window.innerHeight * ballVelo) + 'px';
//         paddle_1_coord = paddle_1.getBoundingClientRect();
//     }
//     if(e.key == 'ArrowUp') {
//         paddle_2.style.top = Math.max(board_coord.top, paddle_2_coord.top - window.innerHeight * ballVelo) + 'px';
//         paddle_2_coord = paddle_2.getBoundingClientRect();
//     }
//     if(e.key == 'ArrowDown') {
//         paddle_2.style.top = Math.min(board_coord.bottom - paddle_common.height, paddle_2_coord.top + window.innerHeight * ballVelo) + 'px';
//         paddle_2_coord = paddle_2.getBoundingClientRect();
//     }
// }
// });

// function moveBall(dx, dy, dxd, dyd) {
//     //if hits top
//     if(ball_coord.top <= board_coord.top) {
//         dyd = 1;
//     }
//     //if hits bottom
//     if(ball_coord.bottom >= board_coord.bottom) {
//         dyd = 0;
//     }
//     //if hits left paddle/paddle 1
//     if(ball_coord.left <= paddle_1_coord.right && ball_coord.top >= paddle_1_coord.top && ball_coord.bottom <= paddle_1_coord.bottom && ball_coord.right >= paddle_1_coord.left) {
//         dxd = 1;
//         dx = Math.floor(Math.random() * ballSpeed) + 3;
//         dy = Math.floor(Math.random() * ballSpeed) + 3;

//     }
//     //if hits right paddle/paddle 2
//     if(ball_coord.right >= paddle_2_coord.left && ball_coord.top >= paddle_2_coord.top && ball_coord.bottom <= paddle_2_coord.bottom && ball_coord.left <= paddle_2_coord.right) {
//         dxd = 0;
//         dx = Math.floor(Math.random() * ballSpeed) + 3;
//         dy = Math.floor(Math.random() * ballSpeed) + 3;

//     }
//     //hits out of play
//     if(ball_coord.left <= board_coord.left || ball_coord.right >= board_coord.right) {
//         gameState = 'start';
//         ball_coord = initial_ball_coord;
//         message.innerHTML = 'Press Enter to Play';
//         //stop scoring
//         clearInterval(scorer);
//         displayLeaderBoard();
//         return;
//     }

//     ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
//     ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
//     ball_coord = ball.getBoundingClientRect();
//     requestAnimationFrame(() => {
//         moveBall(dx, dy, dxd, dyd);
//     });
// }

// //Contorls the scoring
// function scoreTimer(){
//     scorer = setInterval(function() {
//         seconds = seconds + 1;
//         score.innerHTML = "Score: " + zeros.slice(seconds.toString().length) + seconds;
//     }, 100);
// }

// let scoreList = [];

// //gets scores, need to change so it only get top 10,  have to change that in functions
// const getLeaderBoard = async () => {
//     await fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
//     .then(response => response.json())
//     .then(data => {
//         scoreList = data.response;
//     }).catch(error => {
//         console.log(error);
//         return [];
//     });
// };

// //submits score, and rerenders leaderboard
// //maybe disable post button once it is clicked
// const submitScore = async () => {
//     let newScore = seconds;
//     let username = document.getElementById('scoreinput').value;
//     await fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&score=" + newScore + "&name=" + username + "&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.repsonse);
//     }).catch(error => {
//         console.log(error);
//         return [];
//     });

//     await displayLeaderBoard();
// }

// //calaucate if score is in top ten then give option to enter there score so we just need to know the lowest score then
// //needs formaitng and needs like 1 2 3 4 5
// const displayLeaderBoard = async () =>{
//     removeChildern(list);
//     await getLeaderBoard();

//     scoreList.forEach((item, index)=>{
//         let rank = index + 1;
//         let li = document.createElement("p");
//         li.innerText = rank + ". " +  item.name + ": " + item.score + "   (" + item.date +")";
//         //li.innerText = rank + ". " +  item.name + ": " + item.score;
//         list.appendChild(li);
//     });

//     modal.style.display = "block";
//     yourScore.innerHTML = "Submit your score: " + zeros.slice(seconds.toString().length) + seconds;
// }

// // closes modal when u click the x
// span.onclick = function() {
//     modal.style.display = "none";
//     removeChildern(list);
// }

// // closes modal when u click any where
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         removeChildern(list);
//     }
// }

// submitButton.onclick = function() {
//     submitScore();
// }

// //removes clidern from leaderboad so they don't keep appending to the old one
// function removeChildern(element){
//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// }
