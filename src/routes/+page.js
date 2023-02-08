// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// Run once when the page is loaded
const onDocumentReady = () => {
	console.log(
		"hello, you've found a secert message... go to https://ps-ping-pong.netlify.app/pong to play pong!!"
	);
};

onDocumentReady();
