console.log(cityGrowths);
// =============================================================================
// Sort and select the cities
// =============================================================================
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
// =============================================================================
// Slice the top five cities
// =============================================================================
var topFiveCities = sortedCities.slice(0,5);
// =============================================================================
// Create Arrays of City Names and Growth Figures
// =============================================================================
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
// =============================================================================
// Create bar chart with arrays
// =============================================================================
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
