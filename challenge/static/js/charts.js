// This code loads the sample data and selection of the volunteer IDs in the dropdown
d3.json('assets/data/samples.json').then(({names}) => {
    names.forEach(id => {
        d3.select('select').append('option').text(id);
    });   
    
    optionChanged();
});
// -----------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------
// This function sets up the demographic panel to display selected information
const optionChanged = () => {
    let choice = d3.select('select').node().value;

    d3.json('assets/data/samples.json').then(({metadata,samples})=> {

        let meta = metadata.filter(obj => obj.id == choice)[0];
        let sample = samples.filter(obj => obj.id == choice)[0];

        d3.select('.panel-body').html('');
        Object.entries(meta).forEach(([key,val])=> {
            d3.select('.panel-body').append('h4').text(`${key.toUpperCase()}: ${val}`);
        });
// -----------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------
        // Here we set variables to be used in building our charts
        let { otu_ids, sample_values, otu_labels } = sample;
        let { wfreq } = meta;
// -----------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------
        // Bar Chart
        var barData = [
            {
              x: sample_values.slice(0,10).reverse(),
              y: otu_ids.slice(0,10).reverse().map(x => `OTU ${x}`),
              text: otu_labels.slice(0,10).reverse(),
              type: 'bar',
              orientation: 'h'
            }
          ];
          
          Plotly.newPlot('bar', barData);
// -----------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------
          // Bubble Chart
          var bubble = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Earth"
            }
          };
          
          var data = [bubble];
          
          var layout = {
            title: 'Bacteria Cultures per Sample',
            xaxis: {title: "OTU ID"},
            showlegend: false,
          };
          
          Plotly.newPlot('bubble', data, layout);
// -----------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------
          //Gauge Chart
          var gauge = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: wfreq,
              title: { text: "Belly Button Washing Frequency" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {'axis': {'range': [null, 10], 'dtick': 2},
                      'bar': {'color': "black"},
                      'steps' : [
                        {'range': [0, 2], 'color': "red"},
                        {'range': [2, 4], 'color': "orange"},
                        {'range': [4, 6], 'color': "yellow"},
                        {'range': [6, 8], 'color': "lightgreen"},
                        {'range': [8, 10], 'color': "green"}
                      ]}
            }
          ];
          
          // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', gauge);

        console.log(sample)
    })

}