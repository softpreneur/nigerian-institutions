List of Nigerian Institutions 
=============================

A searchablen list of all federal, state and private universities, polytechnics, colleges of education and monotechnics in Nigeria with city and abbreviation.


## Installation

npm install nigerian-institutions

## Usage

var institutions = require('nigerian-institutions');

<br>// To implement realtime or normal search for institutions in Nigeria, it will return array of schools with name and city closest to your search input

## Example 1

var response = institutions.search('ABU Zaria');   <br>// [{ name: "Ahmadu Bello University, Zaria", city: "Zaria", code: "ABU Zaria" }, { name: "Nuhu Bamalli Polytechnic, Zaria", city: "Zaria", code: "NUBA Zaria"}, .......]


## Example 2

var response = institutions.allSchools();   <br>// Return list of all institutions in Nigeria

## You can follow me
<br>Instagram: @motion_wares
<br>Twitter: @motionboy4
<br>Facebook: @ibrahim.motion

## Contributing

To contribute follow me on github.com/motionboy and fork the repo...

