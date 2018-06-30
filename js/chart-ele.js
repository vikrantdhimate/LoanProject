function getTotal() {
    for (var t = 0, e = 0; e < myData.length; e++) t += "number" == typeof myData[e] ? myData[e] : 0;
    return t
}

function plotData(t, e) {
    myData = t, myLabel = e;
    var a, l, o = 0,
        n = getTotal();
    a = document.getElementById("canvas");
    var r = a.width / 2,
        i = a.height / 2,
        s = 150;
    l = a.getContext("2d"), l.clearRect(0, 0, a.width, a.height), l.shadowBlur = 20, l.shadowColor = "black";
    for (var d = 0; d < myData.length; d++) {
        l.fillStyle = myColor[d], l.beginPath(), l.moveTo(r, i), l.arc(r, i, s, o, o + 2 * Math.PI * (myData[d] / n), !1), l.lineTo(r, i), l.fill(), l.beginPath();
        var u = [],
            m = [],
            c = 0,
            h = 0;
        myData[d] / n * 100;
        u = getPoint(r, i, s - 20, o + 2 * Math.PI * (myData[d] / n) / 2), m = getPoint(r, i, s + 20, o + 2 * Math.PI * (myData[d] / n) / 2), u[0] <= r ? (c = -1, h = -110) : (c = 1, h = 10), l.moveTo(u[0], u[1]), l.lineTo(m[0], m[1]), l.lineTo(m[0] + 120 * c, m[1]), l.strokeStyle = "#bdc3c7", l.lineWidth = 2, l.stroke(), drawTextBG(l, myLabel[d], "12px Arial", m[0] + h, m[1] - 4), o += 2 * Math.PI * (myData[d] / n)
    }
}

function drawTextBG(t, e, a, l, o) {
    t.save(), t.font = a, t.fillStyle = "#000", t.fillText(e, l, o), t.restore()
}

function getPoint(t, e, a, l) {
    return [t + Math.cos(l) * a, e + Math.sin(l) * a]
}

function calculateEMI() {
    var loanAmount = $("#storlek_testet").val(),
        numberOfMonths = $("#storlek_testet2").val(),
        rateOfInterest = $("#storlek_testet3").val();
    "" == loanAmount && "" == numberOfMonths && "" == rateOfInterest && (loanAmount = 5e5, numberOfMonths = 36, rateOfInterest = 10.2), "" == loanAmount ? loanAmount = 5e5 : "" == numberOfMonths ? numberOfMonths = 36 : "" == rateOfInterest && (rateOfInterest = 10.2);
    for (var monthlyInterestRatio = rateOfInterest / 100 / 12, top = Math.pow(1 + monthlyInterestRatio, numberOfMonths), bottom = top - 1, sp = top / bottom, emi = loanAmount * monthlyInterestRatio * sp, full = numberOfMonths * emi, interest = full - loanAmount, int_pge = interest / full * 100, emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","), loanAmount_str = loanAmount.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","), full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","), int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ","), detailDesc = "", bb = parseInt(loanAmount), int_dd = 0, pre_dd = 0, end_dd = 0, j = 1; numberOfMonths >= j; j++) int_dd = bb * (rateOfInterest / 100 / 12), pre_dd = emi.toFixed(2) - int_dd.toFixed(2), end_dd = bb - pre_dd.toFixed(2), detailDesc += '{"emi":' + j + ', "Amount":' + emi.toFixed(2) + ',"Balance":' + end_dd.toFixed(2) + "}, ", bb -= pre_dd.toFixed(2);
    var canvas = '<div id="piechart" style="background-color: rgb(241, 245, 101);margin-left: -15px;width:564px; height:488px;"></div>';
    $("#appendCanvas").html(canvas);
    for (var data = [eval(interest.toFixed(2)), eval(loanAmount)], labels = ["Interest", "Amount"], i = 0; i < data.length; ++i) labels[i] = labels[i] + "\n " + data[i] + " Rs";
    plotData(data, labels), columnCharts(detailDesc)
}

function columnCharts(t) {
    var e = t.slice(0, -2),
        a = "[" + e + "]";
    jsonObj = $.parseJSON(a), console.log(jsonObj);
    var l = {
        type: "serial",
        addClassNames: !0,
        theme: "light",
        autoMargins: !0,
        marginLeft: 30,
        marginRight: 8,
        marginTop: 10,
        marginBottom: 26,
        balloon: {
            adjustBorderColor: !1,
            horizontalPadding: 10,
            verticalPadding: 8,
            color: "#ffffff"
        },
        dataProvider: jsonObj,
        valueAxes: [{
            axisAlpha: 0,
            position: "left"
        }],
        startDuration: 1,
        graphs: [{
            alphaField: "alpha",
            balloonText: "<span style='font-size:12px;'>[[title]] paid :<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            fillAlphas: 1,
            title: "EMI Amount",
            type: "column",
            valueField: "Amount",
            dashLengthField: "dashLengthColumn"
        }, {
            id: "graph2",
            balloonText: "<span style='font-size:12px;'>[[title]] is:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            bullet: "round",
            lineThickness: 3,
            bulletSize: 7,
            bulletBorderAlpha: 1,
            bulletColor: "#FFFFFF",
            useLineColorForBulletBorder: !0,
            bulletBorderThickness: 3,
            fillAlphas: 0,
            lineAlpha: 1,
            title: "Balance",
            valueField: "Balance"
        }],
        categoryField: "emi",
        categoryAxis: {
            gridPosition: "start",
            axisAlpha: 0,
            tickLength: 0
        },
        "export": {
            enabled: !0
        }
    };
    AmCharts.makeChart("chartdiv", l)
}
var myColor = ["#6599FF", "#FF9900", "#E44424"],
    myData, myLabel;
$(function() {
$("#storlekslider").slider({
        range: "max",
        min: 1e5,
        max: 5e6,
        value: 5e5,
        slide: function(t, e) {
            $("#storlek_testet").val(e.value), $(e.value).val($("#storlek_testet").val()), calculateEMI()
        }
    }), $("#storlek_testet").keyup(function() {
        $("#storlekslider").slider("value", $(this).val()), calculateEMI()
    }),
    $("#storlek_testet").keyup(function() {
        $("#storlekslider").slider("value" , $(this).val())
    });
 $("#storlekslider2").slider({
        range: "max",
        min: 12,
        max: 60,
        value: 36,
        slide: function(t, e) {
            $("#storlek_testet2").val(e.value), $(e.value).val($("#storlek_testet2").val()), calculateEMI()
        }
    }),
   $("#storlek_testet2").keyup(function() {
        $("#storlekslider2").slider("value", $(this).val()), calculateEMI()
    }),
    $("#storlekslider3").slider({
        range: "max",
        min: 10,
        max: 20,
        value: 10.2,
        step: .1,
        slide: function(t, e) {
            $("#storlek_testet3").val(e.value), $(e.value).val($("#storlek_testet3").val()), calculateEMI()
        }
    }),
    $("#storlek_testet3").keyup(function() {
        $("#storlekslider3").slider("value", $(this).val()), calculateEMI()
    })
}), $(function() {
    $("#storlek_testet").val(5e5), $("#storlek_testet2").val(36), $("#storlek_testet3").val(10.2)
});