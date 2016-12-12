var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
var svg =d3.select('body').append('svg').attr('height','100%').attr('width','100%');
var maxHeight = 100;

var y=d3.scaleLinear()
		.domain([0,d3.max(dataArray)])
		.range([maxHeight,0]);
var area = d3.area()
			 .x((d,i)=>{return 10+i*20})
			 .y0(maxHeight)
			 .y1(d=>{return y(d)});


svg.append('path').attr('d',area(dataArray)).attr("fill","none").attr("stroke","blue");