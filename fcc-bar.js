var maxHeight =400;
var maxWidth =550;
var positionX =100;
var positionY =70;

var path ='https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json';
var parseValue = [];
var parseDate =[]


d3.json(path, function(dataFromServer) {
	dataFromServer.data.forEach(function(data){
		 	parseValue.push(data[1]);
		 	parseDate.push(data[0]);
		 })

	var tooltip = d3.select("body")
	.append("div")
	.attr("class",'tooltip')
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
	.text("a simple tooltip");

	console.log(parseDate);
	var svg = d3.select('body').append('svg')
			.attr('height','100%')
			.attr('width','100%');

	var mainGroup = svg.append('g').attr('transform','translate('+positionX+','+positionY+')').attr('class','mainGroup')
	
	var totalData = parseValue.length;

	var modifyDate = d3.timeParse("%Y-%m-%d") 
	var formatTime = d3.timeFormat("%Y - %B");
	//console.log(modifyDate('1947-01-01'));
	
	var z =d3.scaleTime()
			 .domain(d3.extent(parseDate,function(d){return modifyDate(d);}))
			 .range([0,maxWidth])

	var x =d3.scaleLinear()
			 .domain([0,totalData])
			 .range([0,maxWidth])

	var y =d3.scaleLinear()
			 .domain([0,d3.max(parseValue)])
			 .range([maxHeight,0])    

    var yAxis = d3.axisLeft(y);
    var xAxis = d3.axisBottom(z);

    mainGroup.selectAll('rect')
		.data(dataFromServer.data)
		.enter().append('rect')
		.attr('y',d=>{return y(d[1])})
		.attr('x',(d,i)=>{return x(i)})
		.attr('width',Math.round(maxWidth/(totalData)))
		.attr('height',d=>{return maxHeight-y(d[1])})
  .attr('fill','rgba(0,0,0,0.7)')
		.on("mouseover", function(d){
			d3.select(this).attr("fill", "white");
			tooltip.html("$"+d[1]+" Billion <br/>"+formatTime(modifyDate(d[0]))); 
			return tooltip.style("visibility", "visible");
		})
		.on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		.on("mouseout", function(){
			d3.select(this).attr("fill", 'rgba(0,0,0,0.7)');
			return tooltip.style("visibility", "hidden");
		});


	mainGroup.append('g').attr('class','yAxis').call(yAxis)
	mainGroup.append('g').attr('class','xAxis').call(xAxis).attr('transform','translate(0,'+maxHeight+')')

	mainGroup.append("text")
      .attr("transform", "rotate(270)")
      .attr("y", 0)
      .attr("x",0-maxHeight/2)
      .attr("dy", "1.25em")
      .attr("fill","#fff")
      .attr("font-size","12px")
      .style("text-anchor", "start")
      .text("Gross Domestic Product, USA");
  
  
  mainGroup.append("text")
      .attr("y", 0)
      .attr("x",maxWidth/2)
      .attr("dy", "1em")
      .attr("fill","#fff")
      .attr("font-size","30px")
      .style("text-anchor", "middle")
      .text("Gross Domestic Product");


    

});

	

    

