let countryContainerEl = document.getElementById("countryContainer");
let bgContainer = document.getElementById("bgContainer")
let formEl = document.getElementById("form");
let search = document.getElementById("search");
var region = document.querySelectorAll(".region");
var regionName = document.getElementsByClassName("regionName");
var countryName = document.getElementsByClassName("country_name");
var moonToggle = document.querySelector(".toggle");
var darkModeToggle = document.getElementById("darkModeToggle")
var countryDetails = [{
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png",
        country: "Germany",
        population: "81,700.900",
        Region: "Europe",
        Capital: "Berlin",
    },

    {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        country: "United States Of America",
        population: "323,947.000",
        Region: "America",
        Capital: "WashingtoN D.C",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
        country: "Brazil",
        population: "206,135.893",
        Region: "America",
        Capital: "Brasília",
    },
    {
        image: "https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg",
        country: "Iceland",
        population: "334,300",
        Region: "Europe",
        Capital: "Reykjavík",
    },
    {
        image: "https://www.worldatlas.com/r/w960-q80/img/flag/af-flag.jpg",
        country: "Afghanistan",
        population: "27,657.145",
        Region: "Asia",
        Capital: "Kabul",
    },
    {
        image: "https://www.gettysburgflag.com/media/catalog/product/cache/2/thumbnail/520x416/602f0fa2c1f0d1ba5e241f914e856ff9/a/l/aland-islands-flag.png",
        country: "Aland Islands",
        population: "28,875",
        Region: "Europe",
        Capital: "Mariehamn",
    },
    // {
    // image: "https://cdn.britannica.com/00/6200-004-42B7690E/Flag-Albania.jpg",
    // country: "Albania",
    // population: "2,886,128",
    // Capital: "Tirana",
    // },
    {
        image: "https://cdn.britannica.com/34/3034-004-1A765B57/Flag-Algeria.jpg",
        country: "Algeria",
        population: "40,400,000",
        Region: "Africa",
        Capital: "Algiers [El Djazaïr]",
    },
];

countryDetails.forEach(function(item) {
    var country = document.createElement("div");
    country.classList.add("card-container");
    country.innerHTML = `
<img  class="image" src="${item.image}" alt="${item.country}">
<div class="bottom-container">
<h2 class="name country_name">${item.country}</h2>
<p class="pop"><strong>Population :</strong> ${item.population}</p>
<p class="regionName pop"><strong>Region :</strong> ${item.Region}</p>
<p class="pop"><strong>Capital :</strong> ${item.Capital}</p>
</div>
`;
    countryContainerEl.appendChild(country);
});

// console.log(region);
// console.log(regionName);
// console.log(regionName[0].innerText, region[0].innerText);

function handleChange() {
    var x = document.getElementById("form").value;
    console.log(x);
    Array.from(regionName).forEach(function(item) {
        if (item.innerText.includes(x) || x == "All") {
            item.parentElement.parentElement.style.display = "grid";
        } else {
            item.parentElement.parentElement.style.display = "none";
        }
    });
}

search.addEventListener("input", function() {
    Array.from(countryName).forEach(function(ele) {
        if (ele.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            ele.parentElement.parentElement.style.display = "grid";

        } else {
            ele.parentElement.parentElement.style.display = "none";
        }
    })
})