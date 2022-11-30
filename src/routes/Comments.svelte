<script>
    import { onMount } from "svelte"; 
    /**
	 * @type {any[]}
	 */
    let comments = [];
    let newComment = "";
    //console.log(new Date().toString());
    const getComments = async () => {
        fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?name=kevin&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
        .then(response => response.json())
        .then(data => {
            //returns an array of data
            console.log(data.response);
            comments = data.response;
        }).catch(error => {
            console.log(error);
            return [];
        });
    };

    onMount(async () => {
        getComments();
    });
</script>

<div class="commentsTitle"><h3 style="padding: 0 1rem 0 1rem;">Comments</h3></div>
<div class="comment_section">
    <h4>Post a comment</h4>
   <div class="post"> <input value="{newComment}" placeholder="Post a comment"/> <button>Post</button></div>
    <hr/>
    {#each comments as comment}
        <div><span style="font-weight: 600; font-size: 17px;">{comment.author}</span> {comment.date}</div>
        <p>{comment.comment}</p>
        
    {/each}
</div>

<style>
    .comment_section{
        text-align: left;
        background-color: #f8f8f8;
        padding: 2rem;
    }

    p{
        margin-top: .5rem;
        margin-bottom: 1rem;
    }

    h4{
        margin: 0 0 .5rem 0;
    }

    hr{
        border: 1px solid lightgray;
	    background-color: lightgrey;
    }

    button{
        background-color: lightgray;
        margin-left: .5rem;
    }

    button:hover{
        border: 3px solid darkgray;
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
        height: 42px;
        font-size: 14px;
        color: #57687d;
        background-color: #fff;
        width: 60%;
    
    }

    .post{
        display: flex;
        align-items: start;
    }

    .commentsTitle{
		display: flex;
		justify-content: center;
		
	}

	.commentsTitle:before,
    .commentsTitle:after {
		content: "";
		flex: 1 1;
		border-bottom: 2px solid darkgray;
		margin: auto;
		
    }
	
    
</style>