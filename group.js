var dataArray=[{x:10,y:10},{x:15,y:30},{x:20,y:20},{x:30,y:60},{x:40,y:40}];
var interpolateTypes = [d3.curveLinear,d3.curveNatural,d3.curveStep, d3.curveBasis, d3.curveBundle,d3.curveCardinal];
var svg =d3.select('body').append('svg').attr('height','100%').attr('width','100%');

for( var p=0;p<6;p++){
var line = d3.line().x(d=>{return d.x*6}).y(d=>{return d.y*4}).curve(interpolateTypes[p]);
shiftx=p*250;

var chartGroup = svg.append('g').attr("transform","translate("+shiftx+",0)").attr("class","group"+p);  
//var chartGroup = svg.append("g").attr("transform","translate("+shiftx+",0)");
chartGroup.append('path').attr('d',line(dataArray)).attr('fill','none').attr('stroke','blue');
chartGroup.selectAll('circle')
		 .data(dataArray)
		  .enter().append('circle')
		  .attr('class','circle'+p)
		  .attr('cx',d=>{return d.x*6})
		  .attr('cy',d=>{return d.y*4})
		  .attr('r',2);
}








