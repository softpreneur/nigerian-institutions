List of Nigerian Institutions 
=============================

GET https://api.npmjs.org/downloads/point/{period}[/{nigerian-institutions}]

A searchablen list of all federal, state and private universities, polytechnics, colleges of education and monotechnics in Nigeria with city and abbreviation.


## Installation

<code>npm install nigerian-institutions</code>

## Usage

<code>var institutions = require('nigerian-institutions');</code>

<br>// To implement realtime or normal search for institutions in Nigeria, it will return array of schools with name and city closest to your search input

## Example 1

<code> var response = institutions.search('ABU Zaria'); </code>   <br>// [{ name: "Ahmadu Bello University, Zaria", city: "Zaria", code: "ABU Zaria" }, { name: "Nuhu Bamalli Polytechnic, Zaria", city: "Zaria", code: "NUBA Zaria"}, .......]


## Example 2

<code> var response = institutions.allSchools(); </code>   <br>// Return list of all institutions in Nigeria

## You can follow me
<br>Instagram: @motion_wares
<br>Twitter: @motionboy4
<br>Facebook: @ibrahim.motion

## Contributing

To contribute follow me on github.com/motionboy and fork the repo...

