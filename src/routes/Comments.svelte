<script>
	import { onMount } from 'svelte';

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
				console.log(data.response);
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

	const onKeyPress = (e) => {
		if (e.charCode === 13) setComment(newComment, commenter);
	};

	onMount(async () => {
		promise = getComments();
	});
</script>

<link rel="stylesheet" href="//use.fontawesome.com/releases/v5.3.0/css/all.css" />

<div class="commentsTitle"><h3 style="padding: 0 1rem 0 1rem;">Comments</h3></div>
<div class="comment_section">
	<h4>Post a comment <i class="fas fa-pencil-alt" /></h4>
	<div class="post">
		<input
			placeholder="Enter name"
			style="width: 15%; margin-right: .5rem; background-color: white;"
			bind:value={commenter}
			maxlength="15"
		/>
		<input
			on:keypress={onKeyPress}
			bind:value={newComment}
			placeholder="Post a comment..."
			style="background-color: white;"
			maxlength="120"
		/>
		<button on:click={() => setComment(newComment, commenter)} style="color: black">Post</button>
	</div>
	<hr />
	{#await promise}
		<i class="fa fa-sync-alt fa-spin" style="font-size:24px" />
	{:then data}
		{#each comments as comment}
			<div>
				<span style="font-weight: 600; font-size: 17px;">{comment.author}</span> - {comment.date}
			</div>
			<p>{comment.comment}</p>
		{/each}
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

	p {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

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
</style>
