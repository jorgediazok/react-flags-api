import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Country.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, [name]);

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left">Back Home</i>
      </Link>
    </>
  );
};

export default Country;
