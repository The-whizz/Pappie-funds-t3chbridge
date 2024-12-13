const req = new XMLHttpRequest()
req.onload =()=>console.log(req.response);
req.onerror=()=>console.log('error');

;
const getFacts = new Promise((resolve,reject) =>{
    req.open("GET","https:catfact.ninja/fact?limit=15&max_length=60")
    req.send()
    req.responseType="json"
    req.onload=()=> resolve(req.response)
    req.onerror = ()=> reject(req.statusText)
})

document.getElementById("facts").addEventListener("click", () => {
    getFacts
        .then((response) => {
            // Clear any previous facts
            const factsContainer = document.getElementById("factsContainer");
            factsContainer.innerHTML = ''; 

            // Loop through the facts and display them
            response.data.forEach((fact, index) => {
                const factElement = document.createElement('p');
                factElement.textContent = `${index + 1}. ${fact.fact}`;
                factsContainer.appendChild(factElement);
            });
        });
