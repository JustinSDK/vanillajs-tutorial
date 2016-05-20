// 加入 Ajax 處理的相關程式碼

window.onload = function () {
    document.form1.onsubmit = function () {
        if (this.text.value.length === 0) {
            var span = document.createElement('span');
            span.className = 'highlight';
            var textNode = document.createTextNode('請填寫欄位');
            span.appendChild(textNode);
            document.getElementById('console').appendChild(span);
            return false;
        }
    };
};

