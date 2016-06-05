 window.onload = function() {
    function handler() {
        document.getElementById('console').innerHTML 
             = 'Who\'s clicked: ' + this.id;
    }
	
	function action() {
		document.getElementById('console').innerHTML 
             = 'do action: ' + this.id;
	}

    document.getElementById('btn1').onclick = handler;
	document.getElementById('btn1').onclick = action;
	
    document.getElementById('btn2').onclick = handler;
};

var o = {};
o.x = 10;
o.x = 20;

