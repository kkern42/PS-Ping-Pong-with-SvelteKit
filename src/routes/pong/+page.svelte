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
        padding: 1rem 1.5rem 1rem 1.5rem;
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
    const _0x43aa65=_0x3278;(function(_0x4c6207,_0x29d2a9){const _0x3e64c6=_0x3278,_0x5796b5=_0x4c6207();while(!![]){try{const _0x2bfc57=parseInt(_0x3e64c6(0xc9))/0x1+-parseInt(_0x3e64c6(0xb7))/0x2+parseInt(_0x3e64c6(0xdc))/0x3+parseInt(_0x3e64c6(0xe8))/0x4*(parseInt(_0x3e64c6(0xc2))/0x5)+parseInt(_0x3e64c6(0xdd))/0x6+-parseInt(_0x3e64c6(0xef))/0x7*(-parseInt(_0x3e64c6(0xba))/0x8)+-parseInt(_0x3e64c6(0xe9))/0x9;if(_0x2bfc57===_0x29d2a9)break;else _0x5796b5['push'](_0x5796b5['shift']());}catch(_0x39c97e){_0x5796b5['push'](_0x5796b5['shift']());}}}(_0x2a83,0x9ac58),window[_0x43aa65(0xfa)](_0x43aa65(0xf8),function(_0x10caa1){const _0x209fd2=_0x43aa65;[_0x209fd2(0xd0),'ArrowDown',_0x209fd2(0xcc),_0x209fd2(0xeb)][_0x209fd2(0xda)](_0x10caa1[_0x209fd2(0xe1)])>-0x1&&_0x10caa1[_0x209fd2(0xc5)]();},![]));var modal=document['getElementById']('myModal'),span=document[_0x43aa65(0xb9)]('close')[0x0],submitButton=document[_0x43aa65(0xbb)](_0x43aa65(0xcf));let yourScore=document['querySelector'](_0x43aa65(0xb2)),list=document[_0x43aa65(0xbb)](_0x43aa65(0xc6));var scorer,seconds=0x0;let zeros=_0x43aa65(0xbe),numOfZeros=0x5,gameState=_0x43aa65(0xc1);function _0x2a83(){const _0x3d2786=['Submit\x20your\x20score:\x20','ArrowLeft','toString','Score:\x20','submitScore','ArrowUp','ArrowDown','querySelector','https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==','Press\x20Enter\x20to\x20Play','.ball','bottom','innerHeight','&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==','then','indexOf','right','174846zVyhLW','4704360vdHFeY','height','getBoundingClientRect','left','code','\x20\x20\x20(','.score','key','Enter','innerHTML','.paddle_2','6724QSAfYC','22028841WNxjpM','value','ArrowRight','max','appendChild','createElement','86604MwGQDI','score','play','display','.message','style','.paddle','random','scoreinput','keydown','&name=','addEventListener','min','.yourscore','none','forEach','.board','json','2506436BbOYtV','onclick','getElementsByClassName','712SeBKPj','getElementById','log','floor','000000','top','firstChild','start','3770dSpMSE','length','catch','preventDefault','leaderboard','Score:\x20000000','response','1123887pUEcOh','slice'];_0x2a83=function(){return _0x3d2786;};return _0x2a83();}const ballVelo=0.08,ballSpeed=0x5;let paddle_1=document[_0x43aa65(0xd2)]('.paddle_1'),paddle_2=document[_0x43aa65(0xd2)](_0x43aa65(0xe7)),board=document[_0x43aa65(0xd2)](_0x43aa65(0xb5)),initial_ball=document[_0x43aa65(0xd2)](_0x43aa65(0xd5)),ball=document[_0x43aa65(0xd2)](_0x43aa65(0xd5)),message=document[_0x43aa65(0xd2)](_0x43aa65(0xf3)),paddle_1_coord=paddle_1[_0x43aa65(0xdf)](),paddle_2_coord=paddle_2[_0x43aa65(0xdf)](),initial_ball_coord=ball[_0x43aa65(0xdf)](),ball_coord=initial_ball_coord,board_coord=board[_0x43aa65(0xdf)](),paddle_common=document['querySelector'](_0x43aa65(0xf5))['getBoundingClientRect'](),score=document[_0x43aa65(0xd2)](_0x43aa65(0xe3)),dx,dy,dxd,dyd;document[_0x43aa65(0xfa)]('keydown',_0x5b820d=>{const _0x4991da=_0x43aa65;_0x5b820d['key']==_0x4991da(0xe5)&&(gameState=gameState==_0x4991da(0xc1)?_0x4991da(0xf1):_0x4991da(0xc1),gameState==_0x4991da(0xf1)&&(message[_0x4991da(0xe6)]='Game\x20Started',scoreTimer(),seconds=0x0,score['innerHTML']=_0x4991da(0xc7),requestAnimationFrame(()=>{const _0x472372=_0x4991da;dx=Math[_0x472372(0xbd)](Math[_0x472372(0xf6)]()*ballSpeed)+0x3,dy=Math[_0x472372(0xbd)](Math['random']()*ballSpeed)+0x3,dxd=Math['floor'](Math[_0x472372(0xf6)]()*ballSpeed),dyd=Math['floor'](Math[_0x472372(0xf6)]()*ballSpeed),moveBall(dx,dy,dxd,dyd);}))),gameState=='play'&&(_0x5b820d[_0x4991da(0xe4)]=='w'&&(paddle_1[_0x4991da(0xf4)][_0x4991da(0xbf)]=Math[_0x4991da(0xec)](board_coord[_0x4991da(0xbf)],paddle_1_coord[_0x4991da(0xbf)]-window[_0x4991da(0xd7)]*ballVelo)+'px',paddle_1_coord=paddle_1[_0x4991da(0xdf)]()),_0x5b820d[_0x4991da(0xe4)]=='s'&&(paddle_1['style'][_0x4991da(0xbf)]=Math[_0x4991da(0xb1)](board_coord[_0x4991da(0xd6)]-paddle_common['height'],paddle_1_coord[_0x4991da(0xbf)]+window['innerHeight']*ballVelo)+'px',paddle_1_coord=paddle_1[_0x4991da(0xdf)]()),_0x5b820d['key']==_0x4991da(0xd0)&&(paddle_2[_0x4991da(0xf4)][_0x4991da(0xbf)]=Math[_0x4991da(0xec)](board_coord[_0x4991da(0xbf)],paddle_2_coord[_0x4991da(0xbf)]-window[_0x4991da(0xd7)]*ballVelo)+'px',paddle_2_coord=paddle_2[_0x4991da(0xdf)]()),_0x5b820d[_0x4991da(0xe4)]==_0x4991da(0xd1)&&(paddle_2[_0x4991da(0xf4)][_0x4991da(0xbf)]=Math[_0x4991da(0xb1)](board_coord[_0x4991da(0xd6)]-paddle_common[_0x4991da(0xde)],paddle_2_coord[_0x4991da(0xbf)]+window[_0x4991da(0xd7)]*ballVelo)+'px',paddle_2_coord=paddle_2['getBoundingClientRect']()));});function moveBall(_0x42cf40,_0x459163,_0x4963ed,_0x13f22a){const _0x58c087=_0x43aa65;ball_coord['top']<=board_coord['top']&&(_0x13f22a=0x1);ball_coord['bottom']>=board_coord[_0x58c087(0xd6)]&&(_0x13f22a=0x0);ball_coord['left']<=paddle_1_coord[_0x58c087(0xdb)]&&ball_coord['top']>=paddle_1_coord[_0x58c087(0xbf)]&&ball_coord[_0x58c087(0xd6)]<=paddle_1_coord[_0x58c087(0xd6)]&&ball_coord[_0x58c087(0xdb)]>=paddle_1_coord[_0x58c087(0xe0)]&&(_0x4963ed=0x1,_0x42cf40=Math[_0x58c087(0xbd)](Math['random']()*ballSpeed)+0x3,_0x459163=Math['floor'](Math[_0x58c087(0xf6)]()*ballSpeed)+0x3);ball_coord[_0x58c087(0xdb)]>=paddle_2_coord[_0x58c087(0xe0)]&&ball_coord[_0x58c087(0xbf)]>=paddle_2_coord['top']&&ball_coord[_0x58c087(0xd6)]<=paddle_2_coord[_0x58c087(0xd6)]&&ball_coord[_0x58c087(0xe0)]<=paddle_2_coord[_0x58c087(0xdb)]&&(_0x4963ed=0x0,_0x42cf40=Math['floor'](Math['random']()*ballSpeed)+0x3,_0x459163=Math[_0x58c087(0xbd)](Math[_0x58c087(0xf6)]()*ballSpeed)+0x3);if(ball_coord[_0x58c087(0xe0)]<=board_coord[_0x58c087(0xe0)]||ball_coord[_0x58c087(0xdb)]>=board_coord[_0x58c087(0xdb)]){gameState=_0x58c087(0xc1),ball_coord=initial_ball_coord,message[_0x58c087(0xe6)]=_0x58c087(0xd4),clearInterval(scorer),displayLeaderBoard();return;}ball[_0x58c087(0xf4)][_0x58c087(0xbf)]=ball_coord[_0x58c087(0xbf)]+_0x459163*(_0x13f22a==0x0?-0x1:0x1)+'px',ball['style']['left']=ball_coord[_0x58c087(0xe0)]+_0x42cf40*(_0x4963ed==0x0?-0x1:0x1)+'px',ball_coord=ball[_0x58c087(0xdf)](),requestAnimationFrame(()=>{moveBall(_0x42cf40,_0x459163,_0x4963ed,_0x13f22a);});}function scoreTimer(){scorer=setInterval(function(){const _0x3bd601=_0x3278;seconds=seconds+0x1,score[_0x3bd601(0xe6)]=_0x3bd601(0xce)+zeros[_0x3bd601(0xca)](seconds['toString']()['length'])+seconds;},0x64);}let scoreList=[];const getLeaderBoard=async()=>{const _0x3303b6=_0x43aa65;await fetch(_0x3303b6(0xd3))[_0x3303b6(0xd9)](_0x1e9af6=>_0x1e9af6[_0x3303b6(0xb6)]())['then'](_0x21a90c=>{const _0x5027b5=_0x3303b6;scoreList=_0x21a90c[_0x5027b5(0xc8)];})[_0x3303b6(0xc4)](_0x171cb0=>{return console['log'](_0x171cb0),[];});},submitScore=async()=>{const _0x2a519d=_0x43aa65;let _0x239de0=seconds,_0x3fe143=document['getElementById'](_0x2a519d(0xf7))[_0x2a519d(0xea)];await fetch('https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=LeaderBoard&score='+_0x239de0+_0x2a519d(0xf9)+_0x3fe143+_0x2a519d(0xd8))[_0x2a519d(0xd9)](_0x2a7156=>_0x2a7156[_0x2a519d(0xb6)]())[_0x2a519d(0xd9)](_0x1a3ac9=>{const _0x54393a=_0x2a519d;console[_0x54393a(0xbc)](_0x1a3ac9['repsonse']);})[_0x2a519d(0xc4)](_0x506033=>{const _0x1ad78c=_0x2a519d;return console[_0x1ad78c(0xbc)](_0x506033),[];}),await displayLeaderBoard();},displayLeaderBoard=async()=>{const _0x491ebf=_0x43aa65;removeChildern(list),await getLeaderBoard(),scoreList[_0x491ebf(0xb4)]((_0x4aeeb4,_0x2837f1)=>{const _0x317131=_0x491ebf;let _0x45363e=_0x2837f1+0x1,_0x305170=document[_0x317131(0xee)]('p');_0x305170['innerText']=_0x45363e+'.\x20'+_0x4aeeb4['name']+':\x20'+_0x4aeeb4[_0x317131(0xf0)]+_0x317131(0xe2)+_0x4aeeb4['date']+')',list[_0x317131(0xed)](_0x305170);}),modal['style'][_0x491ebf(0xf2)]='block',yourScore[_0x491ebf(0xe6)]=_0x491ebf(0xcb)+zeros[_0x491ebf(0xca)](seconds[_0x491ebf(0xcd)]()[_0x491ebf(0xc3)])+seconds;};span[_0x43aa65(0xb8)]=function(){const _0x4420ac=_0x43aa65;modal['style']['display']=_0x4420ac(0xb3),removeChildern(list);},window[_0x43aa65(0xb8)]=function(_0x10d914){const _0x5eaab6=_0x43aa65;_0x10d914['target']==modal&&(modal['style'][_0x5eaab6(0xf2)]=_0x5eaab6(0xb3),removeChildern(list));},submitButton[_0x43aa65(0xb8)]=function(){submitScore();};function _0x3278(_0x575a5c,_0x106fe8){const _0x2a83e9=_0x2a83();return _0x3278=function(_0x32785b,_0x5e0088){_0x32785b=_0x32785b-0xb1;let _0x49c713=_0x2a83e9[_0x32785b];return _0x49c713;},_0x3278(_0x575a5c,_0x106fe8);}function removeChildern(_0x1894f0){const _0x139153=_0x43aa65;while(_0x1894f0[_0x139153(0xc0)]){_0x1894f0['removeChild'](_0x1894f0[_0x139153(0xc0)]);}}
</script>
</html>

