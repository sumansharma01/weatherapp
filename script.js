//fetching the countries Data
var countriesData;
const countries=async()=>{
    countriesData=await (await fetch("https://restcountries.eu/rest/v2/all")).json();
    //console.log(countriesData.length);

    //displaying the cards in the html
        var container=document.createElement("div");
        container.className="container";
        document.body.appendChild(container);
        
        
        const findWeather=()=>{
            var button=document.querySelector("btn btn-primary");
            var selectedCountry=document.querySelector("card-title");
            console.log(selectedCountry);
        
        }
        

        for(let i=0;i<countriesData.length;i++){
            if(i==0 || i%3==0){
                var row=document.createElement("div");
                row.className="row";
                container.appendChild(row);
            }
            var insideDiv=document.createElement("div");
            insideDiv.className="col-lg-4 col-md-4 col-sm-12";
            
            var card=document.createElement("div");
            card.className="card";
            card.style.width="18rem";

            var image=document.createElement("img");
            image.className="card-img-top";
            image.setAttribute("src",`${countriesData[i].flag}`);


            var cardBody=document.createElement("div");
            cardBody.className="card-body";
            
            var h=document.createElement("h5");
            h.className="card-title";
            h.innerText=countriesData[i].name;

            var p=document.createElement("p");
            p.className="card-text";
            var capital=document.createTextNode(`Capital: ${countriesData[i].capital}`);
            var region=document.createTextNode(`Region: ${countriesData[i].region}`);
            var countryCode=document.createTextNode(`Country Code: ${countriesData[i].alpha3Code}`);
            p.appendChild(capital);
            p.appendChild(region);
            p.appendChild(countryCode);
            

            var a=document.createElement("button");
            a.className="btn btn-primary";
            a.innerText="Click for weather";
            
            a.setAttribute("onclick","findWeather()");

            cardBody.appendChild(h);
            cardBody.appendChild(p);
            cardBody.appendChild(a);


            card.appendChild(image);
            card.appendChild(cardBody);
            card.style.margin="20px";

            insideDiv.appendChild(card);
            row.appendChild(insideDiv);
            


        }

        


}

countries();








