<script>
	import { onMount } from 'svelte';
	import SvelteTable from "svelte-table";

	/**
	 * @type {any[]}
	 */
	let comments = [];

	let newComment = '';
	let commenter = '';

	/**
	 * @type {Promise<void>}
	 */
	let promise;

	const getComments = async () => {
		await fetch(
			'https://pspptofirebase.azurewebsites.net/api/AccessFirebase?collection=Comments&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw=='
		)
			.then((response) => response.json())
			.then((data) => {
				comments = data.response;
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	};

	const setComment = async (/** @type {string} */ value, /** @type {string} */ name) => {
		await fetch(
			'https://pspptofirebase.azurewebsites.net/api/AccessFirebase?comment=' +
				value +
				'&name=' +
				name +
				'&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw=='
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.response);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
		promise = getComments();
		newComment = '';
		commenter = '';
	};

	const sortComments= () => {
		comments  = comments.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
	};


	onMount(async () => {
		promise = getComments();
	});


	// const columns = [
	// 	{
	// 		key: "name", 
	// 		title: "", 
	// 		value: v => v.author,
	// 		sortable: true
	// 	},
	// 	{
	// 		key: "comment", 
	// 		title: "Comment", 
	// 		value: v => v.comment, 
	// 		sortable: false
	// 	},
	// 	{
	// 		key: "date", 
	// 		title: "Date Posted", 
	// 		value: v => v.date, 
	// 		sortable: true,
	// 	}
	// ]
</script>

<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.3.0/css/all.css" />


<div class="commentsTitle"><h3 style="padding: 0 1rem 0 1rem;">Comments</h3></div>
<div class="comment_section">
	<!-- <h4>Post a comment <i class="fas fa-pencil-alt" /></h4>
	<div class="post">
		<input
			placeholder="Enter name"
			style="width: 15%; margin-right: .5rem; background-color: white;"
			bind:value={commenter}
			maxlength="15"
		/>
		<input
			bind:value={newComment}
			placeholder="Post a comment..."
			style="background-color: white;"
			maxlength="120"
		/>
		<button on:click={() => setComment(newComment, commenter)} style="color: black">Post</button>
	</div>
	<hr />
	<div class="comments_table">
		<SvelteTable columns="{columns}" rows="{comments}"></SvelteTable>
	</div>
</div> -->
	<h4>Post a comment <i class="fas fa-pencil-alt" /></h4>
	<div class="post">
		<input
			placeholder="Enter name"
			style="width: 15%; margin-right: .5rem; background-color: white;"
			bind:value={commenter}
			maxlength="15"
		/>
		<input
			bind:value={newComment}
			placeholder="Post a comment..."
			style="background-color: white;"
			maxlength="120"
		/>
		<button on:click={() => setComment(newComment, commenter)} style="color: black">Post</button>
	</div>

	<div style="display: flex;">
		<div style="font-weight: bold; font-size: 18px; margin-right:2rem;">{comments.length} Comments</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="sort" on:click={() => sortComments()}> <i class="fa fa-sort"></i> Sort by Date</div>
	</div>


	<hr />
	{#await promise}
		<i class="fa fa-sync-alt fa-spin" style="font-size:24px" />
	{:then data}
		<div class="comments">
			{#each comments as comment}
			<div>
				<span style="font-weight: 600; font-size: 15px;">@{comment.author}</span> - <span style="font-size: 13px; color:grey"> {(comment.date).split(',')[0]}</span>
			</div>
			<p class="comment">{comment.comment}</p>
		{/each}
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<style>
	.comment_section {
		text-align: left;
		background-color: #f8f8f8;
		padding: 2rem;
	}

	/* :global(.comments_table){
        table-layout: fixed;
        padding: 10px;
        margin: 1rem;
		overflow: auto;
		display: block;
		height: 450px;
    }

	:global(.comments_table td){
		font-size: 16px;
		padding: 10px;
	}

	:global(.comments_table td:nth-child(1)){
		font-weight: bold;
		width: 15%;
	}

	:global(.comments_table td:nth-child(2)){
		width: 70%
	}

	:global(.comments_table thead:nth-child(1)){
		font-size: 18px;
	} */

	h4 {
		margin: 0 0 0.5rem 0;
	}

	hr {
		border: 1px solid lightgray;
		background-color: lightgrey;
	}

	button {
		background-color: rgb(248, 248, 248);
		border: 0.1rem solid darkgray;
		margin-left: 0.5rem;
		transition: 0.5s;
		transition-delay: 0.3s;
	}

	input:focus,
	input:focus-visible {
		outline: 3px auto darkgray;
	}

	input {
		margin: 0 0 0.5rem 0;
		padding-left: 0.5rem;
		border: 1px solid #bfc1c4;
		border-radius: 4px;
		height: 42px;
		font-size: 14px;
		width: 60%;
	}

	.post {
		display: flex;
		align-items: start;
		margin-bottom: 1rem;
	}

	.commentsTitle {
		display: flex;
		justify-content: center;
	}

	.commentsTitle:before,
	.commentsTitle:after {
		content: '';
		flex: 1 1;
		border-bottom: 2px solid darkgray;
		margin: auto;
	}

	.comment{
		margin-top:5px;
	}

	.comments{
		margin-top: 1rem;
		height: 400px;
  		overflow: auto;
	}

	.sort:hover{
		cursor: pointer;
	}
</style>
