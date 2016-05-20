var xhr = window.XMLHttpRequest &&
        (window.location.protocol !== 'file:'
                || !window.ActiveXObject) ?
        function () {
            return new XMLHttpRequest();
        } :
        function () {
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                throw new Error('XMLHttpRequest not supported');
            }
        };

function spanWith(msg) {
    var span = document.createElement('span');
    var textNode = document.createTextNode(msg);
    span.appendChild(textNode);
    return span;
}

function doTextIsEmpty() {
    var span = spanWith('請填寫欄位');
    span.className = 'highlight';
    document.getElementById('console').appendChild(span);
}

function doAjax(value) {
    var request = xhr();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var echo = JSON.parse(request.responseText);

                var timeSpan = spanWith(echo.echoTime);
                timeSpan.className = 'highlight2';
                document.getElementById('echoConsole').appendChild(timeSpan);

                document.getElementById('echoConsole').appendChild(document.createElement('br'));

                var textSpan = spanWith(echo.echoText);
                textSpan.className = 'highlight2';
                document.getElementById('echoConsole').appendChild(textSpan);
            }
        }
    };
    request.open('GET', 'UpperEcho?text=' + value + '&json');
    request.send(null);
}

window.onload = function () {
    document.form1.onsubmit = function () {
        document.getElementById('console').innerHTML = '';
        document.getElementById('echoConsole').innerHTML = '';

        var value = this.text.value;
        if (value.length === 0) {
            doTextIsEmpty();
        } else {
            doAjax(value);
        }

        return false;
    };
};



