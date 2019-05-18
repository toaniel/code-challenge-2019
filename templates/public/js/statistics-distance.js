/**
 * Fetches the statistics for distance and appends to the page.
 *
 * ****************************
 * Please change 'json/statistics-distance.json'
 * with your service endpoint below
 * ****************************
 */
fetch('http://localhost:3002/distances')
  .then(response => response.json())
  .then(statistics => {
    let labels = statistics.map(statistic => statistic.date);
    let data = statistics.map(statistic => statistic.distance);
    plotDistanceGraph(labels, data);
  });

/**
 * Find the graph canvas and display it with the labels (date) and data (distance)
 * @param labels
 * @param data
 */
function plotDistanceGraph(labels, data) {
  let ctx = document.getElementById('graph').getContext('2d');
  let chartDistance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Distance',
        data: data,
        fill: false
      }]
    },
    options: {
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Day'
          },
          type: 'time',
          time: {
            tooltipFormat: 'll HH:mm',
            unit: 'day',
            unitStepSize: 1,
            displayFormats: {
              'day': 'MM/DD/YYYY'
            }
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Distance [m]'
          }
        }]
      }
    }
  });
}
