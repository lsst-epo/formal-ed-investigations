var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#scatter-lasso").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Lasso functions to execute while lassoing
var lasso_start = function() {
  lasso.items()
    .transition()
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("height", 8)
    .attr("width", 8)
    .style("fill",null) // clear all of the fills
    .classed({"not_possible":true,"selected":false}); // style as not possible
};

var lasso_draw = function() {
  // Style the possible dots
  lasso.items().filter(function(d) {return d.possible===true})
    .classed({"not_possible":false,"possible":true});

  // Style the not possible dot
  lasso.items().filter(function(d) {return d.possible===false})
    .classed({"not_possible":true,"possible":false});
};

var lasso_end = function() {
  // Reset the color of all dots
  lasso.items()
     .style("fill", function(d) { return color(d.species); });

  // Style the selected dots
  lasso.items().filter(function(d) {return d.selected===true})
    .classed({"not_possible":false,"possible":false})
    .transition()
    .attr("rx", 8)
    .attr("ry", 8)
    .attr("height", 16)
    .attr("width", 16)

  // Reset the style of the not selected dots
  lasso.items().filter(function(d) {return d.selected===false})
    .classed({"not_possible":false,"possible":false})
    .transition()
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("height", 8)
    .attr("width", 8)

};

// Create the area where the lasso event can be triggered
var lasso_area = svg.append("rect")
                      .attr("width",width)
                      .attr("height",height)
                      .style("opacity",0);

// Define the lasso
var lasso = d3.lasso()
      .closePathDistance(75) // max distance for the lasso loop to be closed
      .closePathSelect(true) // can items be selected by closing the path?
      .hoverSelect(true) // can items by selected by hovering over them?
      .area(lasso_area) // area where the lasso can be started
      .on("start",lasso_start) // lasso start function
      .on("draw",lasso_draw) // lasso draw function
      .on("end",lasso_end); // lasso end function

// Init the lasso on the svg:g that contains the dots
svg.call(lasso);

d3.tsv("assets/data/scatter-lasso.tsv", function(error, data) {
  data.forEach(function(d) {
    d.sepalLength = +d.sepalLength;
    d.sepalWidth = +d.sepalWidth;
  });

  x.domain(d3.extent(data, function(d) { return d.sepalWidth; })).nice();
  y.domain(d3.extent(data, function(d) { return d.sepalLength; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Sepal Width (cm)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Sepal Length (cm)")

  svg.selectAll(".dot")
      .data(data)
      .enter().append("rect")
      .attr("id",function(d,i) {return "dot_" + i;}) // added
      .attr("class", "dot")
      .attr("height", 8)
      .attr("width", 8)
      .attr("x", function(d) { return x(d.sepalWidth); })
      .attr("y", function(d) { return y(d.sepalLength); })
      .style("fill", function(d) { return color(d.species); })
      .on("mouseover", function(d) {
        tooltip.transition()
             .duration(200)
             .style("opacity", .9);
        tooltip.html("I am a tool tip.</br>" + d.species)
             .style("left", (d3.event.pageX + 5) + "px")
             .style("top", (d3.event.pageY - 28) + "px");
        d3.select(this).transition()
            .duration(400)
            .attr("rx", 8)
            .attr("ry", 8)
            .attr("height", 16)
            .attr("width", 16)
        })
      .on("mouseout", function(d) {
        tooltip.transition()
            .duration(400)
            .style("opacity", 0);
            d3.select(this).transition()
            .duration(1000)
            .attr("rx", 0)
            .attr("ry", 0)
            .attr("height", 8)
            .attr("width", 8)
      });


  lasso.items(d3.selectAll(".dot"));

  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});