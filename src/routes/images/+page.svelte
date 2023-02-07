<script>

	let maxImages = 24; 
	let currIndex = 0;
	/**
	 * @type {any[]}
	 */
	let images = [];
	for (let i = 0; i < maxImages; i++) {
		images.push({
			date: '',
			picture:
				'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/gallery%2FIMG_' +
				i +
				'.jpeg?alt=media&token=5b4f2e37-9dc3-41c6-bb5f-c54edbbb6b24'
		});
	}

	let pop = false;
	let displayImage = '';
	const showImage = ( /** @type {number} */ index) => {
		pop = true;
		currIndex = index;
		displayImage = 'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/gallery%2FIMG_' +
				index +
				'.jpeg?alt=media&token=5b4f2e37-9dc3-41c6-bb5f-c54edbbb6b24';
	};

	const closeImage = () => {
		pop = false;
	};

	const changePopUpForward = () => {
		if (currIndex + 1 > maxImages -1){
			currIndex = 0;
		}
		else{
			currIndex = currIndex + 1;
		}
		
		displayImage = 'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/gallery%2FIMG_' +
				currIndex +
				'.jpeg?alt=media&token=5b4f2e37-9dc3-41c6-bb5f-c54edbbb6b24';
	}

	const changePopUpBackward = () => {
		if (currIndex - 1 < 0){
			currIndex = maxImages-1;
		}
		else{
			currIndex = currIndex - 1;
		}
		
		displayImage = 'https://firebasestorage.googleapis.com/v0/b/pspp-e8218.appspot.com/o/gallery%2FIMG_' +
				currIndex +
				'.jpeg?alt=media&token=5b4f2e37-9dc3-41c6-bb5f-c54edbbb6b24';	
	}
</script>

<svelte:head>
	<title>Images</title>
	<meta name="description" content="Player Profiles" />
</svelte:head>

<div class="images">
	<div>
		<h1>Tournament Images</h1>
		<p>Check out pictures from the 375 Hudson 9th floor ping pong table.</p>
		<p>
			Don't see yourself? Join the <a
				href="https://teams.microsoft.com/l/team/19%3aCsAUOEEmMq-4OoZugqYP4h2HWJ051bI48z3DbSB7Ha81%40thread.tacv2/conversations?groupId=3e8b7471-35de-45b0-9a0b-b40cf83d6d83&tenantId=d52c9ea1-7c21-47b1-82a3-33a74b1f74b8"
				><u>PS PP NYC</u></a
			> Teams channel so you don't miss the next tournament!
		</p>
	</div>

	<div class="thumbnails">
		{#each images as image, index}
			<div class="img-container">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					class="subImages"
					src={image.picture}
					alt={image.date}
					on:click={() => showImage(index)}
				/>
			</div>
		{/each}
	</div>

	{#if pop}
		<div class="popup">
			<div class="popup-content">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span class="close" on:click={() => closeImage()}>&times;</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<h2 on:click={() => changePopUpForward()}> foward </h2>
				<h2 on:click={() => changePopUpBackward()}> back </h2>
				<div class="popup-img-container">
					<img src={displayImage} alt="ping pong dipalsyed" />
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.thumbnails {
		display: flex;
		flex-wrap: wrap;
		padding: 1rem;
		justify-content: center;
	}

	.subImages:hover {
		cursor: pointer;
		filter: brightness(75%);
	}

	.images {
		padding: 5.5rem 5rem 4rem 5rem;
	}

	img {
		width: 100%;
	}

	.img-container {
		display: flex;
		/* 250px */
		flex: 0 0 15rem;
		justify-content: center;
		/* border: 4px solid #eee; */
		padding: 0.5rem;
		background-color: #f9f9f9;
	}

	.img-container img {
		object-fit: cover;
		aspect-ratio: 8/7;
		height: auto;
	}

	.popup {
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 65px; /* Location of the box */
		padding-bottom: 300px;
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%;
		overflow: scroll;
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	.popup-content {
		margin: auto;
		padding: 20px;
		width: 80%;
	}

	.popup-img-container {
		display: flex;
		justify-content: center;
	}

	.popup-img-container img {
		border: 10px solid white;
		width: 60%;
		background-color: #f9f9f9;
	}

	.close {
		color: white;
		font-size: 50px;
		float: right;
		font-weight: bold;
		padding: 0.1rem;
	}

	.close:hover,
	.close:focus {
		color: darkgray;
		text-decoration: none;
		cursor: pointer;
	}

	@media screen and (max-width: 500px) {
		.images {
			padding: 5.5rem 3rem 4rem 3rem;
		}
		.img-container {
			flex: 0 0 22rem;
		}
		.popup-img-container img {
			width: 100%;
		}
	}

	@media screen and (max-width: 1000px) {
		.images {
			padding: 5.5rem 3rem 4rem 3rem;
		}
		.img-container {
			flex: 0 0 20rem;
		}
		.popup-img-container img {
			width: 100%;
		}
	}
</style>
