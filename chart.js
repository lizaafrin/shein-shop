const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'May', 'Jun'],
        datasets: [{
            label: 'Earnings',
            data: [8, 11, 14, 6.6, 13, 9, 12, 7, 13, 7, 10, 6.5, 13, 6.5, 13, 8 ,13, 6.5],
            borderWidth: 1,
            barThickness: 12,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                // stacked: true,
            }
        }
    }
});