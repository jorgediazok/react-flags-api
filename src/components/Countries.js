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
      {countries.map((country) => {
        const { id } = country;
        return <article key={id}>Country data</article>;
      })}
    </>
  );
};

export default Countries;
