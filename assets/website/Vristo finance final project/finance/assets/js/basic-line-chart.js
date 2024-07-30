
// bitcoin-chart
var options = {

    series: [{
        name: "",
        data: [21, 9, 36, 12, 44, 25, 59, 25, 66]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#00ab55'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-bitcoin"), options);
chart.render();


// ethereum-chart
var options = {

    series: [{
        name: "",
        data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#FC3C49'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-ethereum"), options);
chart.render();

// litecoin-chart
var options = {

    series: [{
        name: "",
        data: [9, 36, 12, 66, 25, 44, 25, 59,]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#00ab55'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-litecoin"), options);
chart.render();

// binance-chart
var options = {

    series: [{
        name: "",
        data: [25, 44, 25, 59, 21, 36, 12, 19, 9,]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#FC3C49'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-binance"), options);
chart.render();

// tether-chart

var options = {

    series: [{
        name: "",
        data: [21, 59, 41, 44, 25, 66, 9, 36, 12]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#00ab55'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-tether"), options);
chart.render();

// solana-chart

var options = {

    series: [{
        name: "",
        data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25]
    }],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
        zoom: {
            enabled: false
        }
    },
    markers: {
        size: 0,
    },
    
    colors: ['#FC3C49'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'

    },
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],


};

var chart = new ApexCharts(document.querySelector("#chart-solana"), options);
chart.render();