// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Nilai Indeks'],
        ['IKL', 8],
        ['IKS', 2],
        ['IKE', 4]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Indeks Desa Mandiri', 'width': 600, 'height': 400, };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}