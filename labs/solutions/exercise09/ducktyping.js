var obj = {
    '0' : 100,
    '1' : 200,
    '2' : 300,
    length : 3,
	forEach : function(callback) {
		for(var i = 0; i < this.length; i++) {
			callback(this[i]);
		}
	}
};

obj.forEach(console.log);

