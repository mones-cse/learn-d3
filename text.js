newX=100,newY=0;

var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')


svg.append('text')
	.attr('x',newX)
	.attr('y',70)
	.attr('font-size','50')
	.attr('fill','green')
	.attr('stroke','blue')
	.attr('stroke-width','1')
	.attr("dominant-baseline","middle")	
	.text("start ");


svg.append('text')
	.attr('x',newX)
	.attr('y',170)
	.attr('font-size','50')
	.attr('fill','green')
	.attr('stroke','blue')
	.attr('stroke-width','1')
	.attr("text-anchor","middle")
	.text("middle ");


svg.append('text')
	.attr('x',newX)
	.attr('y',270)
	.attr('font-size','50')
	.attr('fill','green')
	.attr('stroke','blue')
	.attr('stroke-width','1')
	.attr("text-anchor","end")
	.attr("dominant-baseline","hanging")	
	.text("end ");





svg.append('line')
	.attr('stroke','blue')
	.attr('stroke-width','2')
	.attr('x1',newX)
	.attr('y1',70)
	.attr('x2',newX	)
	.attr('y2',270);