! function(a) {
    "use strict";
    var e = function() {};
    e.prototype.createStackedChart = function(a, e, r, t, o, c) {
        Morris.Bar({
            element: a,
            data: e,
            xkey: r,
            ykeys: t,
            stacked: !0,
            labels: o,
            hideHover: "auto",
            barSizeRatio: .4,
            resize: !0,
            gridLineColor: "rgba(108, 120, 151, 0.1)",
            barColors: c
        })
    }, e.prototype.createDonutChart = function(a, e, r) {
        Morris.Donut({
            element: a,
            data: e,
            resize: !0,
            colors: r
        })
    }, e.prototype.init = function() {
        this.createStackedChart("morris-bar-stacked", [{
            y: "IT",
            a: 19,
            b: 20,
            c: 22
            // if there is more than 3 ages category add d and so on. if you add there smth, add below also
        }, {
            y: "Accounting",
            a: 75,
            b: 65,
            c: 80
        }, {
            y: "Marketing",    // bu hisseleri sade yolla bele izah edim ki, eger kateqoriyalar ve s artsa ozunden letter ve ya basqa bir sey teyin et asagida sonra ona value kimi otur 
            a: 12,
            b: 13,
            c: 15,
        }, {
            y: "HR",
            a: 75,
            b: 65,
            c: 89
        }, {
            y: "Business Development",
            a: 100,
            b: 90,
            c: 120
        }, {
            y: "Sales",
            a: 100,
            b: 90,
            c: 120
        }, {
            y: "Consultancy",
            a: 100,
            b: 90,
            c: 120
        }], "y", ["a", "b", "c"], ["19 age", "20 age", "21 age"], ["#3db9dc", "#1bb99a", "#ebeff2"]); // if it is needed ad extra letters, like "d" "f" "g" etc. also add orders, then add colors
        this.createDonutChart("morris-donut-example", [{  
            label: "IT",
            value: 12     // just change the values according their labels. check the votes which Alim sent
        }, {
            label: "Accounting",
            value: 20
        }, {
            label: "Marketing",
            value: 15
        }, {
            label: "HR",
            value: 0
        }, {
            label: "Business Development",
            value: 10
        }, {
            label: "Sales",
            value: 6
        }, {
            label: "Consultancy",
            value: 3
        }
    ], ["#3db9dc", "#1bb99a", "#b5835a", "#ff7aa3", "#f1b53d", "#9261c6", "#d9dd81"])
    }, a.Dashboard = new e, a.Dashboard.Constructor = e
}(window.jQuery),
function(a) {
    "use strict";
    window.jQuery.Dashboard.init()
}();