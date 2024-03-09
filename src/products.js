
const skates = [
  {
    name: "HC EVO PRO",
    price: 699.99,
    href:  "Evopro.html",
    imgSrc: "./Images/evopro.PNG",
  },
  {
    name: "FE FALCON F6",
    price: 199.99,
    href:  "feFalcon.html",
    imgSrc: "./Images/feFalconF6.PNG",
  }, 
  {
    name: "GAWDS FM3 PRO",
    price: 375.00,
    href:  "GAWDS.html",
    imgSrc: "./Images/morales.PNG",
  },
  {
    name: "AKALI REVEL 4",
    price: 209.99,
    href:  "Revel.html",
    imgSrc: "./Images/Revel4.PNG"
  },
];

const frames = [
  {
    name: "ENDLESS TRINITY",
    price: 219.00,
    href:  "trinity.html",
    imgSrc: "./Images/endlessTrinity.PNG",
  },
  {
    name: "FR CARBON",
    price: 329.99,
    href:  "trinity.html",
    imgSrc: "./Images/FRcarbon.PNG"
  },
  {
    name: "SEBA DELUXE",
    price: 149.99,
    href: "trinity.html",
    imgSrc: "./Images/sebaDeluxe.PNG",
  },
];

const wheels = [
  {
    name: "HYDROGEN SPECTRE(4)",
    price: 34.99,
    href:  "Cosmics.html",
    imgSrc: "./Images/HydrogenSpectre.PNG",
  },
  {
    name: "K2 BOLT URBAN(4)",
    price: 49.99,
    href:  "Cosmics.html",
    imgSrc: "./Images/Bolturban.PNG"
  },
  {
    name: "UC COSMICS(4)",
    price: 49.99,
    href:  "Cosmics.html",
    imgSrc: "./Images/Undercover.PNG"
  },
];



const skatesList = document.querySelector(".skate-products");
const framesList = document.querySelector(".frame-products");
const wheelsList = document.querySelector(".wheel-products");

function fillSkates(){
    skates.forEach((skates) => {
        skatesList.innerHTML += `
        <div class="shop-Product">
        <span class="shop-Product-title">${skates.name}</span> 
        <a href="${skates.href}" target="_blank">
        <img class="shop-Product-image" src="${skates.imgSrc}">
        </a>
        <div class="shop-Product-details">
            <span class="shop-Product-price">$${skates.price}</span>
            
            <button class="btn btn-primary shop-Product-button" type="button">ADD TO CART</button>         
            
        </div> 
        <div class="shop-Product-details">
         <label class="shop-Product-details" for="Size">Foot Size(EU))</label>
              <select class="shop-Product-size" id="Size" name="footSize">
              <option value="36(EU)">36(EU)</option>
              <option value="37(EU)">37(EU)</option>
              <option value="38(EU)">38(EU)</option>
              <option value="39(EU)">39(EU)</option>
              <option value="40(EU)">40(EU)</option>
              <option value="41(EU)">41(EU)</option>
              <option value="42(EU)">42(EU)</option>
              <option value="43(EU)">43(EU)</option>
              <option value="44(EU)">44(EU)</option>
              <option value="45(EU)">45(EU)</option>
              <option value="46(EU)">46(EU)</option>
            </select>   
            </div>        
            
    </div>  
    `;
    });
}
fillSkates();


function fillFrames(){
  frames.forEach((frame) => {
      framesList.innerHTML += `
        <div class="shop-Product">
          <span class="shop-Product-title">${frame.name}</span>
          <a href="${frame.href}" target="_blank">
            <img class="shop-Product-image" src="${frame.imgSrc}">
          </a>
            <div class="shop-Product-details">
              <span class="shop-Product-price">$${frame.price}</span>
                <button class="btn btn-primary shop-Product-button" type="button">ADD TO CART</button>
            </div>
            <label for="Size">Frame Size(mm)</label>
            <select class="shop-Product-size" id="Size" name="footSize">
                <option value="231mm">231mm</option>
                <option value="243mm">243mm</option>
                <option value="255mm">255mm</option>                       
            </select>                     
        </div>
      `;
     });
}
fillFrames();
          

function fillWheels(){
  wheels.forEach((wheel) => {
      wheelsList.innerHTML += `
              <div class="shop-Product">
                    <span class="shop-Product-title">${wheel.name}</span>
                    <a href="${wheel.href}" target="_blank">
                    <img class="shop-Product-image" src="${wheel.imgSrc}">
                    </a>
                    <div class="shop-Product-details">
                        <span class="shop-Product-price">$${wheel.price}</span>
                        <button class="btn btn-primary shop-Product-button" type="button">ADD TO CART</button>
                    </div>
                    <label for="Size">Wheel Size(mm)</label>
                    <select class="shop-Product-size" id="Size" name="footSize">
                        <option value="76mm">76mm</option>
                        <option value="80mm">80mm</option>                                 
                    </select>                     
               </div>
    `;
  });
}
fillWheels();
          
