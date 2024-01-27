// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag, using forEach function
// Print the total population of countries using reduce function
// Print the country that uses US dollars as currency.

let country_arr = new XMLHttpRequest();
country_arr.open("GET", "https://restcountries.com/v3.1/all")
country_arr.send();
country_arr.onload = () => {
    let data = JSON.parse(country_arr.response)
    console.log('country_arr ===',data) 

    let cntry_asia = data.filter(eachCntry => eachCntry.continents == 'Asia' || eachCntry.region == 'Asia')
    let cntry_asia_name = cntry_asia.map(country => country.name)
    console.log('country_arr asia',cntry_asia, cntry_asia_name)

    let population = data.filter(eachCntry => eachCntry.population < 200000)
    console.log('country_arr population less than 2 lakh',population)    

    let cntry_dtls = [];
    data.forEach(eachCntry => {
        cntry_dtls.push({'name':eachCntry.name, 'capital':eachCntry.capital, 'flag':eachCntry.flag})
    });
    console.log('country_arr details name, capital, flag',cntry_dtls);

    // let total_population = data.reduce(eachCntry => eachCntry.population);
    // console.log('country_arr total population',total_population) 

    let us_dolar_cntry = data.filter(eachCntry => eachCntry.currencies && eachCntry.currencies.USD);
    let cntry_names = us_dolar_cntry.map(country => country.name)
    console.log('country_arr us_dolar_cntry',us_dolar_cntry, cntry_names) 
}