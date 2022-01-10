/* Based on the materials of w3school.com */

Chart.defaults.global.defaultFontColor = "#fff";


var ctx = document.getElementById('analyticsData').getContext('2d');
var array1 = [10, 15, 10, 10, 10, 10, 10];
var months = []
for (let i = 0; i < array1.length; i++) {
  months.push(moment().month(i+1).date(0).startOf('month'))
}
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [{
        pointRadius: '1',
        borderColor: '#F26D21',
        data: [0, 1, 4, 6, 8, 12, 20],
    }],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month'
        },
      }],
      yAxes: [{

        ticks: {
            min: 0,
            callback: function(value) {
                return value + "k"
            }
        },
        scaleLabel: {
            display: true
            //labelString: "Percentage"
        }
        
      }],
    },
    legend: {
        display: false
     },
     tooltips: {
        enabled: false
     },
  }
});
