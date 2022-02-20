let height = 500;
let width = 500;

let defaultValue = "a";
let whitespaceValues = new Set(["space", "tab", "newline"]);
let vowelValues = new Set(["a", "e", "i", "o", "u"]);

let convertToObjectList = data => {
  return Object.entries(data).map(obj => {
    return { name: obj[0], value: obj[1] };
  });
};

let getColor = value => {
  if (whitespaceValues.has(value)) {
    return "#FADBBF";
  } else if (vowelValues.has(value)) {
    return "#A2DE49";
  } else {
    return "#A8B9FF";
  }
};

// for the svg on the left
let svg_before = d3
  .select("#plot-before")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// for the svg on the right
let svg_after = d3
  .select("#plot-after")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// create the bubble map svgs
let update = (input, svg) => {
  let bubble = d3
    .pack()
    .size([width - 2, height - 2])
    .padding(3)(d3.hierarchy({ children: input }).sum(d => d.value));

  // create containers and locations for the bubbles
  // bind the data, using name_1 as the key to detect changes in elements
  let node_containers = svg.selectAll("g").data(bubble.leaves(), d => d.name);
  nodes = node_containers
    .enter()
    .append("g")
    .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

  // ignore the empty list used for initialization
  if (input.length > 0) {
    // the circles are the bubbles themselves
    nodes
      .append("circle")
      .transition()
      .duration(1000)
      .attr("r", d => d.r)
      .attr("fill", d => getColor(d.data.name));

    // label the letter
    nodes
      .append("text")
      .attr("text-anchor", "middle")
      .text(d => d.data.name);

    // label the numeric frequency
    nodes
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 12)
      .text(d => d.data.value)
      .style("font-size", "0.8em");
  }

  // if letter changes, remove the circle
  node_containers.exit().remove();
};

// callback for clicking a radio button
let handleSelect = node => {
  update(convertToObjectList(data["_" + node]), svg_before);
  update(convertToObjectList(data[node + "_"]), svg_after);
};

let getUniqueKeys = () => {
  duplicated_keys = Object.keys(data).map(x => x.replace("_", ""));
  uniqueKeys = [...new Set(duplicated_keys)].sort();
  whitespaceAtBack = [
    ...vowelValues,
    ...uniqueKeys.filter(x => !whitespaceValues.has(x) && !vowelValues.has(x)),
    ...whitespaceValues
  ];
  return whitespaceAtBack;
};

// for the radio buttons
form = d3
  .select("#letter-select")
  .selectAll("div")
  .data(getUniqueKeys())
  // .data(metadata)
  .enter()
  .append("div");

// the radio button input element
form
  .append("input")
  .attrs({
    type: "radio",
    name: "letter",
    value: d => d,
    id: d => d // to associate with the "for" attribute
  })
  .style("margin-right", "5px")
  .style("cursor", "pointer")
  .on("change", handleSelect)
  .property("checked", function(d) {
    return d == defaultValue;
  });

// the radio button label
form
  .append("label")
  .text(d => d)
  .attr("for", d => d)
  .style("background-color", d => getColor(d))
  .style("border-radius", "5px")
  .style("padding", "0 10px")
  .style("cursor", "pointer");

// initialize with empty lists. somehow, one bubble gets stuck if we don't do this
update([], svg_before);
update([], svg_after);

// then select a
handleSelect("a");
