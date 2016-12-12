var dataArray=[{x:10,y:10},{x:15,y:30},{x:20,y:20},{x:30,y:60},{x:40,y:40}];
var svg =d3.select('body').append('svg').attr('height','100%').attr('width','100%');

// var line = d3.line().x(d=>{return d.x*6}).y(d=>{return d.y*4});
//var line = d3.line().x(d=>{return d.x*6}).y(d=>{return d.y*4}).curve(d3.curveStep);
var line = d3.line().x(d=>{return d.x*6}).y(d=>{return d.y*4}).curve(d3.curveCardinal);

svg.append('path').attr('d',line(dataArray)).attr('fill','none').attr('stroke','blue');
