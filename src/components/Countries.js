import React, { useState, useEffect } from 'react';

const url = 'https:/restcountries.eu/rest/v2/all';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      {countries.map((country, id) => {
        const {
          name,
          population,
          region,
          capital,
          flag,
          numericCode,
        } = country;
        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
              <h3>{name}</h3>
              <h4>{population}</h4>
              <h4>{region}</h4>
              <h4>{capital}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Countries;
