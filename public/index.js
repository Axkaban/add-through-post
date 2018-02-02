// setting up a listener on the submit button
 document.getElementById('submit').addEventListener('click', (e)=>{
// using axios to send a post to back-end and redirect to /test route.
     axios.post('/test', {
         x: e.path[1][0].value,
         y: e.path[1][1].value
     }) //response will be rendered
         .then(function (response) {
             console.log(response);
         })
         .catch(function (error) {
             console.log(error);
         });
 });

