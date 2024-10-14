    // Orders Bar Chart
    const ordersCtx = document.getElementById('ordersChart').getContext('2d');
    new Chart(ordersCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Orders',
                data: [150, 200, 100, 80, 120, 50, 170],
                backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#6366f1', '#f43f5e', '#22c55e']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Finances Bar Chart
    const financesCtx = document.getElementById('financesChart').getContext('2d');
    new Chart(financesCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                {
                    label: 'Income',
                    data: [50000, 60000, 70000, 80000, 90000],
                    backgroundColor: '#10b981'
                },
                {
                    label: 'Expenses',
                    data: [30000, 40000, 35000, 45000, 60000],
                    backgroundColor: '#ef4444'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Tasks Bar Chart
    const tasksCtx = document.getElementById('tasksChart').getContext('2d');
    new Chart(tasksCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                label: 'Tasks',
                data: [50, 75, 60, 90, 40],
                backgroundColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Requests Pie Chart
    const requestsCtx = document.getElementById('requestsChart').getContext('2d');
    new Chart(requestsCtx, {
        type: 'pie',
        data: {
            labels: ['В обработке', 'Одобрено', 'Отклонено'],
            datasets: [{
                data: [36, 9, 3],
                backgroundColor: ['#3b82f6', '#10b981', '#ef4444']
            }]
        },
        options: {
            responsive: true
        }
    });