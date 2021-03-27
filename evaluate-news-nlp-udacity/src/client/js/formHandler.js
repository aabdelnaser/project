import {checkForWebsite} from "./checkForWebsite"
export { handleSubmit }
async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('website').value
   Client.checkForWebsite(formText)
   console.log("::: URL Submitted :::")
    if(checkForWebsite(formText))
    {
        try {
            fetch('http://localhost:8082/evaluate/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({fetchedUrl: formText})
            })
            .then(res => res.json())
            .then(function (receivedDataFromServer) {
              let Score_Tag =  document.getElementById('Score-Tag').innerHTML = receivedDataFromServer.score_tag.toLowerCase();
              let sentiment =  document.getElementById('set').innerHTML = receivedDataFromServer.sentiment.toLowerCase();
              let agreement =  document.getElementById('agreement').innerHTML = receivedDataFromServer.agreement.toLowerCase();
              let subjectivity =  document.getElementById('sub').innerHTML = receivedDataFromServer.subjectivity.toLowerCase();
              let confidence =  document.getElementById('con').innerHTML = receivedDataFromServer.confidence.toLowerCase();
              let irony =  document.getElementById('irony').innerHTML = receivedDataFromServer.irony.toLowerCase();
           
                // you need to render all response attributes to client
            }) 
            /* const serverCall = await fetch('http://localhost:8082/evaluate/')
         /* {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newUrl : formText}),
            })
           */  
          // const serverResponse = await serverCall.json();
    
      
            
        document.getElementById('agreement').innerHTML = serverResponse.agreement.toLowerCase();

    }
catch (error)
{console.log("error")}
    

    }
} 