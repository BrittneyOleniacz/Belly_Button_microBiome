var link = "./js/samples.json"

d3.json(link).then((data) => {
    var dropdown = d3.select("#selDataset");
    data.names.forEach((sample) => {
      dropdown
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})

function optionChanged(userSelectedId){ 
    d3.json(link).then(input => {
        console.log(input.metadata)
        var datafilter = input.metadata.filter(element => 
            element["id"] == userSelectedId)
        var result = datafilter[0];
        // Use the id in d3 to select the `#sample-metadata`
        var PANEL = d3.select("#sample-metadata");
        // clear any existing metadata
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
        var dataFilterSamples = input.samples.filter(element => 
            element["id"] == userSelectedId
            )
        var result = dataFilterSamples[0];
        var yticks = result.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [{
            y: yticks,
            x: result.sample_values.slice(0, 10).reverse(),
            text: result.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }];
        var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);
    }) 
}

// * Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.
// * You will need to modify the example gauge code to account for values ranging from 0 through 9.
// * Update the chart whenever a new sample is selected.
