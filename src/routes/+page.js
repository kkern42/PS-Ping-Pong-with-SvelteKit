// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


// Run once when the page is loaded 
const onDocumentReady = () => {
    console.log("hello, you've found a secert message... the gold its buried under the foundation of the rockefeller estate at Rockwood Hall in Sleepy Hollow go quickly before the others find out");
  }
  
onDocumentReady();