$(document).ready(function() {

  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'chart1',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2006', value: 10394 },
      { year: '2007', value: 50391 },
      { year: '2008', value: 102025 },
      { year: '2009', value: 198563 },
      { year: '2010', value: 985641 },
      { year: '2011', value: 1253256 },
      { year: '2012', value: 4563215 },
      { year: '2013', value: 10563215 },
      { year: '2014', value: 50125009 },
      { year: '2015', value: 129300581 },
      { year: '2016', value: 256251253 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Total Users']
  });

  Morris.Donut({
    element: 'chart2',
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ]
  });

  Morris.Area({
    element: 'chart3',
    data: [
      { y: '1', a: 80, b: 79 },
      { y: '2', a: 75,  b: 65 },
      { y: '3', a: 50,  b: 40 },
      { y: '4', a: 75,  b: 59 },
      { y: '5', a: 50,  b: 20 },
      { y: '6', a: 75,  b: 42 },
      { y: '7', a: 75,  b: 50 },
      { y: '8', a: 50,  b: 140 },
      { y: '9', a: 75,  b: null },
      { y: '10', a: 50,  b: null },
      { y: '11', a: 75,  b: null },
      { y: '12', a: 100, b: null }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['2015', '2016']
  });

  Morris.Bar({
    element: 'chart5',
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  });
});