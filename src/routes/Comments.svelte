<script>
    import { onMount } from "svelte";

    const getComments = async () => {
        fetch("https://pspptofirebase.azurewebsites.net/api/AccessFirebase?name=kevin&code=WFVEZmP8cqOe1Fyt7Q6Po07lpvhO6eRXtG9DCziwvbSOAzFuiHLimw==")
        .then(response => response.json())
        .then(data => {
            //returns an array of data
            console.log(data.response);
        
        }).catch(error => {
            console.log(error);
            return [];
        });
    };


    onMount(async () => {
        getComments();
    });
</script>

<div>

</div>

<style>
    
</style>