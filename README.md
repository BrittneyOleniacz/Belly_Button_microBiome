#  Belly Button Biodiversity

**TASK:** build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. 

### Methods Summary
1. D3 library used to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * `sample_values` as the values for the bar chart.
    * `otu_ids` as the labels for the bar chart.
    * `otu_labels` as the hovertext for the chart.

3. Create a bubble chart that displays each sample.
    * Use `otu_ids` for the x values.
    * Use `sample_values` for the y values.
    * Use `sample_values` for the marker size.
    * Use `otu_ids` for the marker colors.
    * Use `otu_labels` for the text values.

4. Display: 
    * the sample metadata, i.e., an individual's demographic information.
    * each key-value pair from the metadata JSON object somewhere on the page.

6. When a new sample is selected, the plots update.

### Observations
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


### Sources
Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

