const searchBtn = document.getElementById('search').addEventListener('click', searchCountry);
const countryData = document.getElementById('countries');

function searchCountry(e) {

    const name = document.getElementById('searchInput').value;

    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((Response) => {
      console.log(Response.status);
      if (!Response.ok) {
        Error("not found");
      }
      return Response.json();
    })
    .then((country) => {
      console.log(country);
      console.log(country[0].name.common);

      let output = '';

        output = `
                <div class="col-sm-4 text-center" style="background-color: transparent; width:22rem; height:auto; margin:2rem;padding:1rem;">
                <img src='${country[0].flags.png}' /><br><br><h5>${country[0].name.common}</h5>
                </div>
                <div class="col-sm-8" style="background-color: transparent;border:2px solid white; width:50rem; height:auto; margin:2rem;padding:1rem;">
                    <div>
                        <h3>Where is ${country[0].name.common} located ?</h3> <br>
                        <a href="${country[0].maps.googleMaps}"><img src='maps.gif' width='400px' height='200px'/></a>
                        <br><br><h3>${country[0].name.common} Facts:</h3><br>
                        <div class='row'>
                            <div class='col-sm-3'>Capital</div>
                            <div class='col-sm-5'>${country[0].capital}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Currency</div>
                            <div class='col-sm-5'>${country[0].currencies}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Continent</div>
                            <div class='col-sm-5'>${country[0].region}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Population</div>
                            <div class='col-sm-5'>${country[0].population}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Language</div>
                            <div class='col-sm-5'>${country[0].Languages}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Borders</div>
                            <div class='col-sm-5'>${country[0].borders}</div>
                        </div><br>
                        <div class='row'>
                            <div class='col-sm-3'>Timezones</div>
                            <div class='col-sm-5'>${country[0].timezones}</div>
                        </div><br>
                    </div>
                </div>
                `;

    countryData.innerHTML = output;

    });
    

e.preventDefault();
};



    fetch(`https://restcountries.com/v3.1/all`)
    .then((Response) => {
      console.log(Response.status);
      if (!Response.ok) {
        Error("not found");
      }
      return Response.json();
    })
    .then((country) => {
      console.log(country);
      let output = '';

      country.forEach((data) => {

        output += `
                <div class="col-sm-4 text-center" style="background-color: transparent;border:2px solid white; width:12rem; height:auto; margin:2rem;padding:1rem;">
                <img src='${data.flags.png}' width='150px' height='120px'/><br><br><h5>${data.name.common}</h5>
                </div>
                `;

        });
    countryData.innerHTML = output;

    });

