// =============================================================================
// Bar chart
// =============================================================================

Plotly.newPlot("myPlot", [{x: [2, 4, 6], y: [24, 12, 18]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

 Plotly.newPlot("plotArea", [trace], layout);

// =============================================================================
// Pie Chart Will Not Render due to x, y args in trace
// =============================================================================

 var trace = {
    x: ["NA beer", "NA wine", "NA martini", "NA margarita", "ice tea", "NA rum & coke", "NA mai tai", "NA gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };

 var data = [trace]

 var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
 };

 Plotly.newPlot("plotArea", data, layout);

// =============================================================================
// Pie Chart
// =============================================================================

 var trace = {
    labels: ["NA beer", "NA wine", "NA martini", "NA margarita",
       "ice tea", "NA rum & coke", "NA mai tai", "NA gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };

  var data = [trace];

  var layout = {
    title: "'Pie' Chart",
  };

  Plotly.newPlot("plotArea", data, layout);

// =============================================================================
// JS map function
// =============================================================================

var numbers = [0, 2, 4, 6, 8];

var fived = numbers.map(function(num){
    return num + 5;
});

console.log(fived)

// =============================================================================
// JS map function
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

var cityPop = cities.map(function(pop){
    return pop.population;
});
console.log(cityPop);

// =============================================================================
// Filtering array by first letter
// =============================================================================

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.filter(function(letter){
    return letter[0] === 's';
});

console.log(startsWithS);

// =============================================================================
// Standard JS function vs Arrow function
// =============================================================================

// With standard javascript function
var numbers = [1,2,3,4,5];

var doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled);

// With arrow function
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);

console.log(doubled);

// =============================================================================
// Slice method
// =============================================================================

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );

// =============================================================================
// JAVASCRIPT METHODS
// =============================================================================

// =============================================================================
// 
// =============================================================================