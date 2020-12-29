var link = "./js/samples.json"

// 1. Use the D3 library to read in `samples.json`.
d3.json(link).then((data) => {
    var dropdown = d3.select("#selDataset");
    data.names.forEach((sample) => {
      dropdown
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// * Use `sample_values` as the values for the bar chart.
// * Use `otu_ids` as the labels for the bar chart.
// * Use `otu_labels` as the hovertext for the chart.
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

    // 3. Create a bubble chart that displays each sample.
    // * Use `otu_ids` for the x values.
    // * Use `sample_values` for the y values.
    // * Use `sample_values` for the marker size.
    // * Use `otu_ids` for the marker colors.
    // * Use `otu_labels` for the text values.
}

