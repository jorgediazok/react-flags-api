import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountry);
  };

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
              <div className="container">
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
                  <Link to={`/countries/${name}`} className="btn">
                    Learn More
                  </Link>
                  <button
                    className="btn"
                    onClick={() => removeCountry(numericCode)}>
                    Remove Country
                  </button>
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
