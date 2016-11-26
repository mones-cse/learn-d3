var dataArray =[10,20,30];
newX=0,newY=0;

var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')
svg.selectAll('ellipse')
	.data(dataArray)
	.enter().append('ellipse')
	.attr('fill','red')
	.attr('rx',(d,i)=>{return d})
	.attr('ry',(d,i)=>{return d*(i==1?i*.5:1+i)})
	.attr('cx',(d,i)=>{return newX+d*3+i*30})
	.attr('cy',100);