// SELECT ALL CHARTS
let lineCharts = document.querySelectorAll('.widget-line-chart');

let allLineCharts = [...lineCharts];

// REUSABLE RESIZE OBSERVER
var ro = new ResizeObserver(entries => {
    for (let entry of entries) {
        const crWidth = entry.borderBoxSize[0].inlineSize;
        const crHeight = entry.borderBoxSize[0].blockSize;

        const widgetHeader = entry.target.children[0];
        const widgetBody = entry.target.children[1];
        const widgetLegend = entry.target.children[2];
        const widgetLegendItems = widgetLegend.children[1].children;

        const widgetHeaderBP = crHeight * .071;
        let widgetLegendItemsWidth = 0;


        //Update sizes
        widgetHeader.style.paddingBottom = `${widgetHeaderBP}px`;
        widgetBody.style.maxHeight = `calc(100% - ${widgetHeader.clientHeight + widgetLegend.clientHeight}px)`;

        //Legend size check
        //console.log(widgetLegendItems)
        [...widgetLegendItems].forEach(e => {
            widgetLegendItemsWidth += e.clientWidth + 38;
        })

        if (widgetLegend.clientWidth * 2 - 28 <= widgetLegendItemsWidth) {
            console.log('TRUE', widgetLegend.clientWidth * 2 - 28 <= widgetLegendItemsWidth, "ITEMS WIDTH", widgetLegendItemsWidth)
            widgetLegend.classList.add('small');
        } else {
            console.log('FALSE', widgetLegend.clientWidth * 2 - 28 <= widgetLegendItemsWidth, "ITEMS WIDTH", widgetLegendItemsWidth)
            widgetLegend.classList.remove('small');
        }

        //console.log('ITEMS', widgetLegendItemsWidth, 'PARENT', widgetLegend.clientWidth * 2)
    }
});

allLineCharts.forEach(e => {
    ro.observe(e);
});

// let allLegends = document.querySelectorAll('.chart-legend');

// var ro02 = new ResizeObserver(entries => {
//     for (let entry of entries) {
//         if (entry.target.clientWidth < entry.target.firstElementChild.clientWidth + 20) {
//             entry.target.classList.add('small');
//         } else {
//             entry.target.classList.remove('small');
//         }
//     }
// })

// allLegends.forEach(e => {
//     ro02.observe(e);
// });


//LINE CHART
var ctx01 = document.getElementById("chart-01").getContext("2d");

let chart01 = new Chart(ctx01, {
    type: "line",
    data: {
        datasets: [
            {
                label: "Attitude",
                data: [null, 3, 3.4, 3.5, 3.4, 3.5, 4, 3, 3.4, 3.5, 3.4, 3.5, 4, null],
                fill: false,
                borderWidth: 1.5,
                borderColor: "#137ff6",
                pointRadius: 4.5,
                pointBackgroundColor: "#ffffff",
                pointBorderColor: '#137ff6',
                pointBorderWidth: 1.5,
            },
        ],
        labels: [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            ""
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: "right",
            align: "center",

            labels: {
                padding: 30,
            },
        },
        legendCallback: function (chart) {
            return chart.data.datasets
                .map((e, i, arr) => {
                    return `
            <div class="chart-label chart-label-${i}">

                <div class="pretty p-svg p-curve">
                    <input type="checkbox" name="${e.label}-${i}" id="${e.label}-${i}"/>
                    <div class="state p-primary">
                        <!-- svg path -->
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>&nbsp;</label>
                    </div>
                </div>

                <label class="chart-label-label" for="${e.label}-${i}">${e.label}</label>
                <span style="background-color: ${e.borderColor}"></span>
            </div>`;
                })
                .join("");
        },
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                display: false,
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "#505050",
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 10,
                        fontStyle: "400",
                        beginAtZero: true,
                        padding: 8.6,
                        max: 5,
                        min: 1,
                        stepSize: 1,
                    },
                    gridLines: {
                        color: "#f5f6f8",
                        lineWidth: 1.5,
                        display: true,
                        drawTicks: false,
                        drawOnChartArea: true,
                        drawBorder: false
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        maxRotation: 0,
                        fontColor: "#505050",
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 10.5,
                        fontStyle: "400",
                        beginAtZero: false,
                        padding: 10,
                    },
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        drawOnChartArea: false,
                        drawBorder: false
                    },
                },
            ],
        },
    },
});
