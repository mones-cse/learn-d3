var dataArray =[10,20,30];
newX=0,newY=0;
var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')

svg.selectAll('line')
	.data(dataArray)
	.enter().append('line')
	.attr('stroke','blue')
	.attr('stroke-width','2')
	.attr('x1',(d,i)=>{return newX+10})
	.attr('y1',(d,i)=>{return 70+i*20})
	.attr('x2',(d,i)=>{return newX+10+d*8})
	.attr('y2',(d,i)=>{return 70+i*20});