/************************************************************
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 ***********  Motionwares Digital Solutions  ****************
* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 **************** https://motionwares.com *******************
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 ******************* Ibrahim Abdulrahman ********************
 ************************************************************/
'use strict';
var Fuse = require('fuse.js');
//List of all schools
var listSchools = require('./schools');

//exporting function that carry out the search using Fuse
exports.search = function (input) {
    try {

        //Specifying fuse options for search result for doc.. visit http://fusejs.io/
        var options = { shouldSort: true, threshold: 0.8, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 1, keys: ["name", "code"] };

        //Creating an instance of Fuse with array of schools to search and options specifiied above
        var fuse = new Fuse(listSchools, options);

        //searching the user input in the list of schools provide
        var result = fuse.search(input);

        //returning result
        return result;
    } catch (error) {
        //Loggin error
        console.log(error);
    }
}

exports.allSchools = function () {
    try {
        //Returning list of all schools
        return listSchools;
    } catch (error) {
        //Loggin error
        console.log(error);
    }
}
