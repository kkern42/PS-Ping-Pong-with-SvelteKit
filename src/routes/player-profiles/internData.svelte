<script context="module">

	//holds api response
	let internProfiles = [];

	//holds formatted api response
	export let interns = [];

	/*export let intern = [
		{
			name: 'Andrew Mao',
			grip: 'Handshake',
			record: '0-0',
			strength: 'Unwavering Poise',
			weakness: 'Cannot be stopped, unless Reece',
			picture:
				'https://media.licdn.com/dms/image/C5603AQGC6-1NSRY5KA/profile-displayphoto-shrink_800_800/0/1642126013136?e=2147483647&v=beta&t=1Z0tg7JnT4--1V2Z-hOER6fVDk7Xv7l47fkCCd3R5VI',
			reverse: '',
			margin: ''
		},
		{
			name: 'Jimkelly Percine',
			grip: 'Handshake',
			record: '0-0',
			strength: 'Crazy Reach',
			weakness: 'Audible Intent',
			picture:
				'https://media.licdn.com/dms/image/D4E03AQGI_cQ356XsrA/profile-displayphoto-shrink_800_800/0/1678828911559?e=2147483647&v=beta&t=06vh3eYdrAwC_I2Z8PQAaqGdDdTnXspVfVgs4cpfnIA',
			reverse: '',
			margin: ''
		},
		{
			name: 'Idris Lawal',
			grip: 'Handshake',
			record: '0-0',
			strength: 'Scales with Opponent',
			weakness: 'Formal Attire',
			picture:'https://media.licdn.com/dms/image/C4D03AQEZEd5_bbhARA/profile-displayphoto-shrink_800_800/0/1646459190668?e=2147483647&v=beta&t=tqSn0qUyCoJbzrdQOXr-erchRXAYC7kiS_MFin_sXmc',
			reverse: '',
			margin: ''
		},
	];*/

	//fetches api response and populates interns obj with formatted data
	const getInterns = async() => {

			await fetch(
				'https://firestore.googleapis.com/v1/projects/pspp-e8218/databases/(default)/documents/InternProfiles'
			)
				.then((response) => response.json())
				.then((data) => {
					internProfiles = data.documents;
				})
				.catch((error) => {
					console.log(error);
					return [];
				});


			/*scoreList.forEach((item, index) => {
				let rank = index + 1;
				let li = document.createElement('p');
				li.innerText = rank + '. ' + item.name + ': ' + item.score + '   (' + item.date + ')';
				//li.innerText = rank + ". " +  item.name + ": " + item.score;
				list.appendChild(li);
			});*/

			internProfiles.forEach((item, index) => {
				
				let tempObj = [];
				tempObj['name'] = item.fields.name.stringValue;
				tempObj['grip'] = item.fields.grip.stringValue;
				tempObj['picture'] = item.fields.pfp.stringValue;
				tempObj['strength'] = item.fields.strength.stringValue;
				tempObj['weakness'] = item.fields.weakness.stringValue;
				tempObj['reverse'] = "";
				tempObj['margin'] = "";
				tempObj['record'] = (String)(item.fields.wins.integerValue) + "-" + (String)(item.fields.losses.integerValue);

				interns[index] = tempObj;

			})

		};

	getInterns();


</script>
