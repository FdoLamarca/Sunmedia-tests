var i = 0;
var t;
timedCount();

function timedCount() {
	console.log(i);
	i++; 
    t = setTimeout(function(){ timedCount() }, 1000); 
    if (i == 5) { 
	    clearTimeout(t);
	} 
};
