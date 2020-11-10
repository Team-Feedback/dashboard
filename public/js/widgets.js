// BAR CHART RESIZE OBSERVER
var roBarGraph = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width < 600) {
      entry.target.classList.add("small");
    } else {
      entry.target.classList.remove("small");
    }
  }
});

// COLUMN CHART RESIZE OBSERVER
var roColumnChart = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width < 1200) {
      entry.target.classList.add("small-width");
    } else {
      entry.target.classList.remove("small-width");
    }
  }
});

// COMBO CHART RESIZE OBSERVER
var comboChartItems = document.querySelectorAll(
  "combo-chart-area-graph-set-item"
);
var comboChartLabels = document.querySelectorAll(
  "combo-chart-h-axis-item item-03"
);

var roComboChart = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width > 1200) {
      entry.target.classList.add("size-1200");
    } else if (entry.target.classList.contains("size-1200")) {
      entry.target.classList.remove("size-1200");
    }

    if (cr.width <= 1200 && cr.width > 1100) {
      entry.target.classList.add("size-1100");
    } else if (entry.target.classList.contains("size-1100")) {
      entry.target.classList.remove("size-1100");
    }

    if (cr.width <= 1100 && cr.width > 1000) {
      entry.target.classList.add("size-1000");
    } else if (entry.target.classList.contains("size-1000")) {
      entry.target.classList.remove("size-1000");
    }

    if (cr.width <= 1000 && cr.width > 900) {
      entry.target.classList.add("size-900");
    } else if (entry.target.classList.contains("size-900")) {
      entry.target.classList.remove("size-900");
    }

    if (cr.width <= 900 && cr.width > 800) {
      entry.target.classList.add("size-800");
    } else if (entry.target.classList.contains("size-800")) {
      entry.target.classList.remove("size-800");
    }

    if (cr.width <= 800 && cr.width > 700) {
      entry.target.classList.add("size-700");
    } else if (entry.target.classList.contains("size-700")) {
      entry.target.classList.remove("size-700");
    }

    if (cr.width <= 700 && cr.width > 600) {
      entry.target.classList.add("size-600");
    } else if (entry.target.classList.contains("size-600")) {
      entry.target.classList.remove("size-600");
    }

    if (cr.width <= 600 && cr.width > 500) {
      entry.target.classList.add("size-500");
    } else if (entry.target.classList.contains("size-500")) {
      entry.target.classList.remove("size-500");
    }

    if (cr.width <= 500) {
      entry.target.classList.add("size-400");
    } else if (entry.target.classList.contains("size-400")) {
      entry.target.classList.remove("size-400");
    }
  }
});

// VALUE BOX RESIZE OBSERVER
var roValueBox = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width < 800) {
      entry.target.classList.add("small-width");
    } else {
      entry.target.classList.remove("small-width");
    }

    if (cr.width < 400) {
      entry.target.classList.add("extra-small-width");
    } else {
      entry.target.classList.remove("extra-small-width");
    }
  }
});

// LINE CHART RESIZE OBSERVER
let chart01;
var roLineChart = new ResizeObserver((entries) => {
  //   google.charts.load("current", {
  //     packages: ["corechart"],
  //   });
  //   google.charts.setOnLoadCallback(drawChart);

  //   function drawChart() {
  //     var data = google.visualization.arrayToDataTable([
  //       ["Task", "Hours per Day"],
  //       ["Work", 11],
  //       ["Eat", 2],
  //       ["Commute", 2],
  //       ["Watch TV", 2],
  //       ["Sleep", 7],
  //     ]);

  //     var options = {
  //       backgroundColor: "transparent",
  //       legend: "none",
  //       title: false,
  //       width: "auto",
  //       height: "auto",
  //       chartArea: {
  //         height: "94%",
  //         left: "0",
  //         right: "0",
  //       },
  //     };

  //     var chart02 = new google.visualization.PieChart(
  //       document.getElementById("piechart02")
  //     );

  //     chart02.draw(data, options);
  //   }

  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width >= 1200) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      chart01.data.datasets[0].data = [
        1.5,
        2,
        3,
        3.5,
        3,
        3.8,
        4,
        4.5,
        4.8,
        4.2,
        3.3,
        2.8,
      ];
      chart01.data.datasets[1].data = [
        1.2,
        1.4,
        2,
        3,
        4,
        3.5,
        3.5,
        3.8,
        4,
        4.5,
        4.8,
        4.2,
      ];

      chart01.update();
    } else if (cr.width < 1200 && cr.width > 1100) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
      ];
      chart01.data.datasets[0].data = [
        1.5,
        2,
        3,
        3.5,
        3,
        3.8,
        4,
        4.5,
        4.8,
        4.2,
        3.3,
      ];
      chart01.data.datasets[1].data = [
        1.2,
        1.4,
        2,
        3,
        4,
        3.5,
        3.5,
        3.8,
        4,
        4.5,
        4.8,
      ];
      chart01.update();
    } else if (cr.width < 1100 && cr.width > 1000) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ];
      chart01.data.datasets[0].data = [
        1.5,
        2,
        3,
        3.5,
        3,
        3.8,
        4,
        4.5,
        4.8,
        4.2,
      ];
      chart01.data.datasets[1].data = [
        1.2,
        1.4,
        2,
        3,
        4,
        3.5,
        3.5,
        3.8,
        4,
        4.5,
      ];
      chart01.update();
    } else if (cr.width < 1000 && cr.width > 900) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ];
      chart01.data.datasets[0].data = [
        1.5,
        2,
        3,
        3.5,
        3,
        3.8,
        4,
        4.5,
        4.8,
        4.2,
      ];
      chart01.data.datasets[1].data = [
        1.2,
        1.4,
        2,
        3,
        4,
        3.5,
        3.5,
        3.8,
        4,
        4.5,
      ];
      chart01.update();
    } else if (cr.width < 900 && cr.width > 800) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
      ];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3, 3.8, 4, 4.5, 4.8];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4, 3.5, 3.5, 3.8, 4];
      chart01.update();
    } else if (cr.width < 800 && cr.width > 700) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3, 3.8, 4, 4.5];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4, 3.5, 3.5, 3.8];
      chart01.update();
    } else if (cr.width < 700 && cr.width > 600) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3, 3.8, 4];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4, 3.5, 3.5];
      chart01.update();
    } else if (cr.width < 600 && cr.width > 500) {
      chart01.data.labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
      ];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3, 3.8];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4, 3.5];
      chart01.update();
    } else if (cr.width < 500 && cr.width > 400) {
      chart01.data.labels = ["January", "February", "March", "April", "May"];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4];
      chart01.update();
    }
    if (cr.width < 400) {
      chart01.data.labels = ["Jan", "Feb", "Mar", "Apr", "May"];
      chart01.data.datasets[0].data = [1.5, 2, 3, 3.5, 3];
      chart01.data.datasets[1].data = [1.2, 1.4, 2, 3, 4];

      chart01.options.scales.yAxes[0].ticks.callback = function (
        label,
        index,
        labels
      ) {
        switch (label) {
          case 1:
            return "Bad";
          case 2:
            return "Weak";
          case 3:
            return "Ok";
          case 4:
            return "Good";
          case 5:
            return "Great";
        }
      };
      entry.target.classList.add("small");
      chart01.update();
    } else {
      chart01.options.scales.yAxes[0].ticks.callback = function (
        label,
        index,
        labels
      ) {
        switch (label) {
          case 1:
            return "Bad (1.0)";
          case 2:
            return "Weak (2.0)";
          case 3:
            return "Ok (3.0)";
          case 4:
            return "Good (4.0)";
          case 5:
            return "Great (5.0)";
        }
      };
      entry.target.classList.remove("small");
      chart01.update();
    }
  }
});

//WIDGETS DATA
let barGraphEl = `
<div class="widget-wrapper small split" id="widget-0" style="overflow: hidden;">
        <div class="widget widget-bar-graph">
          <div class="widget-header">
            <p class="widget-header-title">
              Productivity, Attitude and Teamworking
            </p>
            <p class="widget-header-text">
              Longterm development chart based on 64 reviews
            </p>
            <div class="widget-header-icons">
              <i class="icon-expand-outlined"></i>
              <i class="icon-cog-outlined"></i>
            </div>
          </div>
          <div class="widget-body">
            <div class="bar-graph">
              <div class="bar-graph-main">
                <div class="bar-graph-main-data">
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 95%; background-color: #07487f"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Paul Walker</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >12</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 80%; background-color: #818181"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Timothy Dalton</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >14</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 76%; background-color: #559a19"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Abraham Wilson</span
                    >
                    <span class="bar-graph-main-data-item-amount">7</span>
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 50%; background-color: #b5b5b5"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Mr Norvorski</span
                    >
                    <span class="bar-graph-main-data-item-amount">7</span>
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 63%; background-color: #f7ab31"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Andrew McBlown</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >11</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 45%; background-color: #40a7e8"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Lead Meyer</span
                    >
                    <span class="bar-graph-main-data-item-amount">9</span>
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 45%; background-color: #e8ce40"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Alfred Bing</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >13</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 30%; background-color: #818181"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Johan Bond</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >12</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 52%; background-color: #f7ab31"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Andrew McBlown</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >11</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 63%; background-color: #f7ab31"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Andrew McBlown</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >11</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 45%; background-color: #40a7e8"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Lead Meyer</span
                    >
                    <span class="bar-graph-main-data-item-amount">9</span>
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 45%; background-color: #e8ce40"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Alfred Bing</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >13</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 30%; background-color: #818181"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Johan Bond</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >12</span
                    >
                  </div>
                  <div
                    class="bar-graph-main-data-item"
                    style="width: 52%; background-color: #f7ab31"
                  >
                    <span class="bar-graph-main-data-item-label"
                      >Andrew McBlown</span
                    >
                    <span class="bar-graph-main-data-item-amount"
                      >11</span
                    >
                  </div>
                </div>

                <div class="bar-graph-back">
                  <div class="bar-graph-back-x">
                    <div class="bar-graph-back-x-line"></div>
                    <div class="bar-graph-back-x-line"></div>
                    <div class="bar-graph-back-x-line"></div>
                    <div class="bar-graph-back-x-line"></div>
                    <div class="bar-graph-back-x-line"></div>
                  </div>
                </div>

                <div class="bar-graph-x-axis">
                  <p class="bar-graph-x-axis-item">Bad (1.0)</p>
                  <p class="bar-graph-x-axis-item">Weak (2.0)</p>
                  <p class="bar-graph-x-axis-item">Ok (3.0)</p>
                  <p class="bar-graph-x-axis-item">Good (4.0)</p>
                  <p class="bar-graph-x-axis-item">Great (5.0)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

let lineGraphEl = `
<div
        class="widget-wrapper small widget-wrapper-line-chart split"
        id="widget-1"
      >
        <div class="widget">
          <div class="widget-header">
            <p class="widget-header-title">
              Atmosphere in team and how work is organised
            </p>
            <p class="widget-header-text">
              Longterm development chart based on 64 reviews
            </p>
            <div class="widget-header-icons">
              <i class="icon-expand-outlined"></i>
              <i class="icon-cog-outlined"></i>
            </div>
          </div>
          <div class="widget-body">
            <div class="line-chart-wrapper">
              <div class="line-chart">
                <canvas class="line-chart-canvas" id="chart-01"></canvas>
              </div>
              <div class="chart-legend">
                <p class="chart-legend-text">Click <button>here</button> or hower lines to see legend</p>
                <div class="chart-legend-content">
                <div class="chart-legend-item">
                <span
                  class="chart-legend-item-color"
                  style="background-color: #07487f"
                ></span>
                <span class="chart-legend-item-name">Attitude</span>
              </div>

              <div class="chart-legend-item">
                <span
                  class="chart-legend-item-color"
                  style="background-color: #559a19"
                ></span>
                <span class="chart-legend-item-name">Productivity</span>
              </div>

              <div class="chart-legend-item">
                <span
                  class="chart-legend-item-color"
                  style="background-color: #f7dd31"
                ></span>
                <span class="chart-legend-item-name">Teamworking</span>
              </div>

              <div class="chart-legend-item">
                <span
                  class="chart-legend-item-color"
                  style="background-color: #ea2725"
                ></span>
                <span class="chart-legend-item-name">Average</span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`;

let pieGraphEl = `
<div class="widget-wrapper small widget-wrapper-pie-chart split" id="widget-2">
          <div class="widget widget-line-chart">
              <div class="widget-header">
                  <p class="widget-header-title">Atmosphere in team and how work is organised</p>
                  <p class="widget-header-text">Longterm development chart based on 64 reviews</p>
                  <div class="widget-header-icons">
                      <i class="icon-expand-outlined"></i>
                      <i class="icon-cog-outlined"></i>
                  </div>
              </div>

              <div class="widget-body">
                  <div class="pie-chart-wrapper">
                      <div class="pie-chart" style="width:auto; height: 100%;">
                          <div id="piechart02" style="width:auto; height: 100%;"></div>
                      </div>
                      <div class="chart-legend">
                      <p class="chart-legend-text">Click <button>here</button> or hower lines to see legend</p>
                          <div class="chart-legend-content">
                          <div class="chart-legend-item">
                          <span class="chart-legend-item-color"
                              style="background-color: #07487F;"></span>
                          <span class="chart-legend-item-name">Attitude</span>
                      </div>

                      <div class="chart-legend-item">
                          <span class="chart-legend-item-color"
                              style="background-color: #559A19;"></span>
                          <span class="chart-legend-item-name">Productivity</span>
                      </div>

                      <div class="chart-legend-item">
                          <span class="chart-legend-item-color"
                              style="background-color: #F7DD31;"></span>
                          <span class="chart-legend-item-name">Teamworking</span>
                      </div>

                      <div class="chart-legend-item">
                          <span class="chart-legend-item-color"
                              style="background-color: #EA2725;"></span>
                          <span class="chart-legend-item-name">Average</span>
                      </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
`;

let columnChartEl = `
<div class="widget-wrapper small widget-wrapper-column-chart split" id="widget-3">
          <div class="widget widget-line-chart">
              <div class="widget-header">
                  <p class="widget-header-title">Atmosphere in team and how work is organised</p>
                  <p class="widget-header-text">Longterm development chart based on 64 reviews</p>
                  <div class="widget-header-icons">
                      <i class="icon-expand-outlined"></i>
                      <i class="icon-cog-outlined"></i>
                  </div>
              </div>

              <div class="widget-body">
                  <div class="chart-column">
                      <div class="chart-column-area">
                          <div class="chart-column-area-graph">
                              <div class="chart-column-area-graph-item"
                                  style="height: 80%; background-color: #07487f;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                              <div class="chart-column-area-graph-item"
                                  style="height: 72%; background-color: #818181;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                              <div class="chart-column-area-graph-item"
                                  style="height: 65%; background-color: #559a19;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                              <div class="chart-column-area-graph-item"
                                  style="height: 50%; background-color: #b5b5b5;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                              <div class="chart-column-area-graph-item"
                                  style="height: 60%; background-color: #f7ab31;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                              <div class="chart-column-area-graph-item"
                                  style="height: 45%; background-color: #818181;">
                                  <div class="p chart-column-area-graph-item-text">18</div>
                              </div>
                          </div>
                          <div class="chart-column-area-back">
                              <div class="chart-column-area-back-h">
                                  <div class="chart-column-area-back-h-line"></div>
                                  <div class="chart-column-area-back-h-line"></div>
                                  <div class="chart-column-area-back-h-line"></div>
                                  <div class="chart-column-area-back-h-line"></div>
                                  <div class="chart-column-area-back-h-line"></div>
                              </div>
                              <div class="chart-column-area-back-v">
                                  <div class="chart-column-area-back-v-line"></div>
                                  <div class="chart-column-area-back-v-line"></div>
                                  <div class="chart-column-area-back-v-line"></div>
                                  <div class="chart-column-area-back-v-line"></div>
                                  <div class="chart-column-area-back-v-line"></div>
                              </div>
                          </div>
                      </div>
                      <div class="chart-column-v-axis">
                          <div class="chart-column-v-axis-item item-01">
                              <p class="chart-column-v-axis-item-label">Great (5.0)</p>
                              <span class="chart-column-v-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-v-axis-item item-02">
                              <p class="chart-column-v-axis-item-label">Good (4.0)</p>
                              <span class="chart-column-v-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-v-axis-item item-03">
                              <p class="chart-column-v-axis-item-label">Ok (3.0)</p>
                              <span class="chart-column-v-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-v-axis-item item-04">
                              <p class="chart-column-v-axis-item-label">Weak (2.0)</p>
                              <span class="chart-column-v-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-v-axis-item item-05">
                              <p class="chart-column-v-axis-item-label">Bad (1.0)</p>
                              <span class="chart-column-v-axis-item-tick"></span>
                          </div>
                      </div>

                      <div class="chart-column-h-axis">
                          <div class="chart-column-h-axis-item item-01">
                              <p class="chart-column-h-axis-item-label">Attitude</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-h-axis-item item-02">
                              <p class="chart-column-h-axis-item-label">Productivity</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-h-axis-item item-03">
                              <p class="chart-column-h-axis-item-label">Teamworking</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-h-axis-item item-04">
                              <p class="chart-column-h-axis-item-label">How do people feel</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-h-axis-item item-05">
                              <p class="chart-column-h-axis-item-label">How work is organized</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                          <div class="chart-column-h-axis-item item-06">
                              <p class="chart-column-h-axis-item-label">Team lead</p>
                              <span class="chart-column-h-axis-item-tick"></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
`;

let valueBoxEl = `
<div class="widget-wrapper small widget-wrapper-value-box split" id="widget-4">
          <div class="widget">
              <div class="widget-header">
                  <p class="widget-header-title">This is our value box widget to show few values in the cleanest way</p>
                  <div class="widget-header-options">
                      <button class="widget-header-options-link active">Last month</button>
                      <span class="widget-header-options-divider">I</span>
                      <button class="widget-header-options-link">The month before</button>
                      <span class="widget-header-options-divider">I</span>
                      <button class="widget-header-options-link">Total of last three months</button>
                  </div>
                  <div class="widget-header-icons">
                      <i class="icon-expand-outlined"></i>
                      <i class="icon-cog-outlined"></i>
                  </div>
              </div>

              <div class="widget-body">
                  <div class="value-box">
                      <div class="value-box-item">
                          <p class="value-box-item-title">254
                              <svg class="value-box-item-title-arrow good"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                          </p>
                          <p class="value-box-item-info">+24%</p>
                          <p class="value-box-item-name">Peer to peer</p>
                      </div>

                      <div class="value-box-item">
                          <p class="value-box-item-title">28
                              <svg class="value-box-item-title-arrow bad"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                          </p>
                          <p class="value-box-item-info">-16%</p>
                          <p class="value-box-item-name">Team feedback</p>
                      </div>

                      <div class="value-box-item">
                          <p class="value-box-item-title">25
                              <svg class="value-box-item-title-arrow bad"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                          </p>
                          <p class="value-box-item-info">-12%</p>
                          <p class="value-box-item-name">Team lead feedbacks</p>
                      </div>

                      <div class="value-box-item">
                          <p class="value-box-item-title">19
                              <svg class="value-box-item-title-arrow good"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                              
                          </p>
                          <p class="value-box-item-info">17%</p>
                          <p class="value-box-item-name">Self evaluation</p>
                      </div>

                      <div class="value-box-item">
                          <p class="value-box-item-title">221
                              <svg class="value-box-item-title-arrow good"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                          </p>
                          <p class="value-box-item-info">+ 20%</p>
                          <p class="value-box-item-name">Team lead feedbacks</p>
                      </div>

                      <div class="value-box-item">
                          <p class="value-box-item-title">221
                              <svg class="value-box-item-title-arrow bad"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15.394">
                                  <path
                                      d="M1.4,11.1l-.763-.763a.821.821,0,0,1,0-1.165L7.315,2.489a.821.821,0,0,1,1.165,0l6.676,6.676a.821.821,0,0,1,0,1.165l-.763.763a.825.825,0,0,1-1.178-.014L9.273,6.941v9.874a.823.823,0,0,1-.825.825h-1.1a.823.823,0,0,1-.825-.825V6.941l-3.944,4.14A.82.82,0,0,1,1.4,11.1Z"
                                      transform="translate(-0.397 -2.246)" /></svg>
                          </p>
                          <p class="value-box-item-info">+ 20%</p>
                          <p class="value-box-item-name">Self evaluation</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
`;

let comboGraphEl = `
<div class="widget-wrapper small widget-wrapper-combo-chart split" id="widget-5">
          <div class="widget widget-line-chart">
              <div class="widget-header">
                  <p class="widget-header-title">Atmosphere in team and how work is organised</p>
                  <p class="widget-header-text">Longterm development chart based on 64 reviews</p>
                  <div class="widget-header-icons">
                      <i class="icon-expand-outlined"></i>
                      <i class="icon-cog-outlined"></i>
                  </div>
              </div>

              <div class="widget-body">
                  <div class="combo-chart">
                      <div class="combo-chart-area">
                          <div class="combo-chart-area-graph">
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                              <div class="combo-chart-area-graph-set">
                                  <div class="combo-chart-area-graph-set-item" style="height: 70%; background-color: #07487f;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 90%; background-color: #559a19;"></div>
                                  <div class="combo-chart-area-graph-set-item" style="height: 80%; background-color: #f7d131;"></div>
                              </div>
                          </div>
                          <div class="combo-chart-area-back">
                              <div class="combo-chart-area-back-h">
                                  <div class="combo-chart-area-back-h-line"></div>
                                  <div class="combo-chart-area-back-h-line"></div>
                                  <div class="combo-chart-area-back-h-line"></div>
                                  <div class="combo-chart-area-back-h-line"></div>
                                  <div class="combo-chart-area-back-h-line"></div>
                              </div>
                              <div class="combo-chart-area-back-v">
                                  <div class="combo-chart-area-back-v-line"></div>
                                  <div class="combo-chart-area-back-v-line"></div>
                                  <div class="combo-chart-area-back-v-line"></div>
                                  <div class="combo-chart-area-back-v-line"></div>
                                  <div class="combo-chart-area-back-v-line"></div>
                              </div>
                          </div>
                      </div>
                      <div class="combo-chart-v-axis">
                          <div class="combo-chart-v-axis-item item-01">
                              <p class="combo-chart-v-axis-item-label">Great (5.0)</p>
                              <span class="combo-chart-v-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-v-axis-item item-02">
                              <p class="combo-chart-v-axis-item-label">Good (4.0)</p>
                              <span class="combo-chart-v-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-v-axis-item item-03">
                              <p class="combo-chart-v-axis-item-label">Ok (3.0)</p>
                              <span class="combo-chart-v-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-v-axis-item item-04">
                              <p class="combo-chart-v-axis-item-label">Weak (2.0)</p>
                              <span class="combo-chart-v-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-v-axis-item item-05">
                              <p class="combo-chart-v-axis-item-label">Bad (1.0)</p>
                              <span class="combo-chart-v-axis-item-tick"></span>
                          </div>
                      </div>

                      <div class="combo-chart-h-axis">
                          <div class="combo-chart-h-axis-item item-01">
                              <p class="combo-chart-h-axis-item-label">January</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-02">
                              <p class="combo-chart-h-axis-item-label">February</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-03">
                              <p class="combo-chart-h-axis-item-label">March</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-04">
                              <p class="combo-chart-h-axis-item-label">April</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-05">
                              <p class="combo-chart-h-axis-item-label">May</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-06">
                              <p class="combo-chart-h-axis-item-label">June</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-07">
                              <p class="combo-chart-h-axis-item-label">July</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-08">
                              <p class="combo-chart-h-axis-item-label">August</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-09">
                              <p class="combo-chart-h-axis-item-label">September</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-10">
                              <p class="combo-chart-h-axis-item-label">October</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-11">
                              <p class="combo-chart-h-axis-item-label">November</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                          <div class="combo-chart-h-axis-item item-12">
                              <p class="combo-chart-h-axis-item-label">December</p>
                              <span class="combo-chart-h-axis-item-tick"></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
`;

//SCREEN SIZE FUNCTIONS BIG & MEDIUM & SMALL
let widgetsArr = [
  barGraphEl,
  lineGraphEl,
  pieGraphEl,
  columnChartEl,
  valueBoxEl,
  comboGraphEl,
];
let widgetsNewContent = document.querySelector("#widgets-new .content");

let widgetsBig = function (index) {
  widgetsNewContent.innerHTML = "";
  widgetsArr.forEach((e, i, arr) => {
    if ((i + 1) % 3 === 0 && i !== 0) {
      let prevIndex = index;
      index = i;
      let currWidgets = arr.slice(prevIndex + 1, index + 1);

      widgetsNewContent.innerHTML += `
          <div class="flex">
            ${currWidgets.join("")}
          </div>
        `;
      //
      setTimeout(function () {
        Split([`#widget-${i - 2}`, `#widget-${i - 1}`, `#widget-${i}`], {
          elementStyle: (dimension, size, gutterSize) => ({
            "flex-basis": `calc(${size}% - ${gutterSize}px)`,
          }),
          gutterStyle: (dimension, gutterSize) => ({
            "flex-basis": `${gutterSize}px`,
          }),
        });

        //drawLineChart();
      }, 200);
    }
  });

  drawLineChart();
};

let widgetsMedium = function (index) {
  widgetsNewContent.innerHTML = "";
  widgetsArr.forEach((e, i, arr) => {
    if ((i + 1) % 2 === 0 && i !== 0) {
      let prevIndex = index;
      index = i;
      let currWidgets = arr.slice(prevIndex + 1, index + 1);

      widgetsNewContent.innerHTML += `
          <div class="flex">
            ${currWidgets.join("")}
          </div>
        `;
      //
      setTimeout(function () {
        Split([`#widget-${i - 1}`, `#widget-${i}`], {
          elementStyle: (dimension, size, gutterSize) => ({
            "flex-basis": `calc(${size}% - ${gutterSize}px)`,
          }),
          gutterStyle: (dimension, gutterSize) => ({
            "flex-basis": `${gutterSize}px`,
          }),
        });
      }, 200);
    }
  });

  drawLineChart();
};

let widgetsSmall = function (index) {
  widgetsNewContent.innerHTML = "";
  widgetsArr.forEach((e, i, arr) => {
    widgetsNewContent.innerHTML += `
          <div class="flex">
            ${e}
          </div>
        `;
    //
    setTimeout(function () {
      Split([`#widget-${i}`], {
        elementStyle: (dimension, size, gutterSize) => ({
          "flex-basis": `calc(${size}% - ${gutterSize}px)`,
        }),
        gutterStyle: (dimension, gutterSize) => ({
          "flex-basis": `${gutterSize}px`,
        }),
      });
    }, 200);
  });

  drawLineChart();
};

//NUMBER OF WIDGETS PER ROW & NUMBER OF ROWS
function checkWidgets() {
  let large;
  let index;
  if (window.innerWidth >= 1500) {
    widgetsBig(index);
    widgetsBig = function () {};

    //Reset MEDIUM function
    widgetsMedium = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        if ((i + 1) % 2 === 0 && i !== 0) {
          let prevIndex = index;
          index = i;
          let currWidgets = arr.slice(prevIndex + 1, index + 1);

          widgetsNewContent.innerHTML += `
                <div class="flex">
                  ${currWidgets.join("")}
                </div>
              `;
          //
          setTimeout(function () {
            Split([`#widget-${i - 1}`, `#widget-${i}`], {
              elementStyle: (dimension, size, gutterSize) => ({
                "flex-basis": `calc(${size}% - ${gutterSize}px)`,
              }),
              gutterStyle: (dimension, gutterSize) => ({
                "flex-basis": `${gutterSize}px`,
              }),
            });
          }, 200);
        }
      });

      drawLineChart();
    };

    //Reset SMALL function
    widgetsSmall = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        widgetsNewContent.innerHTML += `
              <div class="flex">
                ${e}
              </div>
            `;
        //
        setTimeout(function () {
          Split([`#widget-${i}`], {
            elementStyle: (dimension, size, gutterSize) => ({
              "flex-basis": `calc(${size}% - ${gutterSize}px)`,
            }),
            gutterStyle: (dimension, gutterSize) => ({
              "flex-basis": `${gutterSize}px`,
            }),
          });
        }, 200);
      });

      drawLineChart();
    };
  } else if (window.innerWidth >= 900 && window.innerWidth < 1500) {
    widgetsMedium(index);
    widgetsMedium = function () {};

    //Reset BIG function
    widgetsBig = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        if ((i + 1) % 3 === 0 && i !== 0) {
          let prevIndex = index;
          index = i;
          let currWidgets = arr.slice(prevIndex + 1, index + 1);

          widgetsNewContent.innerHTML += `
              <div class="flex">
                ${currWidgets.join("")}
              </div>
            `;
          //
          setTimeout(function () {
            Split([`#widget-${i - 2}`, `#widget-${i - 1}`, `#widget-${i}`], {
              elementStyle: (dimension, size, gutterSize) => ({
                "flex-basis": `calc(${size}% - ${gutterSize}px)`,
              }),
              gutterStyle: (dimension, gutterSize) => ({
                "flex-basis": `${gutterSize}px`,
              }),
            });
          }, 200);
        }
      });

      drawLineChart();
    };

    //Reset SMALL function
    widgetsSmall = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        widgetsNewContent.innerHTML += `
              <div class="flex">
                ${e}
              </div>
            `;
        //
        setTimeout(function () {
          Split([`#widget-${i}`], {
            elementStyle: (dimension, size, gutterSize) => ({
              "flex-basis": `calc(${size}% - ${gutterSize}px)`,
            }),
            gutterStyle: (dimension, gutterSize) => ({
              "flex-basis": `${gutterSize}px`,
            }),
          });
        }, 200);
      });

      drawLineChart();
    };
  } else {
    widgetsSmall(index);
    widgetsSmall = function () {};

    //Reset BIG function
    widgetsBig = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        if ((i + 1) % 3 === 0 && i !== 0) {
          let prevIndex = index;
          index = i;
          let currWidgets = arr.slice(prevIndex + 1, index + 1);

          widgetsNewContent.innerHTML += `
              <div class="flex">
                ${currWidgets.join("")}
              </div>
            `;
          //
          setTimeout(function () {
            Split([`#widget-${i - 2}`, `#widget-${i - 1}`, `#widget-${i}`], {
              elementStyle: (dimension, size, gutterSize) => ({
                "flex-basis": `calc(${size}% - ${gutterSize}px)`,
              }),
              gutterStyle: (dimension, gutterSize) => ({
                "flex-basis": `${gutterSize}px`,
              }),
            });
          }, 200);
        }
      });

      drawLineChart();
    };

    //Reset MEDIUM function
    widgetsMedium = function (index) {
      widgetsNewContent.innerHTML = "";
      widgetsArr.forEach((e, i, arr) => {
        if ((i + 1) % 2 === 0 && i !== 0) {
          let prevIndex = index;
          index = i;
          let currWidgets = arr.slice(prevIndex + 1, index + 1);

          widgetsNewContent.innerHTML += `
                <div class="flex">
                  ${currWidgets.join("")}
                </div>
              `;
          //
          setTimeout(function () {
            Split([`#widget-${i - 1}`, `#widget-${i}`], {
              elementStyle: (dimension, size, gutterSize) => ({
                "flex-basis": `calc(${size}% - ${gutterSize}px)`,
              }),
              gutterStyle: (dimension, gutterSize) => ({
                "flex-basis": `${gutterSize}px`,
              }),
            });
          }, 200);
        }
      });

      drawLineChart();
    };
  }

  var barGraph = document.querySelector(".widget-bar-graph");
  var lineChart = document.querySelector(".widget-wrapper-line-chart");
  var columnChart = document.querySelector(".widget-wrapper-column-chart");
  var valueBox = document.querySelector(".widget-wrapper-value-box");
  var comboChart = document.querySelector(".widget-wrapper-combo-chart");

  roBarGraph.observe(barGraph);
  roLineChart.observe(lineChart);
  roColumnChart.observe(columnChart);
  roValueBox.observe(valueBox);
  roComboChart.observe(comboChart);
}

//DRAW LINE CHART
function drawLineChart() {
  console.log("DRAW LINE CHART!!!");
  google.charts.load("current", {
    packages: ["corechart"],
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ]);

    var options = {
      backgroundColor: "transparent",
      legend: "none",
      title: false,
      width: "auto",
      height: "auto",
      chartArea: {
        height: "94%",
        left: "0",
        right: "0",
      },
    };

    var chart02 = new google.visualization.PieChart(
      document.getElementById("piechart02")
    );

    chart02.draw(data, options);
  }

  var ctx01 = document.getElementById("chart-01").getContext("2d");

  chart01 = new Chart(ctx01, {
    type: "line",
    data: {
      datasets: [
        {
          // showLine: false,
          label: "Attitude",
          data: [1.5, 2, 3, 3.5, 3, 3.8, 4],
          fill: false,
          borderColor: "#FF7F00",
          pointRadius: 0,
        },
        {
          label: "Teamworking",
          data: [1.2, 1.4, 2, 3, 4, 3.5, 3.5],
          fill: false,
          borderColor: "#1DA0F2",
          pointRadius: 0,
        },
      ],
      labels: ["TEST", "TEST", "TEST", "TEST", "TEST", "TEST", "TEST"],
      // labels: [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      // ],
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
              fontColor: "#16222f",
              fontFamily: '"Inter", sans-serif',
              fontSize: 12,
              fontStyle: "400",
              beginAtZero: false,
              padding: 8.6,
              max: 5,
              min: 1,
              stepSize: 1,
              callback: function (label, index, labels) {
                switch (label) {
                  case 1:
                    return "Bad (1.0)";
                  case 2:
                    return "Weak (2.0)";
                  case 3:
                    return "Ok (3.0)";
                  case 4:
                    return "Good (4.0)";
                  case 5:
                    return "Great (5.0)";
                }
              },
            },
            gridLines: {
              display: true,
              drawTicks: true,
              drawOnChartArea: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              maxRotation: 0,
              fontColor: "#16222f",
              fontFamily: '"Inter", sans-serif',
              fontSize: 12,
              fontStyle: "300",
              beginAtZero: false,
              padding: 4.5,
            },
            gridLines: {
              display: true,
              drawTicks: true,
              drawOnChartArea: false,
            },
          },
        ],
      },
    },
  });
}

checkWidgets();

window.addEventListener("resize", checkWidgets);

//ROW HEIGHT TEST
// setTimeout(function(){

// }, 1000)
let minusHeight = document.querySelector(".plus-minus .icon-minus-outlined");
let plusHeight = document.querySelector(".plus-minus .icon-plus-outlined");
let widgetsParent = document.querySelector(".content");

minusHeight.addEventListener("click", function () {
  widgetsParent.classList.add("small");
  widgetsParent.classList.remove("big");
  drawLineChart();
});

plusHeight.addEventListener("click", function () {
  widgetsParent.classList.remove("small");
  widgetsParent.classList.add("big");
  drawLineChart();
});
