function id(idName) {
	return document.getElementById(idName);
}

function proxy(dom, handler) {
    return function() {
        return handler.apply(dom, arguments);
    };
}

function bind(dom, eventName, handler) {
	if(dom.addEventListener) {
	    dom.addEventListener(eventName, handler, false);
	} else if(dom.attachEvent) {
		var hd = proxy(dom, handler);
		
		dom.attachEvent('on' + eventName, function() {
			var event = {
			    'currentTarget' : dom,
				'target' : window.event.srcElement
		    };
			hd(event);
		});
		
	}
}

function style(obj, prop) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(obj, null)[prop];
	}
	else if(obj.currentStyle) {
		return obj.currentStyle[prop];
	}
	else {
		return null;
	}
}

function show(element) {
	element.style.display = element.previousDisplay || '';
	if(style(element, 'display') === 'none') {
		var node = document.createElement(element.nodeName);
		document.body.appendChild(node);
		element.style.display = style(node, 'display');
		document.body.removeChild(node);
	}
}

function hide(element) {
	element.previousDisplay = style(element, 'display');
	element.style.display = 'none';
}
