const satellite = document.getElementsByClassName("satellite")[0];


function satelliteDetails(){
    const url = "https://isro.vercel.app/api/customer_satellites";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        data.customer_satellites.forEach(value => {
            const card = document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("style","width:18rem");
            card.innerHTML +=`
            <div class = "body">
            <h5 class="country">${value.country}</h5>
            <p class="id"> ID: ${value.id}</p>
            <p class="launch_date"> Launch-date :${value.launch_date}</p>
            <p class="launcher">Launcher: ${value.launcher}</p>
            <p class="mass">Weight: ${value.mass} Tons</p>

            </div> `;
            satellite.appendChild(card);
            
        });

    }).catch((error)=>console.log(error));
}

satelliteDetails();