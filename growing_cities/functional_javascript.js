// =============================================================================
// All numbers of array are doubled
// =============================================================================
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);
// =============================================================================
// Anonymous function inside map method; parameter name is arbitrary
// =============================================================================
var doubled = numbers.map(function(integer) {
    return integer * 2;
    });
// =============================================================================
//  Anonymous function inside map method; parameter name is arbitrary
// =============================================================================
var doubled = numbers.map(function(carPrice) {
    return carPrice * 2;
    });
// =============================================================================
// Map method to extract specific property from each object in an array
// =============================================================================
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
// =============================================================================
// Map method to extract specific property from each object in an array
// =============================================================================
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);
// =============================================================================
// filter() Method
// =============================================================================
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);
// =============================================================================
// filter() Method
// =============================================================================
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var s_words = words.filter(function(wrd){
    return wrd[0] === 's';
});

console.log(s_words);
// =============================================================================
// Arrow Function, Ex 1
// =============================================================================
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);
// =============================================================================
// Arrow Function, Ex 2
// =============================================================================
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
// =============================================================================
// Arrow Function, Ex 3
// =============================================================================
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
// =============================================================================
// slice() Method
// =============================================================================
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
// =============================================================================
// slice() Method, Ex 2
// =============================================================================
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );