var dataArray =[10,20,30];
newX=0,newY=0;

var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')

svg.selectAll('rect')
	.data(dataArray)
	.enter().append('rect')	
	.attr('fill','pink')
	.attr('height',d=>{return d*4})
	.attr('width',(d,i)=>{return 20})
	.attr('x',(d,i)=>{return 10+i*30})
	.attr('y',(d,i)=>{return 150-d*4});

