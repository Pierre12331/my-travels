import React from "react";

const Travel1 = ({ destination, country, distance, image }) => (
  <figure>
    <img src = {image} alt = {destination} />
    <figcaption>
    	<blockquote>{destination}</blockquote>
    	<blockquote>{country}</blockquote>
    	<cite>{distance}</cite>
     </figcaption>
  </figure>
);

export default Travel1;
