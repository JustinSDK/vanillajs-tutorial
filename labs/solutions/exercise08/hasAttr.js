function hasAttr(obj, attrName) {
    return typeof(obj[attrName]) !== 'undefined';
}

function doCount(obj) {
	if(hasAttr(obj, 'count')) {
	    obj.count++;
    } else {
	    obj.count = 0;
    }
}

var obj = {};

doCount(obj);
console.log(obj.count);

doCount(obj);
console.log(obj.count);

doCount(obj);
console.log(obj.count);
