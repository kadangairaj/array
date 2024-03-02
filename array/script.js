// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');

    console.log("Countries from Asia:");
    console.log(asiaCountries);

    // Task 2: Get all countries with a population of less than 2 lakhs using Filter function
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);

    console.log("Countries with population less than 2 lakhs:");
    console.log(countriesWithLessPopulation);

    // Task 3: Print the following details name, capital, flag, using forEach function
    console.log("Details of countries:");
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });

    // Task 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log("Total population of countries:", totalPopulation);

    // Task 5: Print the country that uses US dollars as currency
    const countryWithUSDCurrency = data.find(country => {
      return country.currencies && country.currencies.USD;
    });

    console.log("Country that uses US dollars as currency:", countryWithUSDCurrency);
  })
  .catch(error => console.log('Error fetching data:', error));
