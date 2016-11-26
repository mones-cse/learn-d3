newX=10,newY=0;

var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')


var textArray =['start','middle','end'];
svg.append("text")
	.selectAll("tspan")
	.data(textArray)
	.enter().append("tspan")	
	.attr("x",newX)
	.attr("y",(d,i)=>{return 40+i*40})
	.attr("fill","green")
	.attr("stroke","blue")
	.attr("stroke-width","2")
	.attr("font-size","50")
	.text((d)=>{return d});