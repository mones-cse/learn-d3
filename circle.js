var dataArray =[10,20,30];
newX=0,newY=0;

var svg =d3.select('body').append('svg').attr('width','100%').attr('height','100%')
svg.selectAll('circle')
	.data(dataArray)
	.enter().append('circle')
	.attr('fill','red')
	.attr('r',(d,i)=>{return d})
	.attr('cx',(d,i)=>{return newX+d*3+i*30})
	.attr('cy',100);
