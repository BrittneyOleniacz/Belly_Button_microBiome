var link = "samples.json"

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
            element["id"] == userSelectedId
        )
        var result = datafilter[0];
        // Use the id in d3 to select the `#sample-metadata` for the id
        var PANEL = d3.select("#sample-metadata");
        // clear any existing metadata
        PANEL.html("");
        // Use `Object.entries` to add each key and value pair to the panel
        // Hint: Inside the loop, you will need to use d3 to append new
        // tags for each key-value in the metadata.
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    console.log(input.samples)
        var dataFilterSamples = input.samples.filter(element => 
            element["id"] == userSelectedId
            )
        var result = dataFilterSamples[0];
        var yticks = result.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [
        {
            y: yticks,
            x: result.sample_values.slice(0, 10).reverse(),
            text: result.otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }
        ];
        var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);
    }) 
}