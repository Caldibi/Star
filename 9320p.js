
let controlNumber = 0;
const characters = [
  {
    "id": 1,
    "name": "Luke Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 2,
    "name": "C-3PO",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    "homeworld": "tatooine"
  },
  {
    "id": 3,
    "name": "R2-D2",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    "homeworld": "naboo"
  },
  {
    "id": 4,
    "name": "Darth Vader",
    "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    "homeworld": "tatooine"
  },
  {
    "id": 5,
    "name": "Leia Organa",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    "homeworld": "alderaan"
  },
  {
    "id": 6,
    "name": "Owen Lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 7,
    "name": "Beru Whitesun lars",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    "homeworld": "tatooine"
  },
  {
    "id": 8,
    "name": "R5-D4",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    "homeworld": "tatooine"
  },
  {
    "id": 9,
    "name": "Biggs Darklighter",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    "homeworld": "tatooine"
  },
  {
    "id": 10,
    "name": "Obi-Wan Kenobi",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    "homeworld": "stewjon"
  },
  {
    "id": 11,
    "name": "Anakin Skywalker",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    "homeworld": "tatooine"
  },
  {
    "id": 12,
    "name": "Wilhuff Tarkin",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    "homeworld": "eriadu"
  },
  {
    "id": 13,
    "name": "Chewbacca",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    "homeworld": "kashyyyk"
  },
  {
    "id": 14,
    "name": "Han Solo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    "homeworld": "corellia"
  },
  {
    "id": 15,
    "name": "Greedo",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    "homeworld": "Rodia"
  },
  {
    "id": 16,
    "name": "Jabba Desilijic Tiure",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    "homeworld": "tatooine"
  },
  {
    "id": 18,
    "name": "Wedge Antilles",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    "homeworld": "corellia"
  },
  {
    "id": 19,
    "name": "Jek Tono Porkins",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    "homeworld": "bestine"
  },
  {
    "id": 20,
    "name": "Yoda",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",

  },
  {
    "id": 21,
    "name": "Palpatine",
    "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    "homeworld": "naboo"
  }
];

const homeWorldsRaw = characters.map(function (home) {
  return home.homeworld ?? "other"
});
console.log(homeWorldsRaw);

const homeWorldsUnique = [...new Set(homeWorldsRaw)];
console.log(homeWorldsUnique);

const homeWorldsLowerCase = homeWorldsUnique.map(function (home) {
  return home.toLowerCase();
});
console.log(homeWorldsLowerCase);

const homeWorlds = homeWorldsLowerCase;
console.log(homeWorlds);


let radioForm = document.createElement("form");
radioForm.classList.add("radioForm");
let newRadio = document.createElement("div");
newRadio.classList.add("form-check");

for (let a = 0; a < homeWorlds.length; a++) {

  let radioInput = document.createElement("input");
  radioInput.classList.add("form-check-input");
  radioInput.type = "radio";
  radioInput.name = "homeworld";
  radioInput.id = "homeworld-" + homeWorlds[a];
  radioInput.value = homeWorlds[a];

  let radioLabel = document.createElement("label");
  radioLabel.classList.add("form-check-label");
  radioLabel.htmlFor = "homeworld-" + homeWorlds[a];
  radioLabel.innerText = homeWorlds[a];

  newRadio.appendChild(radioInput);
  newRadio.appendChild(radioLabel);
  radioForm.appendChild(newRadio);
  document.body.appendChild(radioForm);

}

function myfunction(event) {

 
  characters[18].homeworld = "other";
  characters[14].homeworld = "rodia";
 
  if (controlNumber == 0) {


    let removeDiv = document.querySelectorAll("div")[2];
   if(removeDiv != null){
    let child = removeDiv.lastElementChild;
    while (child) {
  
      removeDiv.removeChild(child);
      child = removeDiv.lastElementChild;
      
    }
    removeDiv.remove();}

    let filteredHomeWorld1 = event.target.value;
    console.log(filteredHomeWorld1);

    const filteredHomeWorld = characters.map(function (home) {
      return home.homeworld === filteredHomeWorld1
    });

 

    let newElement = document.createElement('div');
    newElement.classList.add("row");

    for (let i = 0; i < characters.length; i++) {
      
      
      if (filteredHomeWorld[i] == true) {
        let newCol = document.createElement('div');
        newCol.classList.add("col-3");

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.margin = "15px";
        cardDiv.style.width = "18rem";
        let cardImg = document.createElement("img");
        cardImg.src = "#";
        cardImg.classList.add("card-img-top");
        cardImg.style.height = "400px";
        cardDiv.appendChild(cardImg);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");

        let carP = document.createElement("p");
        carP.classList.add("card-text");
        cardBody.appendChild(cardH5);
        cardBody.appendChild(carP);
        cardDiv.appendChild(cardBody);

        newCol.appendChild(cardDiv);
        newElement.appendChild(newCol);
        document.body.appendChild(newElement);

        cardImg.src = characters[i].pic;
        cardH5.innerHTML = characters[i].name;
        carP.innerText = characters[i].homeworld;
        controlNumber =1;
       
        
      }
    }
  }

  else{

    
    let removeDiv = document.querySelectorAll("div")[2];
  
    let child = removeDiv.lastElementChild;
    while (child) {
  
      removeDiv.removeChild(child);
      child = removeDiv.lastElementChild;
      
    }
    removeDiv.remove();
    

    let filteredHomeWorld1 = event.target.value;
    console.log(filteredHomeWorld1);

    const filteredHomeWorld = characters.map(function (home) {
      return home.homeworld === filteredHomeWorld1
    });

    let newElement = document.createElement('div');
    newElement.classList.add("row");

    for (let i = 0; i < characters.length; i++) {
      
      
      if (filteredHomeWorld[i] == true) {
        let newCol = document.createElement('div');
        newCol.classList.add("col-3");

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.margin = "15px";
        cardDiv.style.width = "18rem";
        let cardImg = document.createElement("img");
        cardImg.src = "#";
        cardImg.classList.add("card-img-top");
        cardImg.style.height = "400px";
        cardDiv.appendChild(cardImg);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");

        let carP = document.createElement("p");
        carP.classList.add("card-text");
        cardBody.appendChild(cardH5);
        cardBody.appendChild(carP);
        cardDiv.appendChild(cardBody);

        newCol.appendChild(cardDiv);
        newElement.appendChild(newCol);
        document.body.appendChild(newElement);

        cardImg.src = characters[i].pic;
        cardH5.innerHTML = characters[i].name;
        carP.innerText = characters[i].homeworld;
        controlNumber =0;
       
        
      }
    }
    

}
}





document.querySelectorAll("input[name='homeworld']").forEach((input) => {
  input.addEventListener('change', myfunction);
});




/*let templateliteralstring = ('<div class="card" style="width: 18rem;"><img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Card title</h5><p class="card-text"></p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>');
console.log(templateliteralstring);*/



/*function renderCharacters() {

  if (controlNumber === 0) {
    let newElement = document.createElement('div');
    newElement.classList.add("row");
    for (let i = 0; i < characters.length; i++) {
      let newCol = document.createElement('div');
      newCol.classList.add("col-3");

      let cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.style.margin="15px";
      cardDiv.style.width = "18rem";
      let cardImg = document.createElement("img");
      cardImg.src = "#";
      cardImg.classList.add("card-img-top");
      cardImg.style.height = "400px";
      cardDiv.appendChild(cardImg);

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let cardH5 = document.createElement("h5");
      cardH5.classList.add("card-title");

      let carP = document.createElement("p");
      carP.classList.add("card-text");
      cardBody.appendChild(cardH5);
      cardBody.appendChild(carP);
      cardDiv.appendChild(cardBody);

      newCol.appendChild(cardDiv);
      newElement.appendChild(newCol);
      document.body.appendChild(newElement);

      cardImg.src = characters[i].pic;
      cardH5.innerHTML = characters[i].name;
      carP.innerText = characters[i].homeworld;

      controlNumber = 1;
      let changeBtn = document.getElementById("changeButton");
      changeBtn.innerText="Karakterleri Gizle";
      changeBtn.style.backgroundColor ="red";
      
    }

  } else if( controlNumber === 1){
    
    let changeBtn = document.getElementById("changeButton");
    changeBtn.innerText="Karakterleri Göster";
    changeBtn.style.backgroundColor ="white";
    
   let removeDiv = document.querySelectorAll("div")[11];

    let child = removeDiv.lastElementChild;
    while (child) {
       
       removeDiv.removeChild(child);
       child = removeDiv.lastElementChild;
   }
   removeDiv.remove();
   controlNumber = 0;
  }
  
}

*/
