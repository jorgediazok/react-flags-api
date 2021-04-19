import React, { useState, useEffect } from 'react';
import '../styles/Countries.css';

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
      <section className="grid">
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
                <div className="details">
                  <h3>{name}</h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
